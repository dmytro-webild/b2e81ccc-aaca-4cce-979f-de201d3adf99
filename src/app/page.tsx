"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Layout, Rocket, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "Services",          id: "process"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Decka Agency"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Websites That Convert Local Customers"
      description="Decka Agency builds modern, credibility-focused websites designed specifically for local service businesses. We showcase measurable results to help you understand the impact before you commit."
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-sale-promotion-smartphone-with-neon-lights_23-2152033025.jpg", imageAlt: "Website Portfolio 1" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/web-design-user-interface-concept_53876-120767.jpg", imageAlt: "Website Portfolio 2" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/contemporary-laptop-placework-construction-worker_329181-3495.jpg", imageAlt: "Website Portfolio 3" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/artists-using-paint-from-cans-with-brush_23-2148591278.jpg", imageAlt: "Website Portfolio 4" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/close-up-mechanic-with-tablet_23-2148480379.jpg", imageAlt: "Website Portfolio 5" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/long-shot-man-with-helmet-sitting-roof_23-2149343711.jpg", imageAlt: "Website Portfolio 6" },
      ]}
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Cleaning Co Landing", price: "High Conversion", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-photo/ecology-fresh-lush-natural-nature_53876-133745.jpg" },
        { id: "2", name: "Landscape Pros Site", price: "Growth Oriented", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-photo/go-green-responsibility-sustainable-concept_53876-13915.jpg" },
        { id: "3", name: "Pressure Wash Results", price: "Lead Focused", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-photo/construction-building-architecture-concept_53876-120128.jpg" },
        { id: "4", name: "Exterior Paint Hub", price: "Premium Design", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-vector/gradient-abstract-technology-landing-page-template_23-2149088825.jpg?_wi=1" },
        { id: "5", name: "Plumbing Solutions Site", price: "UX Focused", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-photo/man-servant-cooking-kitchen_23-2149530816.jpg" },
        { id: "6", name: "Roofing Pro Portfolio", price: "Credibility Driven", variant: "Service Site", imageSrc: "http://img.b2bpic.net/free-vector/gradient-abstract-technology-landing-page-template_23-2149088825.jpg?_wi=2" },
      ]}
      title="Portfolio of Results"
      description="See how we've transformed websites for local service businesses."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "45%", title: "Lead Increase", description: "Average conversion growth.", imageSrc: "http://img.b2bpic.net/free-photo/business-success-growth-visualization_23-2152011787.jpg" },
        { id: "m2", value: "3x", title: "ROAS Improvement", description: "Boosted marketing efficiency.", imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-tablet-with-digital-network-graphic-front-cityscape_9975-22113.jpg" },
        { id: "m3", value: "2.5s", title: "Load Speed", description: "Faster than industry standards.", imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-colleagues-working-charts-analysis-with-digital-tablet-using-online-research-information-create-infographics-report-people-analyzing-diagrams-boardroom_482257-46896.jpg" },
      ]}
      title="Measurable Impact"
      description="Our websites don't just look great; they drive tangible business results."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Strategy & Planning", description: "We identify your local market goals.", icon: Target, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/home-repair-renovation-interior-design-concept_53876-125419.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345424.jpg" }] },
        { title: "Design & Development", description: "Building a custom, conversion-first site.", icon: Layout, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/manly-construction-worker-work_329181-3752.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/elegant-cozy-office-lifestyle_23-2149636247.jpg" }] },
        { title: "Launch & Optimize", description: "Deploying for maximum lead generation.", icon: Rocket, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-vector/modern-web-banners-with-flat-design_23-2147937081.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/blank-paper-wooden-surface_1253-198.jpg" }] },
      ]}
      title="Simple Three-Step Process"
      description="We cut out the clutter so you can focus on running your business."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Excellent Service", quote: "Decka Agency built our new site in record time.", name: "Sarah Johnson", role: "Owner", imageSrc: "http://img.b2bpic.net/free-photo/stylish-man-flannel-suit-glasses-standing-against-brick-wall_613910-6746.jpg" },
        { id: "2", title: "Increased Leads", quote: "We saw a 30% increase in calls within the first month.", name: "Michael Chen", role: "Manager", imageSrc: "http://img.b2bpic.net/free-photo/successful-expert_1098-14503.jpg" },
        { id: "3", title: "Simple Process", quote: "Zero back-and-forth. Very efficient design.", name: "Emily Rodriguez", role: "Founder", imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-with-cup-coffee_23-2149330971.jpg" },
      ]}
      title="What Owners Say"
      description="Real results from real local business owners."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-static" }}
      text="Ready to convert your local customers?"
      buttons={[{ text: "Book a Consultation", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Decka Agency"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Contact Us", href: "#contact" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
