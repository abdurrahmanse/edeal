"use client";

import React, { useState } from "react";
import { Card } from "@/modules/ui/card";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Button } from "@/modules/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { Link2, ShieldCheck, CheckCircle2, Sparkles, CreditCard } from "lucide-react";
import { shipmentRepository } from "@/modules/core/repositories";
import { toast } from "sonner";

export function AssistedOrderFormSection() {
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
      toast.success("Assisted shopping request received!");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-10 border border-emerald-500/30">
        {result ? (
          <div className="text-center py-8 space-y-4">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Order Quote Generated!</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Order Reference: <strong className="text-foreground font-mono">{result.id}</strong>. Our US purchasing desk has received your item request.
            </p>
            <div className="glass-surface rounded-2xl p-4 max-w-sm mx-auto text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Item Price:</span>
                <span className="font-mono font-bold text-foreground">${result.estimatedPriceUSD}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service Fee (6%):</span>
                <span className="font-mono font-bold text-foreground">${result.serviceFeeUSD}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/20 dark:border-white/5 font-bold">
                <span>Total Estimated:</span>
                <span className="text-emerald-600 font-mono">${result.totalEstimatedUSD}</span>
              </div>
            </div>
            <Button onClick={() => setResult(null)} variant="outline" className="rounded-xl mt-4">
              Submit Another Product
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-emerald-500" />
                Product URL / Link
              </Label>
              <Input
                placeholder="https://www.amazon.com/dp/B09V3HMK6B or Walmart link"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                className="glass-surface rounded-xl h-11 text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Store / Merchant</Label>
                <Select value={storeName} onValueChange={setStoreName}>
                  <SelectTrigger className="glass-surface rounded-xl h-11 text-xs">
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent className="glass-surface">
                    <SelectItem value="Amazon">Amazon USA</SelectItem>
                    <SelectItem value="Walmart">Walmart</SelectItem>
                    <SelectItem value="BestBuy">Best Buy</SelectItem>
                    <SelectItem value="Apple">Apple Store</SelectItem>
                    <SelectItem value="eBay">eBay</SelectItem>
                    <SelectItem value="Target">Target</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Item Name / Title</Label>
                <Input
                  placeholder="e.g. Apple Watch Series 9"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Listed Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="199"
                  value={estPrice}
                  onChange={(e) => setEstPrice(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs font-mono"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Your Name</Label>
                <Input
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">WhatsApp Number (For Instant Quote)</Label>
                <Input
                  placeholder="+1 (555) 000-0000 or BD #"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs font-mono"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Delivery City in Bangladesh</Label>
                <Select value={deliveryCity} onValueChange={setDeliveryCity}>
                  <SelectTrigger className="glass-surface rounded-xl h-11 text-xs">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="glass-surface">
                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                    <SelectItem value="Chittagong">Chittagong</SelectItem>
                    <SelectItem value="Sylhet">Sylhet</SelectItem>
                    <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="Khulna">Khulna</SelectItem>
                    <SelectItem value="Barisal">Barisal</SelectItem>
                    <SelectItem value="Rangpur">Rangpur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-12 font-bold shadow-lg shadow-emerald-600/20 text-sm gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>{submitting ? "Calculating Quote..." : "Get Instant Purchase Quote & Proceed"}</span>
            </Button>
          </form>
        )}
      </Card>
    </section>
  );
}
export default AssistedOrderFormSection;
