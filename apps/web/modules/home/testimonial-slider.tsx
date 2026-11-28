"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/modules/ui/card";
import { Avatar, AvatarFallback } from "@/modules/ui/avatar";
import { Button } from "@/modules/ui/button";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      name: "Dr. Farhana Yasmin",
      role: "Cardiologist",
      location: "Houston, Texas, USA",
      deliveredTo: "Sylhet (Ambarkhana)",
      item: "MacBook Air M2 & Prescription Supplements for Parents",
      review:
        "আমার আম্মা-আব্বা সিলেটে থাকেন। আগে অন্য কুরিয়ারে পাঠালে ঢাকার কাস্টমস থেকে হয়রানির ফোন দিতো ট্যাক্সের জন্য। কিন্তু আপনব্রিজে পাঠানোর পর মাত্র ৫ দিনে কোনো ঝামেলা ছাড়াই আমার আম্মার হাতে সিল্ড বক্স পৌঁছে দিয়েছে! সার্ভিসটা প্রবাসীদের জন্য আশীর্বাদ।",
      rating: 5,
      initials: "FY",
    },
    {
      name: "Tanvir Ahmed",
      role: "Senior Software Engineer",
      location: "Queens, New York, USA",
      deliveredTo: "Dhaka (Uttara Sector 4)",
      item: "iPhone 16 Pro Max & Lindt Chocolates",
      review:
        "JFK এর কাছের গুদামে গিয়ে আমি নিজেই ড্রপ অফ করেছিলাম। ওরা সুন্দর করে আমার সামনে ওজন মেপে বাবলে প্যাক করে দিল। ঢাকা এয়ারপোর্টে কাস্টমস ক্লিয়ারেন্স থেকে শুরু করে ডেলিভারি ম্যান ওটিপি ছাড়া বক্স খোলে নাই। ১০০% সিকিউর ও প্রফেশনাল।",
      rating: 5,
      initials: "TA",
    },
    {
      name: "Kazi Rayhan",
      role: "Cybersecurity Analyst",
      location: "London, United Kingdom",
      deliveredTo: "Chittagong (Panchlaish)",
      item: "Warm Winter Blankets, Clothes & Perfumes",
      review:
        "UK থেকে বাংলাদেশে কাপড় ও উপহার পাঠানো সবসময় একটা প্যারার কাজ ছিল। আপনব্রিজ এক্সপ্রেসের ফ্ল্যাট পার-পাউন্ড রেট দেখে ট্রাই করলাম। কাস্টমসের কোনো হিডেন চার্জ ছিল না। আমার পরিবার খুব খুশি হয়েছে!",
      rating: 5,
      initials: "KR",
    },
    {
      name: "Anika Tabassum",
      role: "Pharmacist",
      location: "Toronto, Canada",
      deliveredTo: "Rajshahi (Shaheb Bazar)",
      item: "Glucosamine & Multi-vitamins for Grandparents",
      review:
        "কানাডা থেকে রাজশাহী পর্যন্ত ওষুধ ঠিকঠাক তাপমাত্রা মেইনটেইন করে পৌঁছাবে কিনা ভয় পাচ্ছিলাম। কিন্তু আপনব্রিজের রিয়েলটাইম ফ্লাইট ট্র্যাকিং দেখে মন শান্ত ছিল। ধন্যবাদ পুরো টিমের নিখুঁত সেবার জন্য।",
      rating: 5,
      initials: "AT",
    },
  ];

  return (
    <section className="py-20 bg-muted/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> Real Expat Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              What Bangladeshi Expats Say About Us
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Over 14,000+ diaspora families trust AponBridge every month to bridge the distance between overseas and home.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full h-11 w-11"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full h-11 w-11"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <Card className="h-full border-border bg-card flex flex-col justify-between p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm text-foreground/90 leading-relaxed italic">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-emerald-600 text-white font-bold text-xs">
                          {item.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-xs font-bold text-foreground">{item.name}</h4>
                        <span className="text-[11px] text-muted-foreground block">{item.location}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">
                        Delivered to:
                      </span>
                      <span className="text-[11px] font-semibold text-foreground">{item.deliveredTo}</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
