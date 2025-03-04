import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const googleMapRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Check if script already exists to prevent multiple loads
    if (document.querySelector('script[src*="maps.googleapis.com/maps/api"]')) {
      setMapLoaded(true);
      return;
    }

    // Load Google Maps API script
    const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    scriptRef.current = script;

    // Define the callback function
    window.initMap = () => {
      setMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // Clean up
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
      // Remove global callback
      delete (window as any).initMap;
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && googleMapRef.current) {
      renderMap();
    }
  }, [mapLoaded]);

  const renderMap = () => {
    if (!googleMapRef.current || !window.google) return;

    // San Francisco coordinates
    const Caldwell = { lat: 40.8390, lng: 74.2750 };
    
    const map = new window.google.maps.Map(googleMapRef.current, {
      center: Caldwell,
      zoom: 12,
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [{ "color": "#f5f5f5" }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{ "color": "#c9c9c9" }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#9e9e9e" }]
        }
      ]
    });
    
    new window.google.maps.Marker({
      position: Caldwell,
      map: map,
      title: "Caldwell"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Location',
      details: 'Caldwell, NJ, USA'
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Phone',
      details: '+1 (201) 954-0439'
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Email',
      details: 'bivekvai.k123@gmail.com'
    }
  ];

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to contact me using the form below or through my contact information.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center"
          >
            <div className="flex justify-center mb-4">{info.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{info.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{info.details}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h2>
            
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="hidden md:block">
            <div 
              ref={googleMapRef}
              className="h-full w-full"
            >
              {!mapLoaded && (
                <div className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <p className="text-gray-500 dark:text-gray-400">Loading map...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add TypeScript interface for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default Contact;