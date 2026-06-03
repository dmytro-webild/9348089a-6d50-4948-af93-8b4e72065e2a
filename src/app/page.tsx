"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Why Us",          id: "#why-us"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "About",          id: "#about"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Stevenson's Hardwood Floors"
      button={{
        text: "Get Free Estimate",        href: "#contact"}}
      logoClassName="text-2xl font-semibold"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient"}}
      title="North Carolina's Trusted Hardwood Flooring Experts"
      description="Professional Hardwood Floor Installation, Refinishing, Sanding & Luxury Vinyl Flooring. Serving Homeowners and Businesses with Quality Craftsmanship for Over 30 Years."
      tag="✓ 30+ Years Experience • BBB Accredited • HomeAdvisor Approved • 50+ Five-Star Reviews • Licensed & Insured"
      buttons={[
        {
          text: "Get Free Estimate",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+13364297774"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-carpenter-got-right-measures_329181-15637.jpg",          imageAlt: "luxurious living room with newly installed dark hardwood floor"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-worker-lining-floor-with-laminated-flooring-boards_231208-4215.jpg",          imageAlt: "close-up of wood floor refinishing process with sanding machine"},
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="50+ Five-Star Reviews"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Premium Craftsmanship",          description: "Every project completed with precision and attention to detail, ensuring a flawless finish that lasts.",          imageSrc: "http://img.b2bpic.net/free-photo/engraving-instrument-arrangement-table_23-2149061687.jpg",          imageAlt: "Precision woodworking tools on unfinished hardwood floor"},
        {
          title: "30+ Years Experience",          description: "Decades of proven flooring expertise deliver reliable, high-quality results for every home and business.",          imageSrc: "http://img.b2bpic.net/free-photo/home-tile-improvement-handyman-with-level-laying-down-tile-floor_231208-6794.jpg",          imageAlt: "Experienced flooring contractor discussing plans with client"},
        {
          title: "Transparent Pricing",          description: "Fair, honest estimates with no hidden fees or surprises, so you know exactly what to expect.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-taking-measure-wood_23-2148384479.jpg",          imageAlt: "Calculator with transparent pricing on a project plan"},
        {
          title: "Trusted Reputation",          description: "Proudly backed by 50+ Five-Star Reviews from satisfied customers across North Carolina.",          imageSrc: "http://img.b2bpic.net/free-photo/collage-customer-experience-concept_23-2149367137.jpg",          imageAlt: "Customer review stars on a tablet showing 5-star rating"},
        {
          title: "Fast Turnaround",          description: "Efficient project completion without sacrificing quality, getting you back on your beautiful floors sooner.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-planner-calendar-dark-background_23-2148693331.jpg",          imageAlt: "Fast-paced construction site with blurred workers installing floors"},
        {
          title: "Satisfaction Guaranteed",          description: "Your complete happiness is our top priority, ensuring every flooring project exceeds your expectations.",          imageSrc: "http://img.b2bpic.net/free-photo/engineer-working-with-airplane_1098-12552.jpg",          imageAlt: "Happy customer admiring their new hardwood floors"},
      ]}
      title="Why Homeowners Choose Us"
      description="Discover the Stevenson's difference: unmatched craftsmanship, transparent service, and guaranteed satisfaction."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "service-hardwood-installation",          brand: "Hardwood",          name: "Hardwood Floor Installation",          price: "Free Estimate",          rating: 5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-puts-laminate-flooring-floor_169016-17476.jpg",          imageAlt: "Professional hardwood floor installation"},
        {
          id: "service-hardwood-refinishing",          brand: "Hardwood",          name: "Hardwood Floor Refinishing",          price: "Free Estimate",          rating: 4.5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/person-varnishing-wood-with-big-brush_23-2148748819.jpg",          imageAlt: "Hardwood floor refinishing process"},
        {
          id: "service-hardwood-staining",          brand: "Hardwood",          name: "Hardwood Floor Staining",          price: "Free Estimate",          rating: 4,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-boards-mdf-material_23-2149418579.jpg",          imageAlt: "Custom hardwood floor staining"},
        {
          id: "service-floor-sanding",          brand: "Hardwood",          name: "Floor Sanding",          price: "Free Estimate",          rating: 5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-using-concrete-screed-machine-construction-site_651396-2749.jpg",          imageAlt: "Floor sanding for smooth preparation"},
        {
          id: "service-lvp-installation",          brand: "LVP",          name: "Luxury Vinyl Plank Installation",          price: "Free Estimate",          rating: 4.5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/texture-background_1404-102.jpg",          imageAlt: "Luxury Vinyl Plank flooring installation"},
        {
          id: "service-laminate-installation",          brand: "Laminate",          name: "Laminate Flooring Installation",          price: "Free Estimate",          rating: 4,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-yoga-equipment_23-2151725253.jpg",          imageAlt: "Laminate flooring installation"},
        {
          id: "service-floor-repairs",          brand: "Repair",          name: "Floor Repairs",          price: "Free Estimate",          rating: 5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/man-is-working-with-mosquito-wire-screen-installation_1150-6579.jpg",          imageAlt: "Flooring repair services"},
        {
          id: "service-custom-solutions",          brand: "Custom",          name: "Custom Flooring Solutions",          price: "Free Estimate",          rating: 4.5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/scenery-designers-work_23-2149741835.jpg",          imageAlt: "Custom flooring design solutions"},
      ]}
      title="Our Expert Flooring Services"
      description="Stevenson's Hardwood Floors offers a comprehensive range of solutions to meet all your residential and commercial flooring needs."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "gallery-refinishing-1",          brand: "Refinishing",          name: "Hardwood Floor Refinishing",          price: "View Project",          rating: 4.5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-contractors-tiling-floor_23-2149343990.jpg",          imageAlt: "Before and after of dark hardwood floor refinishing"},
        {
          id: "gallery-new-hardwood-1",          brand: "New Install",          name: "New Hardwood Installation",          price: "View Project",          rating: 5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/modern-minimalist-living-room-interior_23-2152016396.jpg",          imageAlt: "Newly installed light oak hardwood floors"},
        {
          id: "gallery-lvp-1",          brand: "LVP",          name: "Luxury Vinyl Flooring",          price: "View Project",          rating: 4,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349199.jpg",          imageAlt: "Luxurious kitchen with newly installed LVP flooring"},
        {
          id: "gallery-commercial-1",          brand: "Commercial",          name: "Commercial Flooring Project",          price: "View Project",          rating: 4.5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/entrance-building-bridge_122409-8.jpg",          imageAlt: "Commercial building hallway with freshly installed hardwood floors"},
        {
          id: "gallery-repairs-1",          brand: "Repairs",          name: "Floor Repair & Restoration",          price: "View Project",          rating: 5,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/glittery-golden-black-wrapping-paper_53876-88533.jpg",          imageAlt: "Before and after of a scratched and dull floor to a shiny, repaired one"},
        {
          id: "gallery-custom-1",          brand: "Custom",          name: "Custom Flooring Design",          price: "View Project",          rating: 4,
          reviewCount: "",          imageSrc: "http://img.b2bpic.net/free-photo/herringbone-stairs-flooring-wooden-chevron-modern-finish_169016-68991.jpg",          imageAlt: "Custom wood floor medallion in a grand entryway"},
      ]}
      title="Before & After Transformations"
      description="Witness the dramatic results of our craftsmanship, turning worn-out floors into stunning centerpieces."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test-1",          name: "Christopher Overcash",          date: "April 2023",          title: "Floors Look New!",          quote: "They were quick and fair on price! The floors look new and are ready for another 20 years!",          tag: "Residential Refinishing",          avatarSrc: "http://img.b2bpic.net/free-photo/frustrated-angry-man-screaming-rage-shaking-hands-furious-standing-white-background_1258-112131.jpg",          avatarAlt: "Christopher Overcash",          imageSrc: "http://img.b2bpic.net/free-photo/wooden-surface-product-background_53876-89444.jpg",          imageAlt: "Perfectly refinished hardwood floor"},
        {
          id: "test-2",          name: "Michele Corwin",          date: "March 2023",          title: "Beautiful Commercial Work",          quote: "Very professional, beautiful work and got the job done fast. Redid our flooring in our restaurant and bathroom.",          tag: "Commercial Installation",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-waitress_1098-15705.jpg",          avatarAlt: "Michele Corwin",          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-6425.jpg",          imageAlt: "Newly redone restaurant flooring"},
        {
          id: "test-3",          name: "Bobbie Veltri",          date: "February 2023",          title: "Outstanding Craftsmanship",          quote: "Very professional brothers! Dennis and James sanded my floors exceptionally smooth. Outstanding craftsmanship and attention to detail.",          tag: "Floor Sanding",          avatarSrc: "http://img.b2bpic.net/free-photo/young-male-model-posing-outdoor_23-2148289284.jpg",          avatarAlt: "Bobbie Veltri",          imageSrc: "http://img.b2bpic.net/free-photo/wood-texture-background_23-2151942436.jpg",          imageAlt: "Smooth, exceptionally sanded hardwood floor"},
        {
          id: "test-4",          name: "Miele Burton",          date: "January 2023",          title: "Excellent Restoration",          quote: "Dennis solved each problem with no muss, no fuss, just solid craftsmanship and high standards. Excellent work restoring my cherry floors and removing years of wear.",          tag: "Hardwood Restoration",          avatarSrc: "http://img.b2bpic.net/free-photo/couple-with-friend-request-avatar-icon_53876-30683.jpg",          avatarAlt: "Miele Burton",          imageSrc: "http://img.b2bpic.net/free-photo/damaged-wooden-surface_1136-227.jpg",          imageAlt: "Restored cherry wood floors"},
        {
          id: "test-5",          name: "Sarah M.",          date: "December 2022",          title: "Transformed Our Home",          quote: "From the first estimate to the final walkthrough, everything was professional and stress-free. The floors completely transformed our home.",          tag: "Residential Installation",          avatarSrc: "http://img.b2bpic.net/free-photo/young-cute-woman-outdoors_624325-1712.jpg",          avatarAlt: "Sarah M.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-woman-lifestyle-blogger-talking-about-makeup-camera-recording-vlog_1258-254152.jpg",          imageAlt: "New light colored hardwood floor"},
        {
          id: "test-6",          name: "Michael R.",          date: "November 2022",          title: "Exceeded Expectations",          quote: "The quality of work exceeded our expectations. If you're looking for hardwood floor refinishing experts, this is the company to call.",          tag: "Refinishing Experts",          avatarSrc: "https://img.b2bpic.net/free-photo/two-male-colleagues-office-standing-with-laptop_1303-19624.jpg?id=6636976",          avatarAlt: "Michael R.",          imageSrc: "http://img.b2bpic.net/free-photo/liquid-makeup-foundation-texture-smudges-macro-cosmetics-texture-top-view_633478-1795.jpg",          imageAlt: "High-quality hardwood floor refinishing"},
      ]}
      title="What Our Customers Say"
      description="Hear directly from homeowners and businesses who have experienced the Stevenson's Hardwood Floors difference."
    />
  </div>

  <div id="service-areas" data-section="service-areas">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Elkin",        "Jonesville",        "Arlington",        "Pleasant Hill",        "Ronda",        "State Road",        "Surrounding NC Communities"]}
      title="Proudly Serving North Carolina"
      description="Stevenson's Hardwood Floors is dedicated to bringing exceptional flooring services to homes and businesses across a wide range of communities."
      speed={60}
      showCard={false}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Three Decades of Flooring Excellence"
      description="Stevenson's Hardwood Floors has proudly served homeowners and businesses throughout North Carolina for more than 30 years. Our reputation has been built on exceptional craftsmanship, honest service, attention to detail, and customer satisfaction. Whether installing brand-new hardwood floors, restoring historic flooring, or upgrading homes with luxury vinyl plank flooring, our mission remains the same: deliver flooring that looks beautiful and lasts for years."
      bulletPoints={[
        {
          title: "BBB Accredited",          description: "Committed to ethical business practices and customer satisfaction."},
        {
          title: "HomeAdvisor Screened & Approved",          description: "Vetted and trusted by industry-leading platforms."},
        {
          title: "Elite Service Award Winner",          description: "Recognized for consistently delivering outstanding service."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-manager-shaking-hands-with-african-american-factory-worker-industrial-building_637285-4774.jpg"
      imageAlt="Experienced flooring contractor team standing proudly"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "How much does hardwood floor installation cost?",          content: "The cost of hardwood floor installation varies depending on the type of wood, square footage, current subfloor conditions, and labor. We offer free, no-obligation estimates to provide an accurate quote for your specific project."},
        {
          id: "faq-2",          title: "How long does floor refinishing take?",          content: "Hardwood floor refinishing typically takes 3-5 days for an average-sized room, including sanding, staining, and multiple coats of finish. This can vary based on the floor's condition and the drying time between coats."},
        {
          id: "faq-3",          title: "Can scratched hardwood floors be repaired?",          content: "Yes, most scratched hardwood floors can be repaired. Minor scratches can often be buffed out or covered with touch-up kits. Deeper scratches or extensive damage may require professional sanding and refinishing, or individual plank replacement."},
        {
          id: "faq-4",          title: "Do you install luxury vinyl plank (LVP) flooring?",          content: "Absolutely! We specialize in professional Luxury Vinyl Plank (LVP) flooring installation. LVP is a durable, waterproof, and aesthetically versatile option perfect for kitchens, bathrooms, and high-traffic areas."},
        {
          id: "faq-5",          title: "What areas do you serve?",          content: "We proudly serve Elkin, Jonesville, Arlington, Pleasant Hill, Ronda, State Road, and many other surrounding communities throughout North Carolina. Contact us to confirm service availability in your specific location."},
        {
          id: "faq-6",          title: "Do you provide free estimates?",          content: "Yes, we offer complimentary, no-obligation estimates for all our flooring services. Schedule your free consultation today to discuss your project and receive a detailed quote."},
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about hardwood flooring installation, refinishing, and our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static"}}
      text="Ready to Transform Your Floors? Get a free estimate today and discover why homeowners across North Carolina trust Stevenson's Hardwood Floors."
      buttons={[
        {
          text: "Get Free Estimate",          href: "mailto:info@stevensonhardwoodfloors.com?subject=Free%20Estimate%20Request"},
        {
          text: "Call (336) 429-7774",          href: "tel:+13364297774"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Hardwood Installation",              href: "#services"},
            {
              label: "Refinishing & Sanding",              href: "#services"},
            {
              label: "LVP & Laminate",              href: "#services"},
            {
              label: "Floor Repairs",              href: "#services"},
            {
              label: "Custom Solutions",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Work",              href: "#gallery"},
            {
              label: "Testimonials",              href: "#reviews"},
            {
              label: "Service Areas",              href: "#service-areas"},
            {
              label: "FAQs",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get Free Estimate",              href: "#contact"},
            {
              label: "Call Us",              href: "tel:+13364297774"},
            {
              label: "Email Us",              href: "mailto:info@stevensonhardwoodfloors.com"},
            {
              label: "Visit Us",              href: "https://maps.google.com/?q=Elkin,North Carolina"},
          ],
        },
      ]}
      logoText="Stevenson's Hardwood Floors"
      copyrightText="© 2024 Stevenson's Hardwood Floors. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
