"use client";

import React from "react";
import { Card } from "@/modules/ui/card";
import { WhatsappLink } from "@/modules/components/atoms/whatsapp-link";
import { PhoneLink } from "@/modules/components/atoms/phone-link";
import { EmailLink } from "@/modules/components/atoms/email-link";
import { MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";

export function ContactChannelsSection() {
  return (
    <div className="space-y-6">
      <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">Instant Concierge Desk</h3>
            <p className="text-xs text-muted-foreground">Bengali & English Support Available</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <WhatsappLink label="WhatsApp Concierge (24/7)" phoneNumber="19175550199" />
          <PhoneLink phoneNumber="+18008882766" displayNumber="+1 (800) 888-2766" countryCode="USA" />
          <PhoneLink phoneNumber="+8801711000000" displayNumber="+880 1711-000000" countryCode="BD" />
          <EmailLink email="care@aponbridge.com" />
        </div>

        <div className="pt-4 border-t border-white/20 dark:border-white/5 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span>Support Hours: 24 Hours, 7 Days a Week</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-500" />
            <span>US HQ: 147-35 Farmers Blvd, Jamaica, NY</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Dhaka Central Hub: 42 Tejgaon I/A, Dhaka-1208</span>
          </div>
        </div>
      </Card>

      <div className="glass-surface specular-shine rounded-3xl p-6 flex items-center gap-4 text-xs">
        <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
        <p className="text-muted-foreground">
          Are you shipping for Eid, Ramadan, or family medical emergencies? Let our concierge know for priority dispatch routing.
        </p>
      </div>
    </div>
  );
}
export default ContactChannelsSection;
