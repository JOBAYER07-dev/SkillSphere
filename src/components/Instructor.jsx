'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const avatarColors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-error'];

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('https://skill-sphere-sable.vercel.app/instractor.json')
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold">🏆 Top Instructors</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {instructors.map((instructor, index) => (
          <motion.div
            key={instructor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-base-100 border border-base-300 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
          >
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
            <h3 className="font-bold text-sm">{instructor.name}</h3>
            <p className="text-base-content/50 text-xs mt-1 mb-3">
              {instructor.role}
            </p>
            <p className="text-primary text-xs font-semibold">
              {instructor.totalCourses} courses · {instructor.rating}★
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Instructor;
