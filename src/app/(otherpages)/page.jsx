import Faq from "@/components/faqsection/Faq";
import ReviewSection from "@/components/reviewsection/ReviewSection";
import SliderBanner from "@/components/SliderBanner";
import TopRatedDoctor from "@/components/top-rated-doctor-section/TopRatedDoctor";
import WhyChooseUs from "@/components/why-choose-section/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <SliderBanner />
      <TopRatedDoctor/>
      <WhyChooseUs/>
      <ReviewSection/>
      <Faq/>
    </div>
  );
}
