const Tips = async () => {
  const res = await fetch('https://skill-sphere-sable.vercel.app/tips.json');
  const tips = await res.json();

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/*  Header  */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          📌 Learning Tips
        </h2>
      </div>

      {/*  Cards Grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tips.map(tip => (
          <div
            key={tip.id}
            className="bg-base-100 border border-base-300 rounded-xl p-5 border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="text-2xl mb-3">{tip.icon}</div>

            {/* Title */}
            <h3 className="font-bold text-base mb-2">{tip.title}</h3>

            {/* Description */}
            <p className="text-base-content/60 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
