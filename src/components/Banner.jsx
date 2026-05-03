'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const slides = [
  {
    badge: '✦ New courses added weekly',
    title: 'Upgrade Your Skills',
    highlight: 'Today 🚀',
    subtitle: 'Learn from Industry Experts',
    desc: 'Master in-demand skills with expert-led courses in Web Dev, Design, Marketing and more.',
  },
  {
    badge: '✦ 200+ courses available',
    title: 'Build Real',
    highlight: 'Projects 💻',
    subtitle: 'Learn by Doing',
    desc: 'Work on hands-on projects and build a portfolio that gets you hired faster.',
  },
  {
    badge: '✦ Expert instructors',
    title: 'Learn from the',
    highlight: 'Best 🏆',
    subtitle: 'Industry-Leading Experts',
    desc: 'Get mentored by professionals with years of real-world experience in their fields.',
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{
        background:
          'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={600}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[500px] flex items-center justify-center text-center px-4 py-16">
              <div className="max-w-2xl mx-auto">
                {/* Badge */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`badge-${index}`}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="flex justify-center mb-6"
                    >
                      <span className="text-sm px-4 py-1.5 rounded-full border border-primary/50 bg-primary/15 text-primary">
                        {slide.badge}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Title */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.h1
                      key={`title-${index}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: 'easeOut',
                      }}
                      className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
                    >
                      {slide.title}{' '}
                      <span className="text-primary">{slide.highlight}</span>
                    </motion.h1>
                  )}
                </AnimatePresence>

                {/* Subtitle */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.h2
                      key={`subtitle-${index}`}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: 'easeOut',
                      }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4"
                    >
                      {slide.subtitle}
                    </motion.h2>
                  )}
                </AnimatePresence>

                {/* Description */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      key={`desc-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-white/60 text-sm md:text-base mb-8 leading-relaxed"
                    >
                      {slide.desc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Buttons */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`btns-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                      <Link href="/courses" className="btn btn-primary px-6">
                        Explore Courses
                      </Link>
                      <Link
                        href="#"
                        className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 px-6"
                      >
                        Watch Demo
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stats */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`stats-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex justify-center gap-12"
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
