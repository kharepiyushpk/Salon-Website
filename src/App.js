import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu, X } from "lucide-react";

function Home() {
  return (
    <div className="font-sans">
      <header 
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center header-animation"
        style={{ 
          backgroundImage: "url('/background.jpg')", 
          animation: "zoomIn 2s ease-out" 
        }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to Our Salon</h2>
          <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-1s">Beauty & Style Redefined</p>
          <Link 
            to="/contact" 
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 button-hover">
            Book Appointment
          </Link>
        </div>
      </header>

      <section id="about" className="py-20 px-4 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
    <p className="text-lg mb-12 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
      Welcome to <span className="font-semibold text-pink-500">Glamour Salon</span>, where beauty meets expertise. 
      Our salon is a sanctuary of style and relaxation offering professional services 
      by expert stylists, beauticians, and skincare specialists.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-pink-50 animate__animated animate__zoomIn">
        <img src="https://cdn-icons-png.flaticon.com/512/685/685686.png" alt="Hair Styling" className="w-20 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Hair Styling</h3>
        <p className="text-gray-700">Modern cuts and styling tailored to you by top stylists using premium products.</p>
      </div>

      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-pink-50 animate__animated animate__zoomIn animate__delay-1s">
        <img src="https://cdn-icons-png.flaticon.com/512/1112/1112772.png" alt="Makeup" className="w-20 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Makeup</h3>
        <p className="text-gray-700">Look stunning for every occasion with our premium makeup and bridal services.</p>
      </div>

      <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-pink-50 animate__animated animate__zoomIn animate__delay-2s">
        <img src="https://cdn-icons-png.flaticon.com/512/2302/2302756.png" alt="Spa & Facial" className="w-20 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Spa & Facials</h3>
        <p className="text-gray-700">Rejuvenate your skin and mind with our relaxing facials and body spa treatments.</p>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" className="py-20 px-4 bg-gray-100 text-gray-800">
  <div clas
    sName="max-w-6xl mx-auto text-center">
<h2 className="text-3xl font-bold text-center mb-8">What Our Client Says?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Aanya Sharma",
          feedback: "The team is amazing! I’ve never felt so pampered. My bridal look was beyond perfect!",
          img: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
          name: "Meera Verma",
          feedback: "Clean, modern, and so relaxing! I love coming here every month for my facial.",
          img: "https://randomuser.me/api/portraits/women/79.jpg"
        },
        {
          name: "Riya Kapoor",
          feedback: "They truly understand your style. The hair color and cut were spot on.",
          img: "https://randomuser.me/api/portraits/women/43.jpg"
        }
      ].map((client, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-lg animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.5}s`, animationFillMode: 'both' }}>
          <img src={client.img} alt={client.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-500" />
          <p className="italic text-gray-700 mb-4">"{client.feedback}"</p>
          <h4 className="font-semibold text-pink-600">{client.name}</h4>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="gallery" className="py-20 px-4 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-center mb-8">Our Work Gallery</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg",
        "/6.jpg"
      ].map((img, idx) => (
        <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 animate__animated animate__zoomIn">
          <img src={img} alt="Gallery" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  </div>
</section>


<section id="services" className="py-20 px-4 bg-gray-50 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <p className="text-lg mb-12 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
      We offer a wide range of beauty services tailored to meet your needs and exceed your expectations.
      From hair styling to relaxing facials, we’ve got you covered.
    </p>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Hair Styling",
          description: "Modern cuts and styling tailored to you by top stylists using premium products.",
          icon: "https://cdn-icons-png.flaticon.com/512/685/685686.png"
        },
        {
          name: "Hair Transplant",
          description: "Modern cuts and styling tailored to you by top stylists using premium products.",
          icon: "https://cdn-icons-png.flaticon.com/512/685/685686.png"
        },
        {
          name: "Skin Treatment",
          description: "Modern cuts and styling tailored to you by top stylists using premium products.",
          icon: "https://cdn-icons-png.flaticon.com/512/685/685686.png"
        },
        {
          name: "Hair Extension Wig",
          description: "Modern cuts and styling tailored to you by top stylists using premium products.",
          icon: "https://cdn-icons-png.flaticon.com/512/685/685686.png"
        },
        {
          name: "Makeup",
          description: "Look stunning for every occasion with our premium makeup and bridal services.",
          icon: "https://cdn-icons-png.flaticon.com/512/1112/1112772.png"
        },
        {
          name: "Spa & Facials",
          description: "Rejuvenate your skin and mind with our relaxing facials and body spa treatments.",
          icon: "https://cdn-icons-png.flaticon.com/512/2302/2302756.png"
        }
      ].map((service, index) => (
        <div
  key={index}
  className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white"
  data-aos="fade-up"
  data-aos-delay={`${index * 200}`}
>
  <img src={service.icon} alt={service.name} className="w-20 mx-auto mb-4" />
  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
  <p className="text-gray-700">{service.description}</p>
</div>
      ))}
    </div>
  </div>
</section>


<section id="pricing" className="py-20 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
  <div className="max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-center mb-8">Our Plans</h2>
    <p className="text-lg mb-16 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
      Choose the perfect plan for your beauty needs. We offer flexible options to suit all preferences.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Basic",
          price: "$49",
          features: [
            "Haircut & Styling",
            "Basic Facial",
            "Nail Care",
            "Free Consultation"
          ],
          button: "Book Now"
        },
        {
          name: "Premium",
          price: "$99",
          features: [
            "Haircut & Styling",
            "Advanced Facial",
            "Manicure & Pedicure",
            "Free Consultation",
            "Bridal Makeup"
          ],
          button: "Book Now"
        },
        {
          name: "Deluxe",
          price: "$149",
          features: [
            "Haircut & Styling",
            "Luxury Facial",
            "Manicure & Pedicure",
            "Bridal Makeup",
            "Massage Therapy",
            "Free Consultation"
          ],
          button: "Book Now"
        }
      ].map((plan, index) => (
        <div
  key={index}
  className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300"
  data-aos="zoom-in"
  data-aos-delay={`${index * 100}`}
>
<h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
<p className="text-4xl font-bold mb-6">{plan.price}</p>
          <ul className="text-lg mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block text-pink-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-pink-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-pink-700 transition duration-300">
            {plan.button}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded"></textarea>
        <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">Send Message</button>
      </form>
    </section>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky-navbar fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition duration-300 px-6 py-4 flex justify-between items-center`}
    >
      <Link to="/" className="text-xl font-bold text-pink-600">
        Vikash Family Salon
      </Link>

      {/* Hamburger menu (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-600">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40`}
      >
        <div className="flex flex-col md:flex-row md:items-center text-center md:text-left">
          <a
            href="#testimonials"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#gallery"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#about"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#pricing"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <Link
            to="/contact"
            className="py-2 px-4 text-gray-700 hover:text-pink-500 block"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}




function Footer() {
  return (
    
    <footer className="bg-gray-900 text-gray-100 py-10 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
    <div>
      <h3 className="text-xl font-bold mb-2"> Vikash Family Salon</h3>
      <p>Your beauty is our duty. Visit us and feel the transformation.</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
      <ul>
        <li><a href="#about" className="hover:text-pink-400">About</a></li>
        <li><a href="#services" className="hover:text-pink-400">Services</a></li>
        <li><a href="#testimonials" className="hover:text-pink-400">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <p>📍 123 Salon Street, Narmadapuram</p>
      <p>📞 +91 9999999999</p>
      <p>✉️ hello@vikassalon.in</p>
    </div>
  </div>
  <p className="text-center mt-6 text-sm text-gray-500">&copy; 2025 Vikash Family Salon. All rights reserved.</p>
</footer>

  );
}

export default function SalonWebsite() {
  return (
    <Router>
      <div className="pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="bg-pink-50 py-16 px-4 text-center">
  <div className="max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInUp">Subscribe to Our Newsletter</h2>
    <p className="text-gray-700 mb-6">Get beauty tips, special offers, and updates straight to your inbox.</p>
    <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

        <Footer />
        <a
  href="https://wa.me/919516467095"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 z-50"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.84 11.84 0 0012 0C5.373 0 0 5.373 0 12a11.97 11.97 0 001.813 6.308L0 24l5.905-1.78A11.85 11.85 0 0012 24c6.627 0 12-5.373 12-12a11.84 11.84 0 00-3.48-8.52zM12 21.75a9.75 9.75 0 01-5.084-1.413l-.363-.22-3.506 1.058 1.126-3.389-.238-.376A9.75 9.75 0 1121.75 12c0 5.385-4.365 9.75-9.75 9.75zm5.361-7.207c-.294-.147-1.742-.859-2.013-.956-.27-.098-.467-.147-.664.147-.197.294-.76.956-.931 1.153-.17.196-.342.22-.636.073-.294-.147-1.241-.458-2.364-1.46-.874-.778-1.465-1.739-1.636-2.033-.17-.294-.019-.453.128-.6.131-.13.294-.342.441-.513.147-.17.196-.294.294-.489.098-.196.049-.367-.024-.513-.073-.147-.664-1.601-.911-2.19-.24-.577-.483-.5-.664-.51a1.202 1.202 0 00-.49.073c-.147.073-.392.196-.588.392-.196.196-.77.754-.77 1.838s.79 2.133.9 2.282c.11.147 1.556 2.367 3.772 3.32.527.227.938.362 1.258.464.528.168 1.007.145 1.386.088.423-.063 1.293-.528 1.476-1.037.182-.509.182-.944.128-1.037-.056-.098-.227-.154-.47-.271z" />
  </svg>
</a>

      </div>
    </Router>
  );
}
