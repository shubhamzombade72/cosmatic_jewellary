export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-400 to-stone-600 mb-4 tracking-widest">
            LUMINOUS
          </h3>
          <p className="text-gray-400">Defining the future of skincare. Advanced formulas, sustainable beauty, and radiant results.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Discover</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Face Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Body Rituals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sets & Gifts</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Concierge</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Skincare Quiz</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Join the Inner Circle</h4>
          <p className="text-gray-400 mb-4">Receive early access to new launches and exclusive beauty insights.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-stone-500" />
            <button className="bg-stone-600 text-white px-4 py-2 rounded-lg hover:bg-stone-500 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} LUMINOUS. All rights reserved.</p>
      </div>
    </footer>
  );
}
