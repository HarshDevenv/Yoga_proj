"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, User, MessageSquare } from "lucide-react";

const contactInfo = {
  address: "123 Yoga Street, Wellness District, City, State 12345",
  phone: "+1 (555) 123-4567",
  email: "info@yogastudio.com",
  hours: [
    "Monday - Friday: 6:00 AM - 9:00 PM",
    "Saturday: 7:00 AM - 7:00 PM",
    "Sunday: 8:00 AM - 6:00 PM"
  ]
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact-form" className="relative py-20 px-4 w-full min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-2">Let us Contact You</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or want to book a class? Fill out the form and our team will get back to you as soon as possible.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <form ref={formRef} className="space-y-5">
              {/* Name */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3">
                <User className="text-gray-400 mr-2" />
                <input type="text" placeholder="Enter Your Name*" className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-900 dark:text-white" required />
              </div>
              {/* Email */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3">
                <Mail className="text-gray-400 mr-2" />
                <input type="email" placeholder="Enter Your Email*" className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-900 dark:text-white" required />
              </div>
              {/* Phone */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3">
                <span className="flex items-center mr-2">
                  <img src="https://flagcdn.com/in.svg" alt="IN" className="w-6 h-4 mr-1 rounded-sm" />
                  <select className="bg-transparent outline-none text-gray-700 dark:text-white font-semibold">
                    <option value="91">+91</option>
                    {/* Add more country codes as needed */}
                  </select>
                </span>
                <input type="tel" placeholder="Enter phone number" className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-900 dark:text-white" required />
              </div>
              {/* City */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3">
                <MapPin className="text-gray-400 mr-2" />
                <input type="text" placeholder="Enter Your City*" className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-900 dark:text-white" required />
              </div>
              {/* Message */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3">
                <MessageSquare className="text-gray-400 mr-2" />
                <input type="text" placeholder="Enter Your Message (Optional)" className="flex-1 py-3 px-2 bg-transparent outline-none text-gray-900 dark:text-white" />
              </div>
              {/* Submit */}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-md text-lg mt-2 transition-colors duration-200 shadow-md">
                Submit & Get A Call Back
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex flex-col gap-6 justify-between"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Hours</h3>
                  <div className="space-y-1">
                    {contactInfo.hours.map((hour, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-56 shadow-xl mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yoga Studio Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 