'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="card bg-base-100 border border-base-300 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
    >
      <figure className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src = 'https://placehold.co/400x300?text=No+Image';
          }}
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded">
          {course.isNew ? 'NEW' : 'HOT'}
        </span>
        <span className="absolute top-2 right-2 bg-base-100 text-base-content text-xs px-2 py-0.5 rounded">
          {course.level}
        </span>
      </figure>

      <div className="card-body p-4">
        <span className="text-primary text-xs font-semibold uppercase tracking-wide">
          {course.category}
        </span>
        <h3 className="card-title text-sm font-bold leading-snug mt-1 group-hover:text-primary transition-colors duration-300">
          {course.title}
        </h3>
        <p className="text-base-content/60 text-xs">👤 {course.instructor}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 text-xs font-semibold">
            ★ {course.rating}
          </span>
          <span className="text-base-content/50 text-xs">
            ⏱ {course.duration}
          </span>
        </div>
        <p className="text-base-content/50 text-xs mt-1">
          🎓 {course.enrolled.toLocaleString()} students enrolled
        </p>
        <div className="card-actions mt-3">
          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
