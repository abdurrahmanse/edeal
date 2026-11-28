"use client";

import React, { useState } from "react";
import { Card } from "@/modules/ui/card";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Textarea } from "@/modules/ui/textarea";
import { Button } from "@/modules/ui/button";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactInquiryFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message");
      return;
    }
    setSent(true);
    toast.success("Message received! Our team will reply within 2 hours.");
  };

  return (
    <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-10 border border-emerald-500/20">
      {sent ? (
        <div className="text-center py-12 space-y-4">
          <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Thank you, {name}. Our expat logistics specialist will reach out to you at {email} or via WhatsApp within 2 hours.
          </p>
          <Button onClick={() => setSent(false)} variant="outline" className="rounded-xl mt-4">
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">Send an Inquiry</h3>
            <p className="text-xs text-muted-foreground">Fill in the form below for a rapid response from our freight team.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Your Full Name</Label>
              <Input
                placeholder="Tanvir Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-surface rounded-xl h-11 text-xs"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Email Address</Label>
              <Input
                type="email"
                placeholder="tanvir@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-surface rounded-xl h-11 text-xs"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Phone / WhatsApp Number</Label>
            <Input
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="glass-surface rounded-xl h-11 text-xs font-mono"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Your Message or Item Questions</Label>
            <Textarea
              placeholder="Tell us what you plan to ship (weight, dimensions, items) or any questions you have regarding customs and drop-offs..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="glass-surface rounded-xl min-h-[120px] text-xs"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-12 font-bold shadow-lg shadow-emerald-600/20 text-sm gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </Button>
        </form>
      )}
    </Card>
  );
}
export default ContactInquiryFormSection;
