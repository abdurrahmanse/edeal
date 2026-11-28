import { IShipmentRepository } from "./types";
import { MockShipmentRepository } from "./mockRepository";
import { DjangoRestShipmentRepository } from "./djangoRestRepository";

/**
 * Dependency Injection Repository Factory
 *
 * To connect to your Django REST backend:
 * 1. Set NEXT_PUBLIC_USE_MOCK_API="false" in your .env.local
 * 2. Set NEXT_PUBLIC_API_URL="http://localhost:8000/api/v1"
 * That's it! Not a single UI component needs to change.
 */
function createShipmentRepository(): IShipmentRepository {
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK_API !== "false";

  if (!useMock) {
    return new DjangoRestShipmentRepository();
  }

  return new MockShipmentRepository();
}

export const shipmentRepository: IShipmentRepository = createShipmentRepository();
export * from "./types";
