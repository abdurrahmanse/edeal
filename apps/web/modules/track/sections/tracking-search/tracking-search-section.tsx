"use client";

import React from "react";
import { Input } from "@/modules/ui/input";
import { Button } from "@/modules/ui/button";
import { Search } from "lucide-react";

export interface TrackingSearchSectionProps {
  code: string;
  setCode: (c: string) => void;
  loading: boolean;
  onSearch: (e: React.FormEvent) => void;
  onPreset: (sample: string) => void;
}

export function TrackingSearchSection({
  code,
  setCode,
  loading,
  onSearch,
  onPreset,
}: TrackingSearchSectionProps) {
  return (
    <div className="max-w-xl mx-auto px-4 space-y-3">
      <form onSubmit={onSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Enter AponBridge tracking code (e.g. APN-88204-BD)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="pl-10 glass-surface rounded-2xl h-12 text-sm font-mono"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl px-6 h-12 font-semibold shadow-md shadow-emerald-600/20"
        >
          {loading ? "Syncing..." : "Track"}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Try Demo Consignments:</span>
        <button
          type="button"
          onClick={() => onPreset("APN-88204-BD")}
          className="font-mono underline text-emerald-600 dark:text-emerald-400 hover:opacity-80"
        >
          APN-88204-BD
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={() => onPreset("APN-91042-UK")}
          className="font-mono underline text-emerald-600 dark:text-emerald-400 hover:opacity-80"
        >
          APN-91042-UK
        </button>
      </div>
    </div>
  );
}
export default TrackingSearchSection;
