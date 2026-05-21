import Faq from "@/components/faqsection/Faq";
import ReviewSection from "@/components/reviewsection/ReviewSection";
import SliderBanner from "@/components/SliderBanner";
import TopRatedDoctor from "@/components/top-rated-doctor-section/TopRatedDoctor";
import WhyChooseUs from "@/components/why-choose-section/WhyChooseUs";

export const metadata = {
  title: "Home — Find & Book Top Doctors",
  description:
    "Discover top-rated doctors, read patient reviews, and book appointments instantly with DocAppoint. Your modern healthcare companion.",
  openGraph: {
    title: "DocAppoint — Find & Book Top Doctors Online",
    description:
      "Discover top-rated doctors, read patient reviews, and book appointments instantly with DocAppoint.",
  },
  twitter: {
    title: "DocAppoint — Find & Book Top Doctors Online",
    description:
      "Discover top-rated doctors, read patient reviews, and book appointments instantly.",
  },
};

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
