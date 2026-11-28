import React from "react";
import { Label } from "@/modules/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { ShippingCategory } from "@/modules/core/types";
import { Package } from "lucide-react";

interface CategorySelectorProps {
  category: ShippingCategory;
  onCategoryChange: (cat: ShippingCategory) => void;
}

export function CategorySelector({ category, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5">
        <Package className="w-3.5 h-3.5 text-emerald-600" />
        <span>Item Category</span>
      </Label>
      <Select value={category} onValueChange={(val: any) => onCategoryChange(val)}>
        <SelectTrigger className="glass-surface-subtle border-border/40 rounded-2xl h-11">
          <SelectValue placeholder="Select Item Category" />
        </SelectTrigger>
        <SelectContent className="glass-surface border-white/20 dark:border-white/10 rounded-2xl">
          <SelectItem value="clothes">👕 Clothes, Shoes, Blankets & Fashion</SelectItem>
          <SelectItem value="electronics">💻 Laptops, Phones, Tablets & Gadgets</SelectItem>
          <SelectItem value="medicines">💊 Vitamins, Supplements & Prescriptions</SelectItem>
          <SelectItem value="dry_food">🍫 Chocolates, Coffee, Nuts & Dry Food</SelectItem>
          <SelectItem value="cosmetics">💄 Perfumes, Skin Care & Cosmetics</SelectItem>
          <SelectItem value="documents">📄 Legal Documents, Certificates & Passports</SelectItem>
          <SelectItem value="general">📦 General Mixed Gift Box</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
