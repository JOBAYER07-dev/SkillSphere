// src/components/TopInstructors.jsx

const avatarColors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-error'];

const Instructor = async () => {
  const res = await fetch(
    'https://skill-sphere-sable.vercel.app/instractor.json',
  );
  const instructors = await res.json();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* ===== Header ===== */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">🏆 Top Instructors</h2>
      </div>

      {/* ===== Cards Grid ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {instructors.map((instructor, index) => (
          <div
            key={instructor.id}
            className="bg-base-100 border border-base-300 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
            {/* Avatar */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 ${
                avatarColors[index % avatarColors.length]
              }`}
            >
              {instructor.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .slice(0, 2)}
            </div>

            {/* Name */}
            <h3 className="font-bold text-sm">{instructor.name}</h3>

            {/* Role */}
            <p className="text-base-content/50 text-xs mt-1 mb-3">
              {instructor.role}
            </p>

            {/* Stats */}
            <p className="text-primary text-xs font-semibold">
              {instructor.totalCourses} courses · {instructor.rating}★
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
