import Banner from "@/components/Banner";
import Instructor from "@/components/Instructor";
import Tips from "@/components/Tips";
import TrendingCourses from "@/components/TrendingCourses";



export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingCourses />
      <Tips />
      <Instructor/>
    </div>
  );
}
