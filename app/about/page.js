import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
     
      <section
        className="bg-cover bg-center bg-no-repeat py-16 px-4 text-center opacity-70"
        style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/03/01/10/03/online-sales-2108028_1280.jpg")' }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-black mb-4">
            Welcome to Our E-commerce Store
          </h1>
          <p className="text-lg text-black">
            Discover the best products, deals, and services that make your life easier and more enjoyable.
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600">
            At Our E-commerce Store, we started with a vision to provide high-quality products and exceptional customer service. Since our establishment in [Year], we have been dedicated to making your online shopping experience smooth and enjoyable.
          </p>
        </div>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is to connect people with products they love. We aim to bring joy and convenience to your life by offering a wide range of high-quality items and great deals. Your satisfaction is our top priority, and we continuously strive to exceed your expectations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
