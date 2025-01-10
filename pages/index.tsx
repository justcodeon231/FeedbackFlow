// pages/index.tsx (HomePage)
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import Navbar component
import WaitlistForm from '../components/Waitlistform'; // Import the WaitlistForm component

const HomePage = () => {
  // State for smooth animations on load
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-blue to-cool-gray text-white pt-24"> {/* Added padding-top to ensure navbar doesn't overlap content */}
      {/* Navbar */}
      <Navbar />

      <header className="container mx-auto py-20 px-4 text-center">
        <h1
          className={`text-5xl font-extrabold mb-6 transform transition-all duration-700 ease-in-out ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Welcome to <span className="text-vibrant-green">FeedbackFlow</span>
        </h1>
        <p
          className={`text-xl mb-8 transform transition-all duration-700 ease-in-out ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Revolutionize the way you collect reviews and feedback. Create better experiences with every interaction.
        </p>
        <button
          onClick={openModal} // Open modal on click
          className="inline-block px-6 py-3 bg-vibrant-green text-dark-blue font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-dark-blue hover:text-white"
        >
          Join the Waitlist
        </button>
      </header>

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isModalOpen} onClose={closeModal} />

      <section className="container mx-auto py-20 px-4">
        <h2
          className={`text-3xl font-bold text-center mb-6 transform transition-all duration-700 ease-in-out ${
            hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why FeedbackFlow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-in-out ${
              hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-dark-blue mb-4">Capture Insights</h3>
            <p className="text-gray-600">
              Easily collect valuable feedback from your users with simple tools.
            </p>
          </div>
          <div
            className={`text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-in-out ${
              hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-dark-blue mb-4">Drive Growth</h3>
            <p className="text-gray-600">
              Use insights to drive product improvements and grow your customer base.
            </p>
          </div>
          <div
            className={`text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-700 ease-in-out ${
              hasLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-dark-blue mb-4">Enhance Experience</h3>
            <p className="text-gray-600">
              Deliver better user experiences based on real-time feedback from your customers.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-dark-blue text-white py-10 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FeedbackFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
