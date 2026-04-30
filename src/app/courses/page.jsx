'use client';

import { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://skill-sphere-sable.vercel.app/data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error('Failed to fetch courses:', err));
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = [
    'All',
    'Development',
    'Design',
    'Marketing',
    'AI / ML',
    'Cloud',
    'Security',
  ];

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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            <button className="btn btn-primary rounded-xl px-6">Search</button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`badge badge-outline cursor-pointer transition-all text-xs py-3 px-3 ${
                  selectedCategory === cat
                    ? 'badge-primary bg-primary text-white'
                    : 'hover:badge-primary'
                }`}
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
          {filteredCourses.length} courses found
        </p>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-10 text-base-content/60">
            No courses found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
