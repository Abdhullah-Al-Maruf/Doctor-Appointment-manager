import Faq from "@/components/faqsection/Faq";
import ReviewSection from "@/components/reviewsection/ReviewSection";
import SliderBanner from "@/components/SliderBanner";
import WhyChooseUs from "@/components/why-choose-section/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <SliderBanner />
      <WhyChooseUs/>
      <ReviewSection/>
      <Faq/>
    </div>
  );
}
