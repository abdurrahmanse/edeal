export type ShippingCategory = "clothes" | "electronics" | "medicines" | "dry_food" | "documents" | "cosmetics" | "general";

export type ShippingSpeed = "standard_air" | "express_air" | "sea_cargo";

export type OriginCountry = "USA" | "UK" | "CAN" | "UAE" | "MYS" | "AUS";

export type BangladeshDivision =
  | "Dhaka"
  | "Chattogram"
  | "Sylhet"
  | "Rajshahi"
  | "Khulna"
  | "Barishal"
  | "Rangpur"
  | "Mymensingh";

export interface ShippingQuote {
  origin: OriginCountry;
  destinationDivision: BangladeshDivision;
  category: ShippingCategory;
  weightLbs: number;
  speed: ShippingSpeed;
  includeInsurance: boolean;
  fragileHandling: boolean;
  doorstepDelivery: boolean;
  baseCharge: number;
  weightCharge: number;
  customsEst: number;
  insuranceFee: number;
  totalCostUSD: number;
  estimatedDays: string;
}

export interface TrackingCheckpoint {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  completed: boolean;
  current: boolean;
  description: string;
  iconName: "package" | "plane" | "shield-check" | "warehouse" | "truck" | "home";
}

export interface ShipmentRecord {
  trackingNumber: string;
  senderName: string;
  senderLocation: string;
  recipientName: string;
  recipientLocation: string;
  weightLbs: number;
  category: string;
  speed: string;
  estimatedDelivery: string;
  currentStatus: string;
  progressPercent: number;
  checkpoints: TrackingCheckpoint[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  deliveredTo: string;
  itemType: string;
}
