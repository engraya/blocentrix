const WhyUs = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Why Choose BlocEntrix?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover what sets us apart from the competition
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Expertise & Experience</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                Over 10 years of industry experience
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                Certified professionals in latest technologies
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                Proven track record of successful projects
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Innovation & Technology</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                Cutting-edge development practices
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                State-of-the-art technology stack
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-600 dark:text-gray-300">
                Regular updates and maintenance
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Uncompromising standards in every project
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              24/7 dedicated customer service
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Value</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Competitive pricing with maximum ROI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs; 