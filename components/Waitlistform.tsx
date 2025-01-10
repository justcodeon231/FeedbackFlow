import { useState } from 'react';

const WaitlistForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to backend)
    alert(`Thanks for joining the waitlist, ${email}!`);
    onClose(); // Close the modal after form submission
  };

  if (!isOpen) return null; // If the modal is closed, don't render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-royal-blue p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-white hover:text-vibrant-green"
        >
          &times;
        </button>

        <h2 className="text-4xl font-bold text-white text-center mb-6">
          You're One Step Away from Something Big!
        </h2>
        <p className="text-lg text-white text-center mb-8">
          Join the waitlist and be the first to experience the future of feedback!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-white">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-2 bg-transparent border-2 border-white text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-green transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-vibrant-green text-dark-blue font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-dark-blue hover:text-white"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
