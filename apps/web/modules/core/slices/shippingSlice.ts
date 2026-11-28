import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShippingCategory, ShippingSpeed, OriginCountry, BangladeshDivision, ShippingQuote, ShipmentRecord } from "../types";

export interface ShippingState {
  calculator: {
    origin: OriginCountry;
    destination: BangladeshDivision;
    category: ShippingCategory;
    weightLbs: number;
    speed: ShippingSpeed;
    includeInsurance: boolean;
    fragileHandling: boolean;
    doorstepDelivery: boolean;
  };
  activeQuote: ShippingQuote;
  activeShipment: ShipmentRecord | null;
  sampleShipments: Record<string, ShipmentRecord>;
  recentBookings: Array<{
    id: string;
    trackingCode: string;
    recipientName: string;
    itemDesc: string;
    weight: number;
    date: string;
  }>;
}

const mockShipments: Record<string, ShipmentRecord> = {
  "APN-88204-BD": {
    trackingNumber: "APN-88204-BD",
    senderName: "Tanvir Ahmed (Software Engineer)",
    senderLocation: "New York (JFK Hub), USA",
    recipientName: "Mrs. Rabeya Begum (Mother)",
    recipientLocation: "Uttara, Dhaka, Bangladesh",
    weightLbs: 6.5,
    category: "Electronics (MacBook Air M2 & Vitamins)",
    speed: "Express Priority Air (4-6 Days)",
    estimatedDelivery: "November 25, 2026",
    currentStatus: "Customs Cleared at Hazrat Shahjalal Int'l Airport",
    progressPercent: 75,
    checkpoints: [
      {
        id: "1",
        status: "Package Received at JFK Hub",
        location: "Jamaica, NY, USA",
        timestamp: "Nov 20, 2026 - 10:30 AM EST",
        completed: true,
        current: false,
        description: "Package weighed, dimension-scanned, and prepared for export palletization.",
        iconName: "package",
      },
      {
        id: "2",
        status: "Export Customs Cleared & Loaded",
        location: "JFK Int'l Airport Cargo Terminal",
        timestamp: "Nov 21, 2026 - 06:15 PM EST",
        completed: true,
        current: false,
        description: "Airway Bill issued (AWB #82941). Loaded into Qatar Cargo flight QR-8104.",
        iconName: "plane",
      },
      {
        id: "3",
        status: "Arrived at Dhaka Cargo Terminal (DAC)",
        location: "Hazrat Shahjalal Int'l Airport, Dhaka",
        timestamp: "Nov 23, 2026 - 08:45 AM BST",
        completed: true,
        current: false,
        description: "De-palletized and submitted to Bangladesh Customs for accelerated clearance.",
        iconName: "warehouse",
      },
      {
        id: "4",
        status: "Customs Cleared — Handed to AponBridge Hub",
        location: "Tejgaon Central Sorting Facility, Dhaka",
        timestamp: "Nov 24, 2026 - 02:20 PM BST",
        completed: true,
        current: true,
        description: "All duties paid and verified. Dispatched for local doorstep dispatch.",
        iconName: "shield-check",
      },
      {
        id: "5",
        status: "Out for Doorstep Delivery",
        location: "Sector 4, Uttara, Dhaka",
        timestamp: "Estimated Nov 25, 2026 - 11:00 AM BST",
        completed: false,
        current: false,
        description: "AponBridge assigned express rider with secure OTP handover verification.",
        iconName: "truck",
      },
    ],
  },
  "APN-55410-BD": {
    trackingNumber: "APN-55410-BD",
    senderName: "Dr. Farhana Yasmin",
    senderLocation: "Houston, Texas, USA",
    recipientName: "Kazi Nazmul Huda (Brother)",
    recipientLocation: "Ambarkhana, Sylhet, Bangladesh",
    weightLbs: 14.0,
    category: "Winter Jackets, Shoes & Chocolates",
    speed: "Standard Air Economy (7-10 Days)",
    estimatedDelivery: "November 28, 2026",
    currentStatus: "In International Air Transit",
    progressPercent: 45,
    checkpoints: [
      {
        id: "1",
        status: "Received at Houston Warehouse",
        location: "Houston, TX, USA",
        timestamp: "Nov 19, 2026 - 02:00 PM CST",
        completed: true,
        current: false,
        description: "Box reinforced with waterproof sealing.",
        iconName: "package",
      },
      {
        id: "2",
        status: "In Flight Transit to Dhaka",
        location: "Emirates SkyCargo Flight EK-582",
        timestamp: "Nov 22, 2026 - 11:15 AM",
        completed: true,
        current: true,
        description: "Direct air connection via Dubai transit to Dhaka.",
        iconName: "plane",
      },
      {
        id: "3",
        status: "Dhaka Customs & Sorting",
        location: "Dhaka Hub, Bangladesh",
        timestamp: "Expected Nov 25",
        completed: false,
        current: false,
        description: "Pending landing and NBR import scan.",
        iconName: "warehouse",
      },
      {
        id: "4",
        status: "Inter-District Transit to Sylhet",
        location: "Sylhet Regional Logistics Center",
        timestamp: "Expected Nov 27",
        completed: false,
        current: false,
        description: "Dedicated climate-safe courier van transfer.",
        iconName: "truck",
      },
    ],
  },
};

