// Replace default import with namespace import
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import OurWork from './pages/OurWork';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';



function Navbar() {
  return (

    <section className="relative bg-[#f1f5f9] pt-4">
    <nav className="sticky top-0 z-10 mx-auto max-w-[980px] bg-white/80 backdrop-blur-md rounded-full shadow-sm h-20 mt px-6 py-3">
  <div className="flex items-center justify-between h-full">
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2">
      <img
        src="https://framerusercontent.com/images/HecNAdkFGRmzjMt8R8NMvOgaIM.png"
        alt="Mimic Design"
        className="h-9 w-auto object-contain"
      />
    </Link>

    {/* Nav Links */}
    <div className="hidden md:flex gap-4 text-[17px] text-[#6b7280]">
      <Link to="/#why-us" className="hover:text-black">Why Us?</Link>
      <Link to="/#our-work" className="hover:text-black">Our Work</Link>
      <Link to="/#pricing" className="hover:text-black">Pricing</Link>
      <Link to="/#testimonial" className="hover:text-black">Testimonials</Link>
      <Link to="/#faq" className="hover:text-black">FAQs</Link>
    </div>

    {/* CTA Button */}
    {<button className="relative inline-block px-6 py-3 rounded-[54.69px] border border-white/5 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
       <span className="block text-center font-bold text-[16px] tracking-[-0.02em] bg-[radial-gradient(50%_50%_at_50%_50%,_#e0e7ff_0%,_#ffffff_100%)] bg-clip-text text-transparent font-[Manrope,sans-serif]">
    Book a Free Intro Call
        </span>
      </button>
/* <Link
      to="/call"
      className="px-4 py-2 font-bold text-sm rounded-full text-white bg-gradient-to-r from-indigo-500 to-indigo-700 shadow-md hover:brightness-110 transition"
    >
      Book a Free Intro Call
    </Link> */}
  </div>
</nav>
</section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#3b3892] to-[#3bbd95] text-white flex flex-col items-center py-10 mt-12">
      <div className="text-2xl font-bold mb-4 flex items-center gap-2">Mimic Design</div>
      <div className="mb-2">&copy; {new Date().getFullYear()} Mimic Design. All rights reserved.</div>
      <div className="flex gap-6">
        <a href="#" className="underline">Privacy</a>
        <a href="#" className="underline">Terms</a>
        <a href="#" className="underline">Careers</a>
      </div>
      {/* Contact form will be added here */}
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/process" element={<Process />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
