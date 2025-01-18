import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Heart
} from 'lucide-react';

const Rotractcontact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-red-600 to-red-400">
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("nnn.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <motion.div
          className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
          initial={{ opacity: 6, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg/30 p-8  backdrop-sm  border-white/20 max-w-3xl">
            <motion.h1
              className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-100 to-white mb-6 font-serif drop-shadow-xl"
              initial={{ opacity: 2, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-2xl font-bold text-white max-w-2xl font-serif leading-relaxed"
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Connect with the Rotaract Club of University of Kelaniya - Where Service Meets Excellence
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-32 relative z-10 pb-12">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gradient-to-br from-red-200 via-red-100 to-white p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-red-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-4 font-serif">Visit Us</h3>
            <p className="text-lg text-red-700 font-serif">University of Kelaniya,</p>
            <p className="text-lg text-red-700 font-serif">Dalugama, Kelaniya,</p>
            <p className="text-lg text-red-700 font-serif">Sri Lanka</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-bl from-red-200 via-red-100 to-white p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-red-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-bl from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-4 font-serif">Call Us</h3>
            <p className="text-lg text-red-700 font-serif">Phone: +94 11 2903 903</p>
            <p className="text-lg text-red-700 font-serif">Mobile: +94 71 234 5678</p>
            <p className="text-lg text-red-700 font-serif">Fax: +94 11 2903 904</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-tr from-red-200 via-red-100 to-white p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-red-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-tr from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-red-900 mb-4 font-serif">Email Us</h3>
            <p className="text-lg text-red-700 font-serif">rotaract@kln.ac.lk</p>
            <p className="text-lg text-red-700 font-serif">info@rotaractkln.org</p>
            <p className="text-lg text-red-700 font-serif">Monday - Friday: 9AM - 5PM</p>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-red-200 via-red-50 to-red-200 rounded-xl shadow-2xl p-12 text-center border border-red-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-red-900 mb-12 font-serif">Connect With Us</h2>
          <div className="flex justify-center gap-8">
            {[
              { icon: Facebook, link: "#", color: "bg-gradient-to-br from-red-500 to-red-600" },
              { icon: Instagram, link: "#", color: "bg-gradient-to-br from-red-500 to-red-600" },
              { icon: Linkedin, link: "#", color: "bg-gradient-to-br from-red-500 to-red-600" },
              { icon: Globe, link: "#", color: "bg-gradient-to-br from-red-500 to-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className={`${social.color} p-6 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                whileHover={{ y: -5 }}
              >
                <social.icon className="h-8 w-8 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-red-200 via-red-50 to-red-200 rounded-xl shadow-2xl p-8 border border-red-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-red-900 mb-8 font-serif">Find Us Here</h2>
          <div className="h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467827135!2d79.91381491477266!3d6.967583994963223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2576f21e2b6a3%3A0x4c63393dd5f93280!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1645593900986!5m2!1sen!2slk"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rotractcontact;