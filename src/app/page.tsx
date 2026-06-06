"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "process"}
      ]}
      brandName="Decka Agency"
      button={{
        text: "Contact",        href: "#contact"
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Websites That Convert Local Customers"
      description="Decka Agency builds modern, credibility-focused websites designed specifically for local service businesses. We showcase measurable results to help you understand the impact before you commit."
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-sale-promotion-smartphone-with-neon-lights_23-2152033025.jpg?_wi=1", imageAlt: "Website Portfolio 1" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/web-design-user-interface-concept_53876-120767.jpg?_wi=1", imageAlt: "Website Portfolio 2" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/contemporary-laptop-placework-construction-worker_329181-3495.jpg?_wi=1", imageAlt: "Website Portfolio 3" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/artists-using-paint-from-cans-with-brush_23-2148591278.jpg", imageAlt: "Website Portfolio 4" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/close-up-mechanic-with-tablet_23-2148480379.jpg", imageAlt: "Website Portfolio 5" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/long-shot-man-with-helmet-sitting-roof_23-2149343711.jpg", imageAlt: "Website Portfolio 6" }
      ]}
    />
  </div>

  

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "45%", title: "Lead Increase", description: "Average conversion growth.", imageSrc: "http://img.b2bpic.net/free-photo/business-success-growth-visualization_23-2152011787.jpg?_wi=1" },
        { id: "m2", value: "3x", title: "ROAS Improvement", description: "Boosted marketing efficiency.", imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-tablet-with-digital-network-graphic-front-cityscape_9975-22113.jpg" },
        { id: "m3", value: "2.5s", title: "Load Speed", description: "Faster than industry standards.", imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-colleagues-working-charts-analysis-with-digital-tablet-using-online-research-information-create-infographics-report-people-analyzing-diagrams-boardroom_482257-46896.jpg" }
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
        { title: "Strategy & Planning", description: "We identify your local market goals.", icon: Target, mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/home-repair-renovation-interior-design-concept_53876-125419.jpg" },
            { imageSrc: "http://img.b2bpic.net/free-photo/home-repair-renovation-interior-design-concept_53876-125419.jpg" } 
          ] },
        { title: "Design & Development", description: "Building a custom, conversion-first site.", icon: Layout, mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/manly-construction-worker-work_329181-3752.jpg" },
            { imageSrc: "http://img.b2bpic.net/free-photo/manly-construction-worker-work_329181-3752.jpg" }
          ] },
        { title: "Launch & Optimize", description: "Deploying for maximum lead generation.", icon: Rocket, mediaItems: [
            { imageSrc: "http://img.b2bpic.net/free-photo/business-success-growth-visualization_23-2152011787.jpg?_wi=2" },
            { imageSrc: "http://img.b2bpic.net/free-photo/business-success-growth-visualization_23-2152011787.jpg?_wi=2" }
          ] }
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
        { id: "2", title: "Increased Leads", quote: "We saw a 30% increase in calls within the first month.", name: "Michael Chen", role: "Manager", imageSrc: "http://img.b2bpic.net/free-photo/successful-expert_1098-14503.jpg" },
        { id: "3", title: "Simple Process", quote: "Zero back-and-forth. Very efficient design.", name: "Emily Rodriguez", role: "Founder", imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-with-cup-coffee_23-2149330971.jpg" }
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
      buttons={[]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Decka Agency"
      leftLink={{ text: "", href: "#" }}
      rightLink={{ text: "", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
