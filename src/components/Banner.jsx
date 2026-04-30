import Link from 'next/link';

export default function Banner() {
  return (
    <section
      className="min-h-[500px] flex items-center justify-center text-center px-4 py-16"
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="text-sm px-4 py-1.5 rounded-full border border-primary/50 bg-primary/15 text-primary">
            ✦ New courses added weekly
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
          Upgrade Your Skills <span className="text-primary">Today</span> 🚀
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Learn from Industry Experts
        </h2>

        <p className="text-white/60 text-sm md:text-base mb-8 leading-relaxed">
          Master in-demand skills with expert-led courses in Web Dev, Design,
          Marketing and more.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="/courses"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 px-6"
          >
            Explore Courses
          </Link>
          <Link
            href="#"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 px-6"
          >
            Watch Demo
          </Link>
        </div>

        <div className="flex justify-center gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">50K+</p>
            <p className="text-white/50 text-sm mt-1">Students</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">200+</p>
            <p className="text-white/50 text-sm mt-1">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">4.9★</p>
            <p className="text-white/50 text-sm mt-1">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
