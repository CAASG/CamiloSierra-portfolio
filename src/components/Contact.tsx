import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Do you have a project in mind? I'd love to hear about it! Contact me and let's talk about how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-violet-100 rounded-2xl">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">camilosierra860@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-violet-100 rounded-2xl">
                  <Phone className="w-6 h-6 text-violet-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone Number</h3>
                <p className="mt-1 text-gray-600">+57 304 524 1314</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-4 bg-violet-100 rounded-2xl">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="mt-1 text-gray-600">Bucaramanga, Colombia</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                <Send size={20} />
                <span>Send Mesagge</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}