"use client";

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { useActiveCurrency } from "@/modules/core/hooks";
import { ShippingQuote } from "@/modules/core/types";

interface CostBreakdownChartProps {
  quote: ShippingQuote;
}

export function CostBreakdownChart({ quote }: CostBreakdownChartProps) {
  const { format } = useActiveCurrency();

  const data = [
    { name: "Base Charge", amount: quote.baseCharge, color: "#10b981" },
    { name: "Weight Charge", amount: quote.weightCharge, color: "#059669" },
    { name: "Customs & Tax", amount: quote.customsEst, color: "#f59e0b" },
    { name: "Insurance & Add-ons", amount: quote.insuranceFee, color: "#3b82f6" },
  ];

  return (
    <div className="w-full h-44 mt-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span className="font-semibold uppercase tracking-wider">Transparent Cost Breakdown</span>
        <span>Total: <strong className="text-foreground font-mono">{format(quote.totalCostUSD)}</strong></span>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 25, left: 20, bottom: 0 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fill: "currentColor" }}
            axisLine={false}
            tickLine={false}
            width={110}
          />
          <Tooltip
            formatter={(value: any) => [format(Number(value) || 0), "Cost"]}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              borderRadius: "0.75rem",
              fontSize: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar dataKey="amount" radius={[0, 8, 8, 0]} barSize={14}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
