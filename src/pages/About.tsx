const About = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Learn about our journey and mission
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2024, BlocEntrix has been at the forefront of digital innovation.
            We started with a simple mission: to make technology accessible and effective
            for businesses of all sizes.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We strive to deliver cutting-edge solutions that help businesses thrive in
            the digital age. Our commitment to excellence and innovation drives everything
            we do.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Constantly pushing boundaries and exploring new technologies
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building trust through transparent and ethical practices
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivering the highest quality in everything we do
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 