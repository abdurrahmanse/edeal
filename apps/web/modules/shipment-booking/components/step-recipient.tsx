import React from "react";
import { User, Phone, MapPin, Building, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Textarea } from "@/modules/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { BangladeshDivision } from "@/modules/core/types";

interface StepRecipientProps {
  recipientName: string;
  recipientPhone: string;
  recipientDistrict: string;
  recipientDivision: BangladeshDivision;
  recipientAddress: string;
  onChangeName: (val: string) => void;
  onChangePhone: (val: string) => void;
  onChangeDistrict: (val: string) => void;
  onChangeDivision: (val: BangladeshDivision) => void;
  onChangeAddress: (val: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepRecipient({
  recipientName,
  recipientPhone,
  recipientDistrict,
  recipientDivision,
  recipientAddress,
  onChangeName,
  onChangePhone,
  onChangeDistrict,
  onChangeDivision,
  onChangeAddress,
  onNext,
  onBack,
}: StepRecipientProps) {
  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-emerald-600" />
            <span>Recipient Family Name in BD *</span>
          </Label>
          <Input
            placeholder="e.g. Mrs. Rabeya Begum (Mother)"
            value={recipientName}
            onChange={(e) => onChangeName(e.target.value)}
            className="h-11"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>BD Mobile Number (For Rider OTP) *</span>
          </Label>
          <Input
            placeholder="e.g. 01711-XXXXXX or 01811-XXXXXX"
            value={recipientPhone}
            onChange={(e) => onChangePhone(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-emerald-600" />
            <span>Division in Bangladesh</span>
          </Label>
          <Select value={recipientDivision} onValueChange={(val: any) => onChangeDivision(val)}>
            <SelectTrigger className="h-11 glass-surface-subtle">
              <SelectValue placeholder="Division" />
            </SelectTrigger>
            <SelectContent className="glass-surface">
              <SelectItem value="Dhaka">Dhaka Division</SelectItem>
              <SelectItem value="Chattogram">Chattogram Division</SelectItem>
              <SelectItem value="Sylhet">Sylhet Division</SelectItem>
              <SelectItem value="Rajshahi">Rajshahi Division</SelectItem>
              <SelectItem value="Khulna">Khulna Division</SelectItem>
              <SelectItem value="Barishal">Barishal Division</SelectItem>
              <SelectItem value="Rangpur">Rangpur Division</SelectItem>
              <SelectItem value="Mymensingh">Mymensingh Division</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>District / Upazila</span>
          </Label>
          <Input
            placeholder="e.g. Uttara (Dhaka) or Ambarkhana (Sylhet)"
            value={recipientDistrict}
            onChange={(e) => onChangeDistrict(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Detailed Delivery Address *</span>
        </Label>
        <Textarea
          placeholder="House number, road number, sector, village or thana for doorstep courier drop-off..."
          value={recipientAddress}
          onChange={(e) => onChangeAddress(e.target.value)}
          className="min-h-[75px]"
        />
      </div>

      <div className="pt-2 flex justify-between items-center">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button onClick={onNext} variant="gradient" className="gap-2 font-bold px-6">
          <span>Review Package Details</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
