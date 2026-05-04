import Link from 'next/link';
import CourseCard from './CourseCard';

const PopularCourses = async () => {
  const res = await fetch('https://skill-sphere-sable.vercel.app/data.json');
  const data = await res.json();

  const popularCourses = data
    .filter(course => !course.isTrending)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/*  Header  */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">🔥 Popular Courses</h2>
          <p className="text-base-content/60 text-sm mt-1">
            Top rated courses by our students
          </p>
        </div>
        <Link href="/courses" className="btn btn-outline btn-primary btn-sm">
          See all →
        </Link>
      </div>

      {/*  Cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
