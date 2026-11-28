import React from "react";
import { Label } from "@/modules/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { OriginCountry, BangladeshDivision } from "@/modules/core/types";
import { MapPin, Globe } from "lucide-react";

interface RouteSelectorProps {
  origin: OriginCountry;
  destination: BangladeshDivision;
  onOriginChange: (origin: OriginCountry) => void;
  onDestinationChange: (dest: BangladeshDivision) => void;
}

export function RouteSelector({
  origin,
  destination,
  onOriginChange,
  onDestinationChange,
}: RouteSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-emerald-600" />
          <span>Sender Location (Origin)</span>
        </Label>
        <Select value={origin} onValueChange={(val: any) => onOriginChange(val)}>
          <SelectTrigger className="glass-surface-subtle border-border/40 rounded-2xl h-11">
            <SelectValue placeholder="Select Origin" />
          </SelectTrigger>
          <SelectContent className="glass-surface border-white/20 dark:border-white/10 rounded-2xl">
            <SelectItem value="USA">🇺🇸 United States (JFK / Houston)</SelectItem>
            <SelectItem value="UK">🇬🇧 United Kingdom (London LHR)</SelectItem>
            <SelectItem value="CAN">🇨🇦 Canada (Toronto / Montreal)</SelectItem>
            <SelectItem value="UAE">🇦🇪 United Arab Emirates (Dubai)</SelectItem>
            <SelectItem value="MYS">🇲🇾 Malaysia (Kuala Lumpur)</SelectItem>
            <SelectItem value="AUS">🇦🇺 Australia (Sydney / Melbourne)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-teal-600" />
          <span>Recipient Division (Bangladesh)</span>
        </Label>
        <Select value={destination} onValueChange={(val: any) => onDestinationChange(val)}>
          <SelectTrigger className="glass-surface-subtle border-border/40 rounded-2xl h-11">
            <SelectValue placeholder="Select Destination" />
          </SelectTrigger>
          <SelectContent className="glass-surface border-white/20 dark:border-white/10 rounded-2xl">
            <SelectItem value="Dhaka">🇧🇩 Dhaka Division (Next-day)</SelectItem>
            <SelectItem value="Chattogram">🇧🇩 Chattogram Division</SelectItem>
            <SelectItem value="Sylhet">🇧🇩 Sylhet Division (Direct Hub)</SelectItem>
            <SelectItem value="Rajshahi">🇧🇩 Rajshahi Division</SelectItem>
            <SelectItem value="Khulna">🇧🇩 Khulna Division</SelectItem>
            <SelectItem value="Barishal">🇧🇩 Barishal Division</SelectItem>
            <SelectItem value="Rangpur">🇧🇩 Rangpur Division</SelectItem>
            <SelectItem value="Mymensingh">🇧🇩 Mymensingh Division</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
