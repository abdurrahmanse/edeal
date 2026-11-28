import {
  IShipmentRepository,
  CalculateQuoteRequest,
  BookingSubmissionRequest,
  BookingResponse,
  AssistedShoppingRequest,
  AssistedShoppingResponse,
} from "./types";
import { ShippingQuote, ShipmentRecord, ShippingCategory, ShippingSpeed } from "../types";

/**
 * Mock Shipment Repository
 * Simulates real network latency and returns realistic, production-like responses.
 * When switching to Django backend, you only need to change 1 environment variable!
 */
export class MockShipmentRepository implements IShipmentRepository {
  private delay(ms: number = 300) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async calculateQuote(req: CalculateQuoteRequest): Promise<ShippingQuote> {
    await this.delay(200);

    const baseRatePerLb = req.speed === "express_air" ? 11.5 : req.speed === "standard_air" ? 8.5 : 4.5;
    const originMarkup = req.origin === "USA" ? 0 : req.origin === "UK" ? -0.5 : 0.8;
    const effectiveRate = Math.max(3.5, baseRatePerLb + originMarkup);

    const baseCharge = 12.0;
    const weightCharge = Math.round(req.weightLbs * effectiveRate * 10) / 10;

    const catFactors: Record<ShippingCategory, number> = {
      clothes: 4,
      electronics: 18,
      medicines: 6,
      dry_food: 3,
      documents: 0,
      cosmetics: 8,
      general: 5,
    };

    const customsEst = catFactors[req.category] || 5;
    const insuranceFee = req.includeInsurance ? Math.max(5, Math.round(weightCharge * 0.05)) : 0;
    const fragileFee = req.fragileHandling ? 7 : 0;
    const deliveryFee = req.doorstepDelivery ? (req.destination === "Dhaka" ? 3 : 6) : 0;

    const total = Math.round(baseCharge + weightCharge + customsEst + insuranceFee + fragileFee + deliveryFee);

    const daysMap: Record<ShippingSpeed, string> = {
      express_air: "4 - 6 Business Days",
      standard_air: "7 - 10 Business Days",
      sea_cargo: "25 - 35 Days (Affordable Bulk)",
    };

    return {
      origin: req.origin,
      destinationDivision: req.destination,
      category: req.category,
      weightLbs: req.weightLbs,
      speed: req.speed,
      includeInsurance: req.includeInsurance,
      fragileHandling: req.fragileHandling,
      doorstepDelivery: req.doorstepDelivery,
      baseCharge,
      weightCharge,
      customsEst,
      insuranceFee: insuranceFee + fragileFee + deliveryFee,
      totalCostUSD: total,
      estimatedDays: daysMap[req.speed],
    };
  }

  async submitBooking(req: BookingSubmissionRequest): Promise<BookingResponse> {
    await this.delay(800);
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const tracking = `APN-${randomSuffix}-BD`;
    const consignment = `CSG-${Date.now().toString().slice(-6)}`;

    return {
      success: true,
      trackingNumber: tracking,
      consignmentId: consignment,
      totalAmountUSD: Math.round(req.packageDetails.weightLbs * 9.5 + 18),
      createdAt: new Date().toISOString(),
      estimatedDeliveryDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      pickupDropoffInstructions:
        "Drop off at our nearest New York / Houston warehouse hub or request our free FedEx doorstep pickup label.",
    };
  }

  async trackShipment(trackingNumber: string): Promise<ShipmentRecord | null> {
    await this.delay(400);
    const code = trackingNumber.trim().toUpperCase();

    if (code === "APN-88204-BD") {
      return {
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
      };
    }

    // Default realistic mock for any query
    return {
      trackingNumber: code || "APN-91283-BD",
      senderName: "Verified Expat Sender",
      senderLocation: "USA Gateway Hub (New York)",
      recipientName: "Family Recipient",
      recipientLocation: "Bangladesh (Direct Home Delivery)",
      weightLbs: 8.5,
      category: "Family Essentials & Gifts",
      speed: "Express Priority Air",
      estimatedDelivery: "In 4-5 Days",
      currentStatus: "International Air Cargo Transit",
      progressPercent: 55,
      checkpoints: [
        {
          id: "1",
          status: "Box Inspected & Packed at USA Hub",
          location: "New York Hub, USA",
          timestamp: "Yesterday - 11:00 AM",
          completed: true,
          current: false,
          description: "High-grade cushioning and security tag applied.",
          iconName: "package",
        },
        {
          id: "2",
          status: "Departed on Direct Cargo Flight",
          location: "JFK Airport Gate C12",
          timestamp: "Today - 06:45 AM",
          completed: true,
          current: true,
          description: "In-flight transiting across Atlantic corridor to Dhaka.",
          iconName: "plane",
        },
        {
          id: "3",
          status: "Dhaka Landing & Customs Clearance",
          location: "Hazrat Shahjalal Int'l Airport (DAC)",
          timestamp: "Expected in 48 hours",
          completed: false,
          current: false,
          description: "Priority expedited clearance under commercial invoice.",
          iconName: "warehouse",
        },
        {
          id: "4",
          status: "Local Doorstep Handover with OTP",
          location: "Recipient Doorstep, Bangladesh",
          timestamp: "Estimated Delivery Day",
          completed: false,
          current: false,
          description: "Delivered safely into family hands.",
          iconName: "home",
        },
      ],
    };
  }

  async listRecentShipments(): Promise<ShipmentRecord[]> {
    await this.delay(200);
    const sample = await this.trackShipment("APN-88204-BD");
    return sample ? [sample] : [];
  }

  async requestAssistedShopping(req: AssistedShoppingRequest): Promise<AssistedShoppingResponse> {
    await this.delay(600);
    return {
      referenceId: `BUY-${Date.now().toString().slice(-6)}`,
      message: `Your request to purchase "${req.productName}" from ${req.storeName} has been received. Our US procurement team will verify product availability and send you an all-inclusive checkout quote within 2 hours.`,
      status: "quotation_pending",
      reviewByHours: 2,
    };
  }
}
