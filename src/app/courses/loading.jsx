const loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-base-content/60 text-sm">Loading...</p>
    </div>
  );
};

export default loading;
