import React from "react";
import { Package, DollarSign, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Textarea } from "@/modules/ui/textarea";
import { ShippingQuote } from "@/modules/core/types";

interface StepDeclarationProps {
  quote: ShippingQuote;
  itemDescription: string;
  declaredValueUSD: string;
  submitting: boolean;
  formattedRate: string;
  onChangeDescription: (val: string) => void;
  onChangeValue: (val: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function StepDeclaration({
  quote,
  itemDescription,
  declaredValueUSD,
  submitting,
  formattedRate,
  onChangeDescription,
  onChangeValue,
  onSubmit,
  onBack,
}: StepDeclarationProps) {
  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-2xl glass-surface-subtle space-y-2 border border-white/20 dark:border-white/5">
        <div className="flex justify-between font-bold text-foreground">
          <span>Guaranteed Landing Fee:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">
            {formattedRate}
          </span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Weight & Speed:</span>
          <span>{quote.weightLbs} lbs • {quote.speed.replace("_", " ")}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Customs Status:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Legal Brokerage Included</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <Package className="w-3.5 h-3.5 text-emerald-600" />
          <span>Item Contents Declaration (For Customs Invoice) *</span>
        </Label>
        <Textarea
          placeholder="e.g. 1x Apple MacBook Air M2, 3x bottles Centrum vitamins, 2x winter sweaters for mother..."
          value={itemDescription}
          onChange={(e) => onChangeDescription(e.target.value)}
          className="min-h-[75px]"
        />
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
          <span>Declared Total Value of Goods (USD)</span>
        </Label>
        <Input
          type="number"
          placeholder="350"
          value={declaredValueUSD}
          onChange={(e) => onChangeValue(e.target.value)}
          className="h-11"
        />
        <p className="text-[11px] text-muted-foreground">
          Used for full value insurance cover and legal NBR customs declaration.
        </p>
      </div>

      <div className="pt-2 flex justify-between items-center">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>
        <Button
          onClick={onSubmit}
          variant="gradient"
          disabled={submitting}
          className="gap-2 font-bold px-6"
        >
          {submitting ? "Reserving Cargo Slot..." : "Confirm & Book Shipment"}
          <CheckCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
