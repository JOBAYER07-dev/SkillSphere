
import Link from "next/link";
import CourseCard from "./CourseCard";

const TrendingCourses = async () => {
  const res = await fetch('https://skill-sphere-sable.vercel.app/data.json');
  const data = await res.json();

  const trendingCourses = data.filter(course => course.isTrending);

  console.log(trendingCourses);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">⚡ Trending Now</h2>
        <p className="text-base-content/60 text-sm mt-1">
          Most enrolled this week
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div>
        <Link href="/courses">
          <button className="btn btn-outline btn-primary mt-6 mx-auto block">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingCourses;
