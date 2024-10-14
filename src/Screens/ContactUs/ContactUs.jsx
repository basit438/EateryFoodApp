import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-6">Get in Touch with Us</h2>
      <p className="text-gray-600 text-center mb-8">
        If you have any questions, concerns, or feedback, please fill out the form below, and we will get back to you as soon as possible.
      </p>

      <div className="flex flex-col lg:flex-row mb-10">
        <div className="flex-1 mb-6 lg:mr-4">
          <h3 className="text-2xl font-semibold text-red-600 mb-2">Our Location</h3>
          <p className="text-gray-700">99 S.t Jomblo Park, Pekanbaru 28292, Indonesia</p>
        </div>
        <div className="flex-1 mb-6 lg:ml-4">
          <h3 className="text-2xl font-semibold text-red-600 mb-2">Contact Details</h3>
          <p className="text-gray-700">Phone: (+62) 81 414 257 9980</p>
          <p className="text-gray-700">Email: info@yourdomain.com</p>
        </div>
        <div className="flex-1 mb-6 lg:ml-4">
  <h3 className="text-2xl font-semibold text-red-600 mb-2">Discounts and Promotions</h3>
  <p className="text-gray-700">Receive exclusive discounts and promotions tailored just for you!</p>

</div>

      </div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-red-600 mb-4">Contact Form</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="border border-gray-300 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
