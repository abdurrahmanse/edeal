"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/ui/accordion";
import { HelpCircle, ShieldCheck, Clock, Home, Package, CreditCard } from "lucide-react";
import { SectionHeader } from "@/modules/shared/section-header";

export function FaqSection() {
  const faqs = [
    {
      q: "ঢাকা বিমানবন্দর বা কাস্টমসে আমার পরিবারকে কি কোনো ট্যাক্স দিতে হবে?",
      a: "একদমই না! আপনব্রিজ এক্সপ্রেসের ফ্ল্যাট রেট কোটেশনের মধ্যেই সকল আইনি কাস্টমস ক্লিয়ারেন্স ও ভ্যাট অন্তর্ভুক্ত থাকে। আপনার পরিবারকে ঢাকা বিমানবন্দর অথবা কাস্টমস অফিসে যেতে হবে না; আমাদের নিজস্ব কাস্টমস ব্রোকার টিম সব ফরমালিটি শেষ করে সরাসরি আপনার পরিবারের দরজায় পার্সেল পৌঁছে দেবে।",
      icon: ShieldCheck,
    },
    {
      q: "আমেরিকা বা ইউকে থেকে বাংলাদেশে পৌঁছাতে কতদিন সময় লাগে?",
      a: "আমাদের 'Express Priority Air' সার্ভিসে সাধারণ ৪ থেকে ৬ কর্মদিবস সময় লাগে। প্রতি মঙ্গলবার ও শুক্রবার আমাদের ফ্লাইট ছাড়ে। এছাড়া 'Economy Standard Air' সার্ভিসে ৭ থেকে ১০ দিন সময় লাগে। চট্টগ্রাম বন্দরে পৌঁছাতে 'Sea Cargo' কনটেইনারে ২৫ থেকে ৩৫ দিন সময় লাগে।",
      icon: Clock,
    },
    {
      q: "আমার পরিবার যদি ঢাকার বাইরে সিলেটে বা প্রত্যন্ত গ্রামে থাকে, সেখানে কি হোম ডেলিভারি হবে?",
      a: "হ্যাঁ, বাংলাদেশের ৬৪ জেলার প্রতিটি উপজেলা ও ইউনিয়নে আমাদের ডেলিভারি নেটওয়ার্ক কার্যকর। সিলেট, চট্টগ্রাম, রাজশাহী, খুলনা, বরিশাল, রংপুর, ময়মনসিংহসহ যেকোনো ঠিকানায় আমাদের নিজস্ব কুরিয়ার রাইডাররা ওটিপি (OTP) ভেরিফিকেশনের মাধ্যমে সরাসরি উপহার হস্তান্তর করে।",
      icon: Home,
    },
    {
      q: "আমি কি অ্যামাজন (Amazon) বা ওয়ালমার্ট (Walmart) থেকে সরাসরি আপনাদের গুদামে পাঠাতে পারি?",
      a: "অবশ্যই! আমাদের নিউ ইয়র্ক (JFK) এবং হিউস্টন গুদামের ঠিকানায় আপনি অ্যামাজন, ওয়ালমার্ট, ইবে বা অ্যাপল স্টোর থেকে অর্ডার পাঠিয়ে দিতে পারেন। আমরা আপনার একাধিক প্যাকেজ একত্রিত করে (Free Consolidation) অপ্রয়োজনীয় বড় বাক্স বাদ দিয়ে একটি কমপ্যাক্ট বক্সে প্যাক করে দেব, এতে আপনার শিপিং খরচ ৪০% পর্যন্ত কমে যাবে।",
      icon: Package,
    },
    {
      q: "শিপমেন্টে যদি কোনো পণ্য হারিয়ে যায় বা ভেঙে যায়, তবে কি ক্ষতিপূরণ পাব?",
      a: "আমরা প্রতিটি পার্সেলের উপর ১০০% ভ্যালু ইন্সুরেন্স অফার করি। যদি আকাশপথে কোনো অপ্রত্যাশিত ক্ষতি বা লোকসান হয়, তবে ঘোষিত মূল্যের সম্পূর্ণ অর্থ (১০০% রিফান্ড) গ্যারান্টি সহকারে ফেরত দেওয়া হয়।",
      icon: ShieldCheck,
    },
    {
      q: "আমি কি বিকাশ (bKash), নগদ বা ক্রেডিট কার্ড দিয়ে পেমেন্ট করতে পারব?",
      a: "হ্যাঁ, আপনি আন্তর্জাতিক ভিসা/মাস্টারকার্ডের পাশাপাশি বাংলাদেশের বিকাশ (bKash), নগদ, রকেট অথবা সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে শিপিং ফি পরিশোধ করতে পারবেন।",
      icon: CreditCard,
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={HelpCircle}
          badgeText="Frequently Asked Questions"
          title="প্রবাসীদের সাধারণ"
          highlightedText="প্রশ্নোত্তর (FAQ)"
          description="Clear answers about customs rules, transit times, packaging and parcel safety."
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => {
            const FaqIcon = faq.icon;
            return (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-white/20 dark:border-white/5 rounded-3xl px-6 glass-surface specular-shine shadow-sm"
              >
                <AccordionTrigger className="text-base font-bold text-foreground py-5 hover:no-underline hover:text-emerald-600 dark:hover:text-emerald-400 gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <FaqIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 pl-7 leading-relaxed font-normal">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
