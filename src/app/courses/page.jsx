import CourseCard from '@/components/CourseCard';

const AllCourses = async () => {
  const res = await fetch('https://skill-sphere-sable.vercel.app/data.json');
  const data = await res.json();

  return (
    <div>
      {/* Header Section */}
      <div className="bg-base-200 border-b border-base-300 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-base-content">
              All Courses
            </h1>
            <p className="text-base-content/50 text-sm mt-1">
              Explore 200+ expert-led courses
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-1 items-center gap-2 bg-base-100 border border-base-300 rounded-xl px-4 py-2 focus-within:border-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-base-content/40 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search courses by title..."
                className="flex-1 bg-transparent outline-none text-sm text-base-content placeholder:text-base-content/30"
              />
            </div>
            <button className="btn btn-primary rounded-xl px-6">Search</button>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'All',
              'Development',
              'Design',
              'Marketing',
              'AI / ML',
              'Cloud',
              'Security',
            ].map(cat => (
              <button
                key={cat}
                className="badge badge-outline hover:badge-primary cursor-pointer transition-all text-xs py-3 px-3"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container mx-auto px-6 py-8">
        <p className="text-base-content/50 text-sm mb-4">
          {data.length} courses found
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
