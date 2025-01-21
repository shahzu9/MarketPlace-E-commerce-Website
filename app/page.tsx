import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeturedProducts"
import TopCategory from "@/components/TopCategory"
// import PopularStyle from "@/components/PopularStyle"
import OurProducts from "@/components/OurProducts"




export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <TopCategory/>
      {/* <PopularStyle/> */}
      <OurProducts/>
    </div>
  );
}