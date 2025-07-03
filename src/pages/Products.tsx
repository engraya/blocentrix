const Products = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover our range of innovative solutions
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Enterprise Suite</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete business management solution
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Resource Planning</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Analytics Dashboard</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">24/7 Support</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Cloud Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Scalable cloud infrastructure
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Auto Scaling</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Load Balancing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Backup & Recovery</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Security Suite</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Advanced security solutions
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Threat Detection</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Data Encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Access Control</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 