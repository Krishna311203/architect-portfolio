export default function Footer() {
    return (
      <footer className="bg-black text-white py-16 px-8 md:px-16">
        {/* Large Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide uppercase mb-12 text-center">
          Brands Standout Since 2010
        </h2>
  
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Speak to Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Speak to Us</h3>
            <p className="text-gray-400">(08) 9471 7653</p>
            <p className="text-gray-400">hello@blaze.com</p>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <p className="text-gray-400">Twitter</p>
            <p className="text-gray-400">Instagram</p>
            <p className="text-gray-400">YouTube</p>
          </div>
  
          {/* Visit Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
            <p className="text-gray-400">New York</p>
            <p className="text-gray-400">240 Park Avenue South</p>
            <p className="text-gray-400">New York, NY 10003</p>
            <p className="text-gray-400">United States</p>
            <p className="text-gray-500 text-sm mt-2">Get Directions</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm text-center">
          <p>&copy; 2023</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    );
  }
  