function calculateShippingQuote(calc: ShippingState["calculator"]): ShippingQuote {
  const baseRatePerLb = calc.speed === "express_air" ? 11.5 : calc.speed === "standard_air" ? 8.5 : 4.5;
  const originMarkup = calc.origin === "USA" ? 0 : calc.origin === "UK" ? -0.5 : 0.8;
  const effectiveRate = Math.max(3.5, baseRatePerLb + originMarkup);

  const baseCharge = 12.0;
  const weightCharge = Math.round(calc.weightLbs * effectiveRate * 10) / 10;
  
  // category customs factor
  const catFactors: Record<ShippingCategory, number> = {
    clothes: 4,
    electronics: 18,
    medicines: 6,
    dry_food: 3,
    documents: 0,
    cosmetics: 8,
    general: 5,
  };

  const customsEst = catFactors[calc.category] || 5;
  const insuranceFee = calc.includeInsurance ? Math.max(5, Math.round(weightCharge * 0.05)) : 0;
  const fragileFee = calc.fragileHandling ? 7 : 0;
  const deliveryFee = calc.doorstepDelivery ? (calc.destination === "Dhaka" ? 3 : 6) : 0;

  const total = Math.round(baseCharge + weightCharge + customsEst + insuranceFee + fragileFee + deliveryFee);

  const daysMap: Record<ShippingSpeed, string> = {
    express_air: "4 - 6 Business Days",
    standard_air: "7 - 10 Business Days",
    sea_cargo: "25 - 35 Days (Affordable Bulk)",
  };

  return {
    origin: calc.origin,
    destinationDivision: calc.destination,
    category: calc.category,
    weightLbs: calc.weightLbs,
    speed: calc.speed,
    includeInsurance: calc.includeInsurance,
    fragileHandling: calc.fragileHandling,
    doorstepDelivery: calc.doorstepDelivery,
    baseCharge,
    weightCharge,
    customsEst,
    insuranceFee: insuranceFee + fragileFee + deliveryFee,
    totalCostUSD: total,
    estimatedDays: daysMap[calc.speed],
  };
}

const initialCalc: ShippingState["calculator"] = {
  origin: "USA",
  destination: "Dhaka",
  category: "electronics",
  weightLbs: 5,
  speed: "express_air",
  includeInsurance: true,
  fragileHandling: true,
  doorstepDelivery: true,
};

const initialState: ShippingState = {
  calculator: initialCalc,
  activeQuote: calculateShippingQuote(initialCalc),
  activeShipment: mockShipments["APN-88204-BD"] || null,
  sampleShipments: mockShipments,
  recentBookings: [
    {
      id: "b-1",
      trackingCode: "APN-88204-BD",
      recipientName: "Mrs. Rabeya Begum",
      itemDesc: "MacBook Air & Vitamins",
      weight: 6.5,
      date: "Nov 20, 2026",
    },
    {
      id: "b-2",
      trackingCode: "APN-55410-BD",
      recipientName: "Kazi Nazmul Huda",
      itemDesc: "Winter Jackets & Perfume",
      weight: 14.0,
      date: "Nov 19, 2026",
    },
  ],
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    updateCalculator: (state, action: PayloadAction<Partial<ShippingState["calculator"]>>) => {
      state.calculator = { ...state.calculator, ...action.payload };
      state.activeQuote = calculateShippingQuote(state.calculator);
    },
    lookupTracking: (state, action: PayloadAction<string>) => {
      const code = action.payload.trim().toUpperCase();
      if (state.sampleShipments[code]) {
        state.activeShipment = state.sampleShipments[code]!;
      } else {
        // Generate a dynamic mock if format is valid
        state.activeShipment = {
          trackingNumber: code || "APN-CUSTOM-BD",
          senderName: "Verified Expat Sender",
          senderLocation: "USA Gateway Hub",
          recipientName: "Family Recipient",
          recipientLocation: "Bangladesh (Direct Home Delivery)",
          weightLbs: 7.2,
          category: "General Household & Gifts",
          speed: "Express Priority Air",
          estimatedDelivery: "4-6 Business Days",
          currentStatus: "In International Air Transit",
          progressPercent: 50,
          checkpoints: [
            {
              id: "1",
              status: "Shipment Registered & Picked Up",
              location: "USA Local Facility",
              timestamp: "Today - 10:00 AM",
              completed: true,
              current: false,
              description: "Parcel processed and assigned international flight slot.",
              iconName: "package",
            },
            {
              id: "2",
              status: "Transferred to Direct Flight",
              location: "International Cargo Hub",
              timestamp: "Today - 03:30 PM",
              completed: true,
              current: true,
              description: "Flying overseas to Dhaka Hazrat Shahjalal Airport.",
              iconName: "plane",
            },
            {
              id: "3",
              status: "Arrival & Customs Processing",
              location: "Dhaka Airport, Bangladesh",
              timestamp: "Pending Arrival",
              completed: false,
              current: false,
              description: "Our dedicated customs broker will handle NBR tax assessment.",
              iconName: "warehouse",
            },
            {
              id: "4",
              status: "Doorstep Delivery by Rider",
              location: "Recipient Address, BD",
              timestamp: "Pending",
              completed: false,
              current: false,
              description: "Final mile secure handover.",
              iconName: "home",
            },
          ],
        };
      }
    },
    addBooking: (
      state,
      action: PayloadAction<{
        recipientName: string;
        itemDesc: string;
        weight: number;
        trackingCode: string;
      }>
    ) => {
      state.recentBookings.unshift({
        id: `b-${Date.now()}`,
        trackingCode: action.payload.trackingCode,
        recipientName: action.payload.recipientName,
        itemDesc: action.payload.itemDesc,
        weight: action.payload.weight,
        date: "Just now",
      });
    },
  },
});

export const { updateCalculator, lookupTracking, addBooking } = shippingSlice.actions;
export default shippingSlice.reducer;
