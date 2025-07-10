import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ success: false, message: 'Please fill all required fields' });
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormStatus({ success: true, message: 'Thank you! Your message has been sent.' });
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    
    // Reset form status after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for reservations, questions, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 text-2xl mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-2">
                    123 Gourmet Street, Foodie District<br />
                    Culinary City, CC 12345<br />
                    Near Central Park, Opposite City Mall
                  </p>
                  <div className="mt-4 space-y-2">
                    <a 
                      href="https://maps.google.com?q=123+Gourmet+Street+Culinary+City" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span>Get Directions</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241647!3d40.74844047138911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="rounded-md"
                  title="Restaurant Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <FaPhone className="text-blue-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                    <div className="space-y-2">
                      <a href="tel:+11234567890" className="block text-gray-600 hover:text-blue-600">
                        +91 6207454453
                      </a>
                      <a href="tel:+11234567891" className="block text-gray-600 hover:text-blue-600">
                        +91 6203498754 (Delivery Boy)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <FaEnvelope className="text-green-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                    <a href="mailto:info@gourmetrestaurant.com" className="text-gray-600 hover:text-green-600">
                      arpitkumark2@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <FaClock className="text-yellow-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 10 AM - 10 PM</p>
                      <p>Saturday - Sunday: 9 AM - 11 PM</p>
                      <p className="text-red-500">Closed on National Holidays</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <FaWhatsapp className="text-green-400 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
                    <a 
                      href="https://wa.me/11234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                    >
                      Message Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            {formStatus && (
              <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Reservation">Reservation</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Business Inquiry">Business Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/reservations"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md text-center transition duration-300"
              >
                Book a Table
              </a>
              <a
                href="/delivery"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md text-center transition duration-300"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;