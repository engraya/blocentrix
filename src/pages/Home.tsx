const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BlocEntrix</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your partner in digital transformation
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Cutting-edge solutions for modern challenges
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Expertise</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Years of experience in digital solutions
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Support</h3>
          <p className="text-gray-600 dark:text-gray-300">
            24/7 dedicated customer support
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home; 