import React from "react";
import { User, Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { OriginCountry } from "@/modules/core/types";

interface StepSenderProps {
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  senderCity: string;
  senderCountry: OriginCountry;
  onChangeName: (val: string) => void;
  onChangePhone: (val: string) => void;
  onChangeEmail: (val: string) => void;
  onChangeCity: (val: string) => void;
  onChangeCountry: (val: OriginCountry) => void;
  onNext: () => void;
}

export function StepSender({
  senderName,
  senderPhone,
  senderEmail,
  senderCity,
  senderCountry,
  onChangeName,
  onChangePhone,
  onChangeEmail,
  onChangeCity,
  onChangeCountry,
  onNext,
}: StepSenderProps) {
  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sender Full Name *</span>
          </Label>
          <Input
            placeholder="e.g. Tanvir Ahmed"
            value={senderName}
            onChange={(e) => onChangeName(e.target.value)}
            className="h-11"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sender Phone (Abroad) *</span>
          </Label>
          <Input
            placeholder="e.g. +1 (917) 555-0199"
            value={senderPhone}
            onChange={(e) => onChangePhone(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-emerald-600" />
          <span>Email Address (For Invoices & AWB updates)</span>
        </Label>
        <Input
          type="email"
          placeholder="e.g. tanvir.ahmed@gmail.com"
          value={senderEmail}
          onChange={(e) => onChangeEmail(e.target.value)}
          className="h-11"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Origin Country</span>
          </Label>
          <Select value={senderCountry} onValueChange={(val: any) => onChangeCountry(val)}>
            <SelectTrigger className="h-11 glass-surface-subtle">
              <SelectValue placeholder="Origin Country" />
            </SelectTrigger>
            <SelectContent className="glass-surface">
              <SelectItem value="USA">🇺🇸 United States (JFK / Houston)</SelectItem>
              <SelectItem value="UK">🇬🇧 United Kingdom (London LHR)</SelectItem>
              <SelectItem value="CAN">🇨🇦 Canada (Toronto)</SelectItem>
              <SelectItem value="UAE">🇦🇪 United Arab Emirates (Dubai)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sender City & State</span>
          </Label>
          <Input
            placeholder="e.g. Queens, New York"
            value={senderCity}
            onChange={(e) => onChangeCity(e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      <div className="pt-2 flex justify-end">
        <Button onClick={onNext} variant="gradient" className="gap-2 font-bold px-6">
          <span>Continue to Recipient Details</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
