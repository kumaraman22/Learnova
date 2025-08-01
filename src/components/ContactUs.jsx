import React from 'react';
import contactImg from '../assets/contact.png'; // Replace with your image path
import {Link} from "react-scroll";


const ContactUs = () => {
  return (
    <div id="contact">
    <section className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      {/* Form Section */}
      <div className="order-2 md:order-1 md:w-2/4 w-full bg-white rounded-lg shadow-lg p-8 md:mr-8 mb-8 md:mb-0">
        <h2 className="text-4xl text-center font-semibold mb-6 text-brightGreen">Contact Us</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-lightText mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brightGreen"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-lightText mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brightGreen"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-lightText mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brightGreen"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-brightGreen text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Image Section */}
      <div className="order-1 md:order-2 md:w-2/4 w-full flex justify-center ">
        <img
          src={contactImg}
          alt="Contact eStudy"
          className="rounded-lg  max-h-[400px] object-cover"
        />
      </div>
    </section>
    </div>
  );
};

export default ContactUs;
