"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/modules/ui/dialog";
import { Progress } from "@/modules/ui/progress";
import { useAppDispatch, useAppSelector, useActiveCurrency } from "@/modules/core/hooks";
import { setBookingModalOpen, setTrackingModalOpen } from "@/modules/core/slices/uiSlice";
import { addBooking, lookupTracking } from "@/modules/core/slices/shippingSlice";
import { shipmentRepository } from "@/modules/core/repositories";
import { OriginCountry, BangladeshDivision } from "@/modules/core/types";

// Clean Subcomponents
import { StepSender } from "./components/step-sender";
import { StepRecipient } from "./components/step-recipient";
import { StepDeclaration } from "./components/step-declaration";
import { StepConfirmation } from "./components/step-confirmation";

export function BookingModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isBookingModalOpen);
  const { calculator, activeQuote } = useAppSelector((state) => state.shipping);
  const { format } = useActiveCurrency();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitting, setSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  // Form states
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderCity, setSenderCity] = useState("New York, NY");
  const [senderCountry, setSenderCountry] = useState<OriginCountry>(calculator.origin);

  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientDistrict, setRecipientDistrict] = useState("Dhaka");
  const [recipientDivision, setRecipientDivision] = useState<BangladeshDivision>(calculator.destination);
  const [recipientAddress, setRecipientAddress] = useState("");

  const [itemDescription, setItemDescription] = useState("");
  const [declaredValueUSD, setDeclaredValueUSD] = useState("350");

  const progressPercent = step === 1 ? 25 : step === 2 ? 50 : step === 3 ? 75 : 100;

  const handleNextStep1 = () => {
    if (!senderName || !senderPhone) {
      toast.error("Please fill in sender name and phone number");
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (!recipientName || !recipientPhone || !recipientAddress) {
      toast.error("Please fill in recipient name, phone, and complete delivery address in Bangladesh");
      return;
    }
    setStep(3);
  };

  const handleSubmitBooking = async () => {
    if (!itemDescription) {
      toast.error("Please enter a brief description of the items inside the package");
      return;
    }

    setSubmitting(true);
    try {
      const response = await shipmentRepository.submitBooking({
        sender: {
          fullName: senderName || "Tanvir Ahmed",
          phone: senderPhone || "+1 (917) 555-0182",
          email: senderEmail || "sender@example.com",
          address: "Queens, NY",
          city: senderCity,
          country: senderCountry,
        },
        recipient: {
          fullName: recipientName,
          phone: recipientPhone,
          district: recipientDistrict,
          division: recipientDivision,
          address: recipientAddress,
        },
        packageDetails: {
          category: calculator.category,
          weightLbs: calculator.weightLbs,
          declaredValueUSD: Number(declaredValueUSD) || 200,
          description: itemDescription,
          speed: calculator.speed,
          includeInsurance: calculator.includeInsurance,
          fragileHandling: calculator.fragileHandling,
        },
      });

      dispatch(
        addBooking({
          recipientName,
          itemDesc: itemDescription,
          weight: calculator.weightLbs,
          trackingCode: response.trackingNumber,
        })
      );

      setConfirmedBooking(response);
      setStep(4);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#10b981", "#059669", "#f59e0b", "#3b82f6"],
      });

      toast.success("Parcel Booked Successfully!", {
        description: `Your tracking code is ${response.trackingNumber}`,
      });
    } catch (err: any) {
      toast.error("Booking error", {
        description: err.message || "Failed to submit booking",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyTracking = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Tracking number copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTrackNow = (code: string) => {
    dispatch(lookupTracking(code));
    dispatch(setBookingModalOpen(false));
    dispatch(setTrackingModalOpen(true));
  };

  const handleClose = () => {
    dispatch(setBookingModalOpen(false));
    setTimeout(() => {
      setStep(1);
      setConfirmedBooking(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden border-border bg-card">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-800 via-emerald-900 to-teal-900 text-white p-6 pb-5 relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-700/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-emerald-200">
              AponBridge Booking Wizard
            </span>
            <span className="text-xs text-emerald-300 font-mono">
              Step {step} of 4
            </span>
          </div>
          <DialogTitle className="text-2xl font-extrabold text-white">
            {step === 1 && "Sender Information (Abroad)"}
            {step === 2 && "Recipient in Bangladesh"}
            {step === 3 && "Package Declarations & Summary"}
            {step === 4 && "Booking Confirmed! 🎉"}
          </DialogTitle>
          <DialogDescription className="text-emerald-200/80 text-xs mt-1">
            {step === 1 && "Tell us who is shipping this package from the USA, UK, or Canada."}
            {step === 2 && "Provide your family's delivery address for direct doorstep handover in Bangladesh."}
            {step === 3 && "Confirm the items being shipped for smooth Bangladesh customs clearance."}
            {step === 4 && "Your shipment slot is reserved. Present this tracking code or drop-off label."}
          </DialogDescription>

          <Progress value={progressPercent} className="mt-4 h-1.5 bg-emerald-950/60" />
        </div>

        <div className="p-6">
          {step === 1 && (
            <StepSender
              senderName={senderName}
              senderPhone={senderPhone}
              senderEmail={senderEmail}
              senderCity={senderCity}
              senderCountry={senderCountry}
              onChangeName={setSenderName}
              onChangePhone={setSenderPhone}
              onChangeEmail={setSenderEmail}
              onChangeCity={setSenderCity}
              onChangeCountry={setSenderCountry}
              onNext={handleNextStep1}
            />
          )}

          {step === 2 && (
            <StepRecipient
              recipientName={recipientName}
              recipientPhone={recipientPhone}
              recipientDistrict={recipientDistrict}
              recipientDivision={recipientDivision}
              recipientAddress={recipientAddress}
              onChangeName={setRecipientName}
              onChangePhone={setRecipientPhone}
              onChangeDistrict={setRecipientDistrict}
              onChangeDivision={setRecipientDivision}
              onChangeAddress={setRecipientAddress}
              onNext={handleNextStep2}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <StepDeclaration
              quote={activeQuote}
              itemDescription={itemDescription}
              declaredValueUSD={declaredValueUSD}
              submitting={submitting}
              formattedRate={format(activeQuote.totalCostUSD)}
              onChangeDescription={setItemDescription}
              onChangeValue={setDeclaredValueUSD}
              onSubmit={handleSubmitBooking}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && confirmedBooking && (
            <StepConfirmation
              trackingNumber={confirmedBooking.trackingNumber}
              senderEmail={senderEmail}
              estimatedDeliveryDate={confirmedBooking.estimatedDeliveryDate}
              pickupDropoffInstructions={confirmedBooking.pickupDropoffInstructions}
              copied={copied}
              onCopy={() => handleCopyTracking(confirmedBooking.trackingNumber)}
              onTrack={() => handleTrackNow(confirmedBooking.trackingNumber)}
              onClose={handleClose}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
