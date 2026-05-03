import Banner from '@/components/Banner';
import Instructor from '@/components/Instructor';
import PopularCourses from '@/components/PopularCourses';
import Tips from '@/components/Tips';
import TrendingCourses from '@/components/TrendingCourses';

export default function Home() {
  return (
    <div>
      <Banner />
      <TrendingCourses />
      <PopularCourses />
      <Tips />
      <Instructor />
    </div>
  );
}
