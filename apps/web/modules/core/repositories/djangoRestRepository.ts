import { apiClient } from "../api/client";
import {
  IShipmentRepository,
  CalculateQuoteRequest,
  BookingSubmissionRequest,
  BookingResponse,
  AssistedShoppingRequest,
  AssistedShoppingResponse,
} from "./types";
import { ShippingQuote, ShipmentRecord } from "../types";

/**
 * Django REST Framework Implementation of IShipmentRepository
 *
 * Connects directly to Django endpoints:
 * - POST /api/v1/shipments/quote/
 * - POST /api/v1/shipments/booking/
 * - GET  /api/v1/shipments/track/<tracking_number>/
 * - GET  /api/v1/shipments/recent/
 * - POST /api/v1/assisted-shopping/
 *
 * To activate this, simply set:
 * NEXT_PUBLIC_USE_MOCK_API=false
 * NEXT_PUBLIC_API_URL=http://your-django-backend:8000/api/v1
 */
export class DjangoRestShipmentRepository implements IShipmentRepository {
  async calculateQuote(request: CalculateQuoteRequest): Promise<ShippingQuote> {
    const payload = {
      origin: request.origin,
      destination: request.destination,
      category: request.category,
      weight_lbs: request.weightLbs,
      speed: request.speed,
      include_insurance: request.includeInsurance,
      fragile_handling: request.fragileHandling,
      doorstep_delivery: request.doorstepDelivery,
    };

    const data: any = await apiClient.post("/shipments/quote/", payload);

    return {
      origin: data.origin,
      destinationDivision: data.destination_division || request.destination,
      category: data.category,
      weightLbs: data.weight_lbs,
      speed: data.speed,
      includeInsurance: data.include_insurance,
      fragileHandling: data.fragile_handling,
      doorstepDelivery: data.doorstep_delivery,
      baseCharge: data.base_charge,
      weightCharge: data.weight_charge,
      customsEst: data.customs_est,
      insuranceFee: data.insurance_fee,
      totalCostUSD: data.total_cost_usd,
      estimatedDays: data.estimated_days,
    };
  }

  async submitBooking(request: BookingSubmissionRequest): Promise<BookingResponse> {
    const payload = {
      sender: {
        full_name: request.sender.fullName,
        phone: request.sender.phone,
        email: request.sender.email,
        address: request.sender.address,
        city: request.sender.city,
        country: request.sender.country,
      },
      recipient: {
        full_name: request.recipient.fullName,
        phone: request.recipient.phone,
        alternative_phone: request.recipient.alternativePhone,
        district: request.recipient.district,
        division: request.recipient.division,
        address: request.recipient.address,
        postal_code: request.recipient.postalCode,
      },
      package_details: {
        category: request.packageDetails.category,
        weight_lbs: request.packageDetails.weightLbs,
        declared_value_usd: request.packageDetails.declaredValueUSD,
        description: request.packageDetails.description,
        speed: request.packageDetails.speed,
        include_insurance: request.packageDetails.includeInsurance,
        fragile_handling: request.packageDetails.fragileHandling,
      },
    };

    const data: any = await apiClient.post("/shipments/booking/", payload);

    return {
      success: data.success,
      trackingNumber: data.tracking_number,
      consignmentId: data.consignment_id,
      totalAmountUSD: data.total_amount_usd,
      createdAt: data.created_at,
      estimatedDeliveryDate: data.estimated_delivery_date,
      pickupDropoffInstructions: data.pickup_dropoff_instructions,
    };
  }

  async trackShipment(trackingNumber: string): Promise<ShipmentRecord | null> {
    try {
      const data: any = await apiClient.get(`/shipments/track/${encodeURIComponent(trackingNumber)}/`);
      return {
        trackingNumber: data.tracking_number,
        senderName: data.sender_name,
        senderLocation: data.sender_location,
        recipientName: data.recipient_name,
        recipientLocation: data.recipient_location,
        weightLbs: data.weight_lbs,
        category: data.category,
        speed: data.speed,
        estimatedDelivery: data.estimated_delivery,
        currentStatus: data.current_status,
        progressPercent: data.progress_percent,
        checkpoints: (data.checkpoints || []).map((cp: any) => ({
          id: String(cp.id),
          status: cp.status,
          location: cp.location,
          timestamp: cp.timestamp,
          completed: cp.completed,
          current: cp.current,
          description: cp.description,
          iconName: cp.icon_name || "package",
        })),
      };
    } catch {
      return null;
    }
  }

  async listRecentShipments(): Promise<ShipmentRecord[]> {
    const list: any[] = await apiClient.get("/shipments/recent/");
    return list.map((data) => ({
      trackingNumber: data.tracking_number,
      senderName: data.sender_name,
      senderLocation: data.sender_location,
      recipientName: data.recipient_name,
      recipientLocation: data.recipient_location,
      weightLbs: data.weight_lbs,
      category: data.category,
      speed: data.speed,
      estimatedDelivery: data.estimated_delivery,
      currentStatus: data.current_status,
      progressPercent: data.progress_percent,
      checkpoints: data.checkpoints || [],
    }));
  }

  async requestAssistedShopping(request: AssistedShoppingRequest): Promise<AssistedShoppingResponse> {
    const payload = {
      product_url: request.productUrl,
      product_name: request.productName,
      store_name: request.storeName,
      estimated_price_usd: request.estimatedPriceUSD,
      quantity: request.quantity,
      notes: request.notes,
      customer_contact: {
        name: request.customerContact.name,
        email: request.customerContact.email,
        whatsapp_number: request.customerContact.whatsappNumber,
        bd_delivery_city: request.customerContact.bdDeliveryCity,
      },
    };

    const data: any = await apiClient.post("/assisted-shopping/", payload);
    return {
      referenceId: data.reference_id,
      message: data.message,
      status: data.status,
      reviewByHours: data.review_by_hours,
    };
  }
}
