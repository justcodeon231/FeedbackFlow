// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-royal-blue text-white py-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo in Royal Blue */}
        <h1 className="text-2xl font-semibold text-[#4169e1]">FeedbackFlow</h1> {/* Royal Blue */}

        <ul className="flex space-x-7">
          <li className="py-2"> {/* Added extra padding to top of nav items */}
            <Link href="/" className="hover:text-vibrant-green transition-all">
              Home
            </Link>
          </li>
          <li className="py-2"> {/* Added extra padding to top of nav items */}
            <Link href="/about" className="hover:text-vibrant-green transition-all">
              About
            </Link>
          </li>
          <li className="py-2"> {/* Added extra padding to top of nav items */}
            <Link href="/contact" className="hover:text-vibrant-green transition-all">
              Contact
            </Link>
          </li>
          <li>
            <button className="px-6 py-2 bg-vibrant-green text-dark-blue rounded-lg shadow-md hover:bg-dark-blue hover:text-white transition-all">
              Join Waitlist
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
