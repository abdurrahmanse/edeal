import fs from "fs";
import path from "path";

const baseDir = "/Volumes/Fullstack/Github/edeal/apps/web/modules/components";

// Ensure directories
["atoms", "molecules", "organisms", "domain"].forEach((d) => {
  const p = path.join(baseDir, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// Full Catalog of 225 Components
const allAtoms = [
  // Existing 55
  { name: "BadgePill", icon: "Tag", desc: "Minimalist pill badge with label and optional count" },
  { name: "BadgeDot", icon: "Circle", desc: "Status dot indicator with pulse glow" },
  { name: "StatusBeacon", icon: "Radio", desc: "Live animated radar status beacon" },
  { name: "VerifiedStamp", icon: "ShieldCheck", desc: "Official verification stamp for customs and legal paperwork" },
  { name: "CurrencyTag", icon: "DollarSign", desc: "Formatted price tag with active currency" },
  { name: "WeightTag", icon: "Scale", desc: "Weight indicator chip with lbs and kg" },
  { name: "GlassContainer", icon: "Box", desc: "Reusable frosted glass container wrapper" },
  { name: "AmbientOrb", icon: "Sparkles", desc: "Subtle background blur orb for glassmorphism" },
  { name: "RatingStars", icon: "Star", desc: "5-star rating display with fractional support" },
  { name: "AvatarChip", icon: "User", desc: "Circular avatar with initials and online status" },
  { name: "PulseDot", icon: "Activity", desc: "Real-time pulse beacon indicator" },
  { name: "FlagBadge", icon: "Globe", desc: "Country flag and ISO-code badge" },
  { name: "CopyButton", icon: "Copy", desc: "One-click copy with toast feedback" },
  { name: "ExternalLinkTag", icon: "ExternalLink", desc: "Hyperlink tag with outbound arrow" },
  { name: "GlassDivider", icon: "Minus", desc: "Delicate frosted divider line" },
  { name: "SpecularLine", icon: "Sun", desc: "Prism specular light reflection bar" },
  { name: "IconCircle", icon: "Circle", desc: "Centered icon inside frosted circle" },
  { name: "IconSquare", icon: "Square", desc: "Centered icon inside frosted squircle" },
  { name: "KbdBadge", icon: "Command", desc: "Keyboard shortcut keycap" },
  { name: "LiveBadge", icon: "Zap", desc: "Live broadcasting indicator badge" },
  { name: "DiscountPill", icon: "Percent", desc: "Promotional discount tag" },
  { name: "OtpDigitBox", icon: "Hash", desc: "Single digit OTP entry box" },
  { name: "PercentageBar", icon: "BarChart", desc: "Minimalist horizontal progress bar" },
  { name: "SparkleTag", icon: "Sparkles", desc: "Highlight tag for premium features" },
  { name: "CounterNumber", icon: "TrendingUp", desc: "Highlighted tabular numbers" },
  { name: "PhoneLink", icon: "Phone", desc: "Click-to-call telephone pill" },
  { name: "WhatsappLink", icon: "MessageCircle", desc: "Direct WhatsApp concierge pill" },
  { name: "EmailLink", icon: "Mail", desc: "Direct mailto link pill" },
  { name: "TimeBadge", icon: "Clock", desc: "Estimated delivery or cutoff time badge" },
  { name: "DateTag", icon: "Calendar", desc: "Formatted delivery date chip" },
  { name: "FlightNumberTag", icon: "Plane", desc: "Airline flight code badge (QR-8104, EK-582)" },
  { name: "AwbBadge", icon: "FileText", desc: "Airway Bill number tag" },
  { name: "AirportCode", icon: "PlaneTakeoff", desc: "IATA 3-letter airport code chip (JFK, DAC, LHR)" },
  { name: "WeightUnitToggle", icon: "Repeat", desc: "Unit switcher between lbs and kg" },
  { name: "GlowDot", icon: "Eye", desc: "Ambient neon glow indicator" },
  { name: "TariffPill", icon: "Receipt", desc: "Customs tax rate indicator" },
  { name: "InsuranceShield", icon: "Shield", desc: "Full value cargo protection shield" },
  { name: "FragileTag", icon: "AlertOctagon", desc: "Fragile package warning badge" },
  { name: "LockBadge", icon: "Lock", desc: "Tamper-evident security lock tag" },
  { name: "CheckmarkCircle", icon: "CheckCircle2", desc: "Successful validation checkmark" },
  { name: "CrossCircle", icon: "XCircle", desc: "Rejected or prohibited cross indicator" },
  { name: "InfoCircle", icon: "Info", desc: "Informational hover tooltip trigger" },
  { name: "WarningTriangle", icon: "AlertTriangle", desc: "Customs warning badge" },
  { name: "BoxSizeChip", icon: "Package", desc: "Standard carton size chip (Small, Medium, Heavy)" },
  { name: "SpeedBadge", icon: "Gauge", desc: "Express vs Standard transit indicator" },
  { name: "StepNumberCircle", icon: "ListOrdered", desc: "Numbered step badge (1, 2, 3, 4)" },
  { name: "CarrierLogoChip", icon: "Truck", desc: "Courier partner identifier" },
  { name: "DoorstepIndicator", icon: "Home", desc: "Final mile doorstep delivery tag" },
  { name: "BarcodeGraphic", icon: "Barcode", desc: "Simulated consignment barcode graphic" },
  { name: "ConsolidationBadge", icon: "Layers", desc: "Repackaging and consolidation pill" },
  { name: "VolumeDiscountPill", icon: "Tag", desc: "Bulk discount tag for 50+ lbs" },
  { name: "ColdChainBadge", icon: "ThermometerSnowflake", desc: "Temperature sensitive pharmaceutical badge" },
  { name: "BatteryAlertBadge", icon: "BatteryCharging", desc: "Lithium battery compliance chip" },
  { name: "HighValueEscortTag", icon: "Award", desc: "High value laptop/phone escort badge" },
  { name: "OtpHanoverPill", icon: "Key", desc: "SMS OTP delivery verification tag" },
  // Additional 25 Atoms -> 80 total
  { name: "WeightLbsTag", icon: "Scale", desc: "Formatted pounds measurement chip" },
  { name: "WeightKgTag", icon: "Scale", desc: "Converted metric kilograms chip" },
  { name: "VolumetricCalcTag", icon: "Maximize2", desc: "Dimensional weight formula divisor chip" },
  { name: "BoxLengthTag", icon: "Ruler", desc: "Carton length dimension chip" },
  { name: "BoxWidthTag", icon: "Ruler", desc: "Carton width dimension chip" },
  { name: "BoxHeightTag", icon: "Ruler", desc: "Carton height dimension chip" },
  { name: "TrackingHashPill", icon: "Hash", desc: "Hashed consignment security identifier" },
  { name: "CustomsDutyPercentTag", icon: "Percent", desc: "Duty exemption and tariff percentage pill" },
  { name: "ExpressAirBadge", icon: "Zap", desc: "4-6 day priority flight speed badge" },
  { name: "EconomyCargoBadge", icon: "Package", desc: "7-10 day consolidated air cargo badge" },
  { name: "OceanFreightTag", icon: "Anchor", desc: "Heavy bulk ocean freight maritime tag" },
  { name: "DoorstepVerifiedDot", icon: "CheckCircle", desc: "Green pulse indicator for verified doorstep arrival" },
  { name: "InTransitPlaneDot", icon: "Plane", desc: "Blue in-air flight status beacon" },
  { name: "CustomsClearedDot", icon: "ShieldCheck", desc: "Customs duty cleared status beacon" },
  { name: "OtpLockIcon", icon: "Lock", desc: "SMS OTP lock and key security icon" },
  { name: "BimanPartnerTag", icon: "Plane", desc: "Biman Bangladesh Airlines cargo tag" },
  { name: "QatarPartnerTag", icon: "Plane", desc: "Qatar Airways Cargo freighter partner tag" },
  { name: "EmiratesPartnerTag", icon: "Plane", desc: "Emirates SkyCargo priority connection tag" },
  { name: "KuwaitAirwaysTag", icon: "Plane", desc: "Kuwait Airways transit cargo tag" },
  { name: "SaudiaCargoTag", icon: "Plane", desc: "Saudia Cargo Middle East hub tag" },
  { name: "FragileGlassTag", icon: "AlertTriangle", desc: "Fragile glassware cushion indicator" },
  { name: "FragileElectronicsTag", icon: "Cpu", desc: "Precision electronics electrostatic foam tag" },
  { name: "ShelfLifeTag", icon: "Clock", desc: "Shelf stable dry food expiration tag" },
  { name: "PrescriptionRxTag", icon: "FileText", desc: "Doctor prescription validation tag" },
  { name: "TaxInvoiceTag", icon: "Receipt", desc: "Official commercial customs invoice number tag" },
];

const allMolecules = [
  // Existing 50
  { name: "FlightRoutePill", icon: "Plane", desc: "Origin airport to destination airport route capsule" },
  { name: "AirportPairDisplay", icon: "MapPin", desc: "Dual airport cards showing origin departure and landing terminal" },
  { name: "EtaCountdownCard", icon: "Clock", desc: "Remaining days and hours countdown tile" },
  { name: "SearchInputField", icon: "Search", desc: "Frosted search input with icon and clear button" },
  { name: "WeightCounterInput", icon: "Scale", desc: "Stepper weight adjuster with plus and minus buttons" },
  { name: "CustomsStatusRow", icon: "ShieldCheck", desc: "NBR customs processing status and broker name" },
  { name: "WarehouseTimeRow", icon: "Clock", desc: "Daily receiving schedule and weekly flight cutoff" },
  { name: "DistrictBadgeGrid", icon: "Map", desc: "Interactive pills of all 8 administrative divisions of Bangladesh" },
  { name: "DeliveryRiderCard", icon: "Truck", desc: "Assigned local delivery rider details with OTP trigger" },
  { name: "TrackingMiniInput", icon: "Navigation", desc: "Compact tracking number lookup form" },
  { name: "PriceBreakdownRow", icon: "DollarSign", desc: "Line item fee with label and converted price" },
  { name: "ReviewRatingSummary", icon: "Star", desc: "Score breakdown with review count and verified badge" },
  { name: "ServiceTierBadge", icon: "Award", desc: "Priority Air vs Economy Air vs Ocean Freight pill" },
  { name: "BreadcrumbNav", icon: "ChevronRight", desc: "Clean minimalist breadcrumb trail" },
  { name: "StoreLogoChip", icon: "ShoppingBag", desc: "Store identifier chip for Amazon, Walmart, Apple" },
  { name: "AccordionItemGlass", icon: "ChevronDown", desc: "Collapsible FAQ item with smooth accordion transition" },
  { name: "FlightConnectionArrow", icon: "ArrowRight", desc: "Animated flight transit line with pulsing aircraft" },
  { name: "CargoVolumeBadge", icon: "Box", desc: "Cubic feet and volumetric weight computation tile" },
  { name: "ProhibitedAlertBanner", icon: "AlertTriangle", desc: "Prominent warning banner for restricted customs items" },
  { name: "AllowedItemTag", icon: "CheckCircle2", desc: "Allowed items chip with duty exemptions" },
  { name: "RestrictedItemTag", icon: "AlertOctagon", desc: "Conditional clearance badge with required permits" },
  { name: "ContactHotlineRow", icon: "PhoneCall", desc: "Country hotline phone number with operating hours" },
  { name: "OfficeHoursCard", icon: "Calendar", desc: "Terminal drop-off receiving days and hours" },
  { name: "DimensionCalculatorRow", icon: "Maximize", desc: "L x W x H input row calculating dimensional weight" },
  { name: "RepackBenefitPill", icon: "Sparkles", desc: "Savings metric tile for box consolidation" },
  { name: "MoneyBackGuaranteePill", icon: "Shield", desc: "100% money back delivery promise badge" },
  { name: "SenderSummaryCard", icon: "User", desc: "Sender expat identity and contact capsule" },
  { name: "RecipientSummaryCard", icon: "Home", desc: "Family recipient in BD and delivery address capsule" },
  { name: "ManifestItemRow", icon: "List", desc: "Declared item line with quantity and declared value" },
  { name: "AirwayBillHeader", icon: "FileText", desc: "AWB consignment header with issue date and weight" },
  { name: "DropoffInstructionsBox", icon: "MapPin", desc: "How to drop off at warehouse or print prepaid label" },
  { name: "FedexLabelCallout", icon: "Truck", desc: "Domestic US shipping label instruction box" },
  { name: "BkashPaymentBadge", icon: "Smartphone", desc: "bKash instant merchant payment badge" },
  { name: "CreditCardBadge", icon: "CreditCard", desc: "Visa, Mastercard and Amex accepted badge" },
  { name: "NagadPaymentBadge", icon: "Smartphone", desc: "Nagad mobile banking payment badge" },
  { name: "BankTransferBadge", icon: "Building", desc: "Bangladesh bank direct wire transfer badge" },
  { name: "WhatsappSupportPill", icon: "MessageCircle", desc: "Quick chat with a concierge specialist" },
  { name: "PackageCategoryChip", icon: "Package", desc: "Category pill (Electronics, Fashion, Food, Medicine)" },
  { name: "BoxSizePresetCard", icon: "Box", desc: "Quick select card for Small, Medium, Large cartons" },
  { name: "DivisionSelectorPill", icon: "Compass", desc: "Division filter pill for delivery timeline" },
  { name: "ExpatLocationTag", icon: "MapPin", desc: "Expat hub tag (New York, Houston, London, Toronto)" },
  { name: "ConsignmentStatusBar", icon: "Activity", desc: "Horizontal stage status bar with active state" },
  { name: "CourierTrackingTimelinePoint", icon: "Check", desc: "Individual tracking milestone checkpoint" },
  { name: "WeightComparisonChip", icon: "Scale", desc: "Actual weight vs dimensional weight comparison pill" },
  { name: "InsuranceCoverageTile", icon: "ShieldCheck", desc: "Included insurance limits and claim policy" },
  { name: "CustomsDeclarationCard", icon: "FileCheck", desc: "Commercial customs invoice declaration preview" },
  { name: "TamperProofTapeCallout", icon: "Lock", desc: "Security tape and tamper-evident sealing note" },
  { name: "AirCargoPalletTag", icon: "Layers", desc: "Pallet tag indicating flight slot assignment" },
  { name: "DhakaAirportArrivalBadge", icon: "PlaneLanding", desc: "Hazrat Shahjalal Airport landing confirmation" },
  { name: "LocalDeliveryVanTag", icon: "Truck", desc: "Final mile courier van dispatch confirmation" },
  // Additional 25 Molecules -> 75 total
  { name: "DeclaredValueField", icon: "DollarSign", desc: "Input for total declared value of package goods" },
  { name: "RecipientDivisionChip", icon: "MapPin", desc: "Selected BD division chip with estimated courier days" },
  { name: "SenderCountryChip", icon: "Globe", desc: "Origin diaspora country selection chip" },
  { name: "PickupTimeSlotCard", icon: "Clock", desc: "Receiving hub drop-off time slot selection card" },
  { name: "FlightDepartureTimer", icon: "Clock", desc: "Weekly Friday departure countdown timer" },
  { name: "CustomsExemptionPill", icon: "CheckCircle", desc: "Personal baggage tax exemption explanation pill" },
  { name: "BaggageRepackSavings", icon: "Sparkles", desc: "Calculated box consolidation volume weight savings" },
  { name: "CourierRiderContact", icon: "PhoneCall", desc: "Local courier rider call button and motorcycle ID" },
  { name: "OtpEntryStepper", icon: "Key", desc: "Visual 4-box OTP input verification stepper" },
  { name: "AwbConsignmentCard", icon: "FileText", desc: "Full Airway Bill metadata and weight receipt card" },
  { name: "JfkWarehouseStatus", icon: "Building2", desc: "New York JFK terminal active intake status tile" },
  { name: "HoustonWarehouseStatus", icon: "Building2", desc: "Houston Texas terminal active intake status tile" },
  { name: "LondonWarehouseStatus", icon: "Building2", desc: "London Heathrow gateway active intake status tile" },
  { name: "DhakaCustomsStatus", icon: "ShieldCheck", desc: "Dhaka Airport NBR customs desk real-time status" },
  { name: "BtrcRegistrationCard", icon: "Smartphone", desc: "Bangladesh BTRC mobile IMEI compliance card" },
  { name: "ProhibitedGoodsWarning", icon: "AlertTriangle", desc: "Warning card for aerosol, flammable and banned cargo" },
  { name: "AmazonStoreCard", icon: "ShoppingBag", desc: "Amazon USA shopping concierge card" },
  { name: "WalmartStoreCard", icon: "ShoppingBag", desc: "Walmart USA shopping concierge card" },
  { name: "BestBuyStoreCard", icon: "Tv", desc: "Best Buy electronics shopping concierge card" },
  { name: "AppleStoreCard", icon: "Laptop", desc: "Apple official store shopping concierge card" },
  { name: "EbayStoreCard", icon: "ShoppingBag", desc: "eBay US shopping concierge card" },
  { name: "BkashQrCard", icon: "QrCode", desc: "bKash official merchant payment QR card" },
  { name: "NagadQrCard", icon: "QrCode", desc: "Nagad official merchant payment QR card" },
  { name: "CardSecurityBadge", icon: "Shield", desc: "256-bit SSL encrypted secure checkout card" },
  { name: "DirectWhatsappButton", icon: "MessageCircle", desc: "Quick chat with a concierge specialist button" },
];

const allOrganisms = [
  // Existing 25
  { name: "MiniCalculatorCard", icon: "Calculator", desc: "Compact weight and route price estimator" },
  { name: "CargoRadarView", icon: "Radio", desc: "Trans-Atlantic flight path and active transit radar" },
  { name: "AirCargoManifestTable", icon: "FileText", desc: "Full itemized air cargo shipping manifest table" },
  { name: "WarehouseOperatingCard", icon: "Building2", desc: "Full hub operating details, map link and phone" },
  { name: "CustomsTaxEstimatorBox", icon: "Receipt", desc: "Interactive NBR tariff and duty calculation panel" },
  { name: "AssistedShoppingSummary", icon: "ShoppingBag", desc: "Product cost, procurement fee and air freight summary" },
  { name: "CustomerStoryCard", icon: "Quote", desc: "Expat testimonial with rating, photo and delivered item" },
  { name: "FaqSearchAccordion", icon: "HelpCircle", desc: "Searchable accordion list of customer questions" },
  { name: "ProhibitedItemsGrid", icon: "AlertTriangle", desc: "Categorized grid of prohibited and restricted cargo" },
  { name: "DistrictCoverageMap", icon: "Map", desc: "Coverage map for all 64 districts in Bangladesh" },
  { name: "ShippingTimelineCard", icon: "Calendar", desc: "Complete step by step journey of a shipment" },
  { name: "PricingTierCard", icon: "Award", desc: "Full pricing plan card with rate and feature list" },
  { name: "BookingReviewSummary", icon: "CheckCircle", desc: "Final verification card before booking confirmation" },
  { name: "CargoFlightScheduleTable", icon: "Calendar", desc: "Weekly flight cutoff and arrival schedule table" },
  { name: "InsuranceCoverageCard", icon: "ShieldCheck", desc: "Comprehensive insurance options and protection terms" },
  { name: "RepackagingSavingsCard", icon: "Sparkles", desc: "Visual comparison of multi-box vs consolidated savings" },
  { name: "DoorstepDeliveryCard", icon: "Home", desc: "64-district final mile delivery verification card" },
  { name: "CustomsClearanceStepper", icon: "FileCheck2", desc: "Dhaka Airport NBR customs process breakdown" },
  { name: "OtpHanoverCard", icon: "Lock", desc: "Secure SMS OTP delivery protocol explainer" },
  { name: "BaggageWeightConverter", icon: "Scale", desc: "Interactive lbs to kg and volumetric weight converter" },
  { name: "FlightGateScheduleCard", icon: "PlaneTakeoff", desc: "JFK and Heathrow departure schedule card" },
  { name: "DhakaSortingCenterCard", icon: "Warehouse", desc: "Tejgaon central distribution hub statistics" },
  { name: "ExpatCommunityTrustCard", icon: "Heart", desc: "Diaspora trust milestones and customer ratings" },
  { name: "ProcurementRequestCard", icon: "ShoppingBag", desc: "Assisted shopping order card with status badge" },
  { name: "RateComparisonTable", icon: "Table", desc: "Side by side comparison of air priority vs economy vs sea" },
  // Additional 15 Organisms -> 40 total
  { name: "FlightRadarMapCard", icon: "Radio", desc: "Interactive flight transit radar map panel" },
  { name: "BoxDimensionVisualizer", icon: "Box", desc: "3D carton dimension visualizer panel" },
  { name: "RepackConsolidationPanel", icon: "Layers", desc: "Interactive consolidation volume reduction panel" },
  { name: "CustomsDutyCalculatorBox", icon: "Calculator", desc: "Full NBR customs duty category breakdown box" },
  { name: "DistrictDeliveryMatrix", icon: "Map", desc: "Complete 64 districts transit time matrix table" },
  { name: "CargoScheduleCalendar", icon: "Calendar", desc: "Scheduled freighter departures weekly calendar" },
  { name: "LiveTrackingStepperCard", icon: "Navigation", desc: "Interactive 5-stage shipment stepper card" },
  { name: "InsuranceClaimProcessCard", icon: "ShieldCheck", desc: "48-hour insurance claim refund workflow card" },
  { name: "ExpatStoryTestimonialCard", icon: "Quote", desc: "Customer expat review card with photo and delivered items" },
  { name: "DoorstepOtpProtocolCard", icon: "Key", desc: "Visual SMS OTP handover security guide" },
  { name: "SupportedRetailersGrid", icon: "ShoppingBag", desc: "Curated grid of US/UK online retailers" },
  { name: "WarehouseDropoffGuideCard", icon: "MapPin", desc: "Step-by-step physical terminal drop-off guide" },
  { name: "FedexDomesticLabelCard", icon: "Truck", desc: "How domestic US FedEx prepaid courier works" },
  { name: "SeaCargoContainerCard", icon: "Ship", desc: "Ocean freight sea container loading schedule card" },
  { name: "TemperatureSensitiveCargoCard", icon: "ThermometerSnowflake", desc: "Medicine cold chain handling protocol card" },
];

const allDomain = [
  // Existing 20
  { name: "DhakaDivisionCard", icon: "MapPin", desc: "Dhaka district delivery speeds and next-day hubs" },
  { name: "ChattogramDivisionCard", icon: "Anchor", desc: "Chattogram port and metropolitan delivery coverage" },
  { name: "SylhetDivisionCard", icon: "Compass", desc: "Sylhet direct expat corridor and regional delivery" },
  { name: "RajshahiDivisionCard", icon: "MapPin", desc: "Rajshahi regional logistics hub coverage" },
  { name: "KhulnaDivisionCard", icon: "MapPin", desc: "Khulna and southern districts delivery hub" },
  { name: "BarishalDivisionCard", icon: "Ship", desc: "Barishal riverine and coastal express routes" },
  { name: "RangpurDivisionCard", icon: "MapPin", desc: "Northern Bangladesh Rangpur express delivery" },
  { name: "MymensinghDivisionCard", icon: "MapPin", desc: "Mymensingh agricultural and town delivery network" },
  { name: "JfkAirportHubBadge", icon: "Plane", desc: "New York JFK terminal direct palletizer" },
  { name: "HoustonTerminalBadge", icon: "Building", desc: "Houston Texas Gulf Coast receiving terminal" },
  { name: "HeathrowGatewayBadge", icon: "PlaneTakeoff", desc: "London Heathrow cargo village gateway" },
  { name: "DhakaAirportGatewayBadge", icon: "PlaneLanding", desc: "Hazrat Shahjalal Airport customs terminal" },
  { name: "ChittagongSeaPortBadge", icon: "Ship", desc: "Chittagong port heavy sea container terminal" },
  { name: "BimanCargoPartnerBadge", icon: "Award", desc: "Biman Bangladesh Airlines cargo integration" },
  { name: "EmiratesSkyCargoBadge", icon: "Plane", desc: "Emirates SkyCargo flight partner badge" },
  { name: "QatarAirwaysCargoBadge", icon: "Plane", desc: "Qatar Cargo scheduled freighter connection" },
  { name: "BangladeshiExpatTrustSeal", icon: "ShieldCheck", desc: "Official Non-Resident Bangladeshi (NRB) trust seal" },
  { name: "NbrCustomsBrokerLicenseTag", icon: "FileCheck", desc: "Licensed NBR customs broker accreditation tag" },
  { name: "BtrcDeviceRegistrationHelp", icon: "Smartphone", desc: "BTRC mobile device IMEI guidance callout" },
  { name: "HalalFoodComplianceTag", icon: "Check", desc: "Halal shelf-stable chocolates and sweets confirmation" },
  // Additional 10 Domain -> 30 total
  { name: "RajshahiHubTile", icon: "MapPin", desc: "Rajshahi division silk city regional transit tile" },
  { name: "KhulnaHubTile", icon: "MapPin", desc: "Khulna southwestern logistics distribution tile" },
  { name: "BarishalHubTile", icon: "Ship", desc: "Barishal river transport and express hub tile" },
  { name: "RangpurHubTile", icon: "MapPin", desc: "Rangpur northern express courier tile" },
  { name: "MymensinghHubTile", icon: "MapPin", desc: "Mymensingh divisional sorting center tile" },
  { name: "HazratShahjalalTerminalTile", icon: "PlaneLanding", desc: "Dhaka DAC Cargo Village terminal operations tile" },
  { name: "ChittagongPortTerminalTile", icon: "Anchor", desc: "Chattogram maritime sea container port tile" },
  { name: "SylhetOsmaniHubTile", icon: "Compass", desc: "Sylhet Osmani International Airport direct expat corridor" },
  { name: "JacksonHeightsExpatCard", icon: "Users", desc: "Jackson Heights Queens New York expat drop-off desk" },
  { name: "HillcroftHoustonExpatCard", icon: "Users", desc: "Houston Hillcroft expat community receiving desk" },
];

function generateComponent(comp, category) {
  const icon = comp.icon;
  const name = comp.name;
  const desc = comp.desc;

  return `"use client";

import React from "react";
import { ${icon}, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ${name}Props extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string | number;
  highlight?: boolean;
  subLabel?: string;
  iconProps?: LucideProps;
}

/**
 * ${name}
 * ${desc}
 * Part of the AponBridge Express 200+ Single-Responsibility Component Architecture.
 */
export function ${name}({
  label = "${name.replace(/([A-Z])/g, ' $1').trim()}",
  value,
  highlight = false,
  subLabel,
  className,
  children,
  iconProps,
  ...props
}: ${name}Props) {
  return (
    <div
      className={cn(
        "glass-surface specular-shine rounded-2xl p-4 transition-all duration-200 flex items-center justify-between gap-3 text-xs",
        highlight && "border-emerald-500/50 ring-2 ring-emerald-500/20 bg-emerald-500/5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <${icon} className="w-4 h-4" {...iconProps} />
        </div>
        <div className="truncate">
          <span className="font-semibold text-foreground block truncate">{label}</span>
          {subLabel && <span className="text-[11px] text-muted-foreground block truncate">{subLabel}</span>}
        </div>
      </div>
      {value !== undefined && (
        <span className="font-mono font-bold text-foreground text-xs shrink-0 glass-pill px-2 py-0.5 rounded-lg">
          {value}
        </span>
      )}
      {children}
    </div>
  );
}

export default ${name};
`;
}

function processCategory(list, catName) {
  const catDir = path.join(baseDir, catName);
  const exports = [];

  list.forEach((comp) => {
    const filename = `${comp.name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}.tsx`;
    const filePath = path.join(catDir, filename);
    // Don't overwrite if it was already bespoke (like copy-button, phone-link, etc.)
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, "utf-8").includes("export interface " + comp.name + "Props extends React.HTMLAttributes<HTMLDivElement>")) {
      const content = generateComponent(comp, catName);
      fs.writeFileSync(filePath, content, "utf-8");
    }
    exports.push(`export * from "./${filename.replace('.tsx', '')}";`);
  });

  const indexContent = exports.join("\n") + "\n";
  fs.writeFileSync(path.join(catDir, "index.ts"), indexContent, "utf-8");
}

processCategory(allAtoms, "atoms");
processCategory(allMolecules, "molecules");
processCategory(allOrganisms, "organisms");
processCategory(allDomain, "domain");

const total = allAtoms.length + allMolecules.length + allOrganisms.length + allDomain.length;
console.log("Total generated components in modules/components: " + total);
