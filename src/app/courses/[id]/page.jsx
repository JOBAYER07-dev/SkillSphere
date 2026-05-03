import { notFound } from 'next/navigation';

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch('https://skill-sphere-sable.vercel.app/data.json');
  const data = await res.json();
  const course = data.find(c => c.id === parseInt(id));

  if (!course) notFound();

  const curriculumDurations = [
    'Free',
    '45 min',
    '60 min',
    '90 min',
    '2h 30m',
    '2h 00m',
    '1h 30m',
    '1h 00m',
  ];

  return (
    <div className="container mx-auto">
      <div
        style={{
          background:
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
        className="px-6 py-8 text-white"
      >
        <p className="text-white/50 text-sm mb-3">
          Home / Courses / {course.category}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">{course.title}</h1>

        <p className="text-white/70 text-sm mb-4">{course.description}</p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-white/70">
          <span>
            ★ {course.rating} ({course.enrolled.toLocaleString()} ratings)
          </span>
          <span>👤 {course.instructor}</span>
          <span>🕐 {course.duration}</span>
          <span>📚 {course.level}</span>
          <span>🌐 English</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* What you'll learn */}
          <div className="border border-base-300 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.curriculum.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-base-300 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Course Curriculum</h2>
            <div className="flex flex-col divide-y divide-base-300">
              {course.curriculum.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-base-200 flex items-center justify-center text-xs text-base-content/60 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                  <span
                    className={`text-xs flex-shrink-0 ${
                      index === 0
                        ? 'text-primary font-semibold'
                        : 'text-base-content/50'
                    }`}
                  >
                    {curriculumDurations[index] || '45 min'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="border border-base-300 rounded-xl overflow-hidden sticky top-20">
            {/* Preview Image */}
            <div className="h-44 bg-base-200 flex items-center justify-center overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-2xl font-bold mb-4">Free 🎉</p>

              <button className="btn btn-primary w-full mb-4">
                Enroll Now
              </button>

              <div className="flex flex-col gap-2 text-sm text-base-content/70">
                <div className="flex items-center gap-2">
                  <span>🎬</span>
                  <span>{course.duration} on-demand video</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📁</span>
                  <span>Downloadable resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏆</span>
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>♾️</span>
                  <span>Full lifetime access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
