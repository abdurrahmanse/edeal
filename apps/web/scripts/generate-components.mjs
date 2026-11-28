import fs from "fs";
import path from "path";

const baseDir = "/Volumes/Fullstack/Github/edeal/apps/web/modules/components";

// Ensure directories exist
const dirs = ["atoms", "molecules", "organisms", "domain"];
dirs.forEach((d) => {
  const p = path.join(baseDir, d);
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p, { recursive: true });
  }
});

// Component definitions
const atoms = [
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
];

const molecules = [
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
];

const organisms = [
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
];

const domain = [
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
 * Part of the AponBridge Express Glassmorphic & Minimalist Component Architecture.
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
    const content = generateComponent(comp, catName);
    fs.writeFileSync(filePath, content, "utf-8");
    exports.push(`export * from "./${filename.replace('.tsx', '')}";`);
  });

  const indexContent = exports.join("\n") + "\n";
  fs.writeFileSync(path.join(catDir, "index.ts"), indexContent, "utf-8");
}

processCategory(atoms, "atoms");
processCategory(molecules, "molecules");
processCategory(organisms, "organisms");
processCategory(domain, "domain");

// Generate master index.ts in baseDir
const masterIndex = `export * from "./atoms";
export * from "./molecules";
export * from "./organisms";
export * from "./domain";
`;
fs.writeFileSync(path.join(baseDir, "index.ts"), masterIndex, "utf-8");

console.log("Successfully generated " + (atoms.length + molecules.length + organisms.length + domain.length) + " components across atoms, molecules, organisms, and domain!");
