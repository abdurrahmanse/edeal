import {
  ShippingQuote,
  ShippingCategory,
  ShippingSpeed,
  OriginCountry,
  BangladeshDivision,
  ShipmentRecord,
} from "../types";

export interface CalculateQuoteRequest {
  origin: OriginCountry;
  destination: BangladeshDivision;
  category: ShippingCategory;
  weightLbs: number;
  speed: ShippingSpeed;
  includeInsurance: boolean;
  fragileHandling: boolean;
  doorstepDelivery: boolean;
}

export interface BookingSubmissionRequest {
  sender: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    country: OriginCountry;
  };
  recipient: {
    fullName: string;
    phone: string;
    alternativePhone?: string;
    district: string;
    division: BangladeshDivision;
    address: string;
    postalCode?: string;
  };
  packageDetails: {
    category: ShippingCategory;
    weightLbs: number;
    declaredValueUSD: number;
    description: string;
    speed: ShippingSpeed;
    includeInsurance: boolean;
    fragileHandling: boolean;
  };
}

export interface BookingResponse {
  success: boolean;
  trackingNumber: string;
  consignmentId: string;
  totalAmountUSD: number;
  createdAt: string;
  estimatedDeliveryDate: string;
  pickupDropoffInstructions: string;
}

export interface AssistedShoppingRequest {
  productUrl: string;
  productName: string;
  storeName: "Amazon" | "Walmart" | "BestBuy" | "Apple" | "eBay" | "Other";
  estimatedPriceUSD: number;
  quantity: number;
  notes?: string;
  customerContact: {
    name: string;
    email: string;
    whatsappNumber: string;
    bdDeliveryCity: string;
  };
}

export interface AssistedShoppingResponse {
  referenceId: string;
  message: string;
  status: "quotation_pending" | "approved";
  reviewByHours: number;
}

/**
 * Clean Architecture Repository Interface
 * Both Mock Repository and Django REST Repository implement this contract.
 */
export interface IShipmentRepository {
  calculateQuote(request: CalculateQuoteRequest): Promise<ShippingQuote>;
  submitBooking(request: BookingSubmissionRequest): Promise<BookingResponse>;
  trackShipment(trackingNumber: string): Promise<ShipmentRecord | null>;
  listRecentShipments(): Promise<ShipmentRecord[]>;
  requestAssistedShopping(request: AssistedShoppingRequest): Promise<AssistedShoppingResponse>;
}
