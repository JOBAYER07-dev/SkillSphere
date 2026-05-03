'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch('https://skill-sphere-sable.vercel.app/tips.json')
      .then(res => res.json())
      .then(data => setTips(data));
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
        <h2 className="text-2xl font-bold flex items-center gap-2">
          📌 Learning Tips
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-base-100 border border-base-300 rounded-xl p-5 border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-2xl mb-3">{tip.icon}</div>
            <h3 className="font-bold text-base mb-2">{tip.title}</h3>
            <p className="text-base-content/60 text-sm leading-relaxed">
              {tip.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
