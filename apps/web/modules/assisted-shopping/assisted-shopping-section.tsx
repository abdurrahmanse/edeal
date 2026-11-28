"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/modules/ui/dialog";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Textarea } from "@/modules/ui/textarea";
import { Button } from "@/modules/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { ShoppingBag, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Link2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/modules/core/hooks";
import { setAssistedShoppingModalOpen } from "@/modules/core/slices/uiSlice";
import { shipmentRepository } from "@/modules/core/repositories";
import { toast } from "sonner";

export function AssistedShoppingSection() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isAssistedShoppingModalOpen);

  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState<any>("Amazon");
  const [estPrice, setEstPrice] = useState("199");
  const [contactName, setContactName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("Dhaka");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productUrl || !productName || !whatsapp) {
      toast.error("Please fill in product link, item name, and your WhatsApp number");
      return;
    }

    setSubmitting(true);
    try {
      const res = await shipmentRepository.requestAssistedShopping({
        productUrl,
        productName,
        storeName,
        estimatedPriceUSD: Number(estPrice) || 100,
        quantity: 1,
        customerContact: {
          name: contactName || "Expat Customer",
          email: "customer@example.com",
          whatsappNumber: whatsapp,
          bdDeliveryCity: deliveryCity,
        },
      });

      setResult(res);
      toast.success("Assisted shopping inquiry submitted!");
    } catch (err: any) {
      toast.error(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    dispatch(setAssistedShoppingModalOpen(false));
    setTimeout(() => {
      setResult(null);
      setProductUrl("");
      setProductName("");
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden border-border bg-card">
        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-black/20 border border-white/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              "Buy For Me" Concierge Service
            </span>
          </div>

          <DialogTitle className="text-2xl font-extrabold text-white">
            Shop from Amazon, Walmart or Apple — Ship to BD
          </DialogTitle>
          <DialogDescription className="text-orange-100 text-xs mt-1 leading-relaxed">
            Don't have an international credit card or US address? Simply paste any product link. Our US procurement team will buy it on your behalf and deliver it straight to your family in Bangladesh!
          </DialogDescription>
        </div>

        <div className="p-6">
          {result ? (
            <div className="space-y-4 text-center py-4">
              <div className="h-14 w-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Inquiry Submitted!</h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-4">
                {result.message}
              </p>
              <div className="p-3 rounded-xl bg-muted font-mono text-xs font-bold text-foreground">
                Inquiry Ref: {result.referenceId}
              </div>
              <Button onClick={handleClose} variant="gradient" className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <Label>Online Store</Label>
                <Select value={storeName} onValueChange={(val: any) => setStoreName(val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Amazon">Amazon USA</SelectItem>
                    <SelectItem value="Walmart">Walmart</SelectItem>
                    <SelectItem value="BestBuy">Best Buy Electronics</SelectItem>
                    <SelectItem value="Apple">Apple Official Store</SelectItem>
                    <SelectItem value="eBay">eBay</SelectItem>
                    <SelectItem value="Other">Other US / UK Online Store</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Product Page URL (Link) *</Label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="https://www.amazon.com/dp/B0..."
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Item Name & Model *</Label>
                  <Input
                    placeholder="e.g. Apple iPad Air 11-inch M2"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Estimated Price in USD ($)</Label>
                  <Input
                    type="number"
                    placeholder="599"
                    value={estPrice}
                    onChange={(e) => setEstPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Your Full Name</Label>
                  <Input
                    placeholder="e.g. Faruk Hossain"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>WhatsApp Number for Quote *</Label>
                  <Input
                    placeholder="e.g. +1 917 555-0199 or +880 1711..."
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Destination City in Bangladesh</Label>
                <Input
                  placeholder="e.g. Dhaka, Chittagong, Sylhet, Bogra..."
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  variant="sunset"
                  className="w-full gap-2 font-bold py-6 text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{submitting ? "Sending Request..." : "Request Price & Purchase Quote"}</span>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>You can pay via bKash, Nagad, BD Bank Transfer or US Credit Card</span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
