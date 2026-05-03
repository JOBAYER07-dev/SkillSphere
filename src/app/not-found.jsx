import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-primary opacity-20 leading-none">
          404
        </h1>

        {/* Icon */}
        <div className="text-6xl mb-6 -mt-8">🔍</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-base-content mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/60 text-base max-w-md mx-auto mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary px-8">
            Go back to Home
          </Link>
          <Link href="/courses" className="btn btn-outline px-8">
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
