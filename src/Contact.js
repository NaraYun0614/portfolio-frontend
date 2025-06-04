import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-white px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Contact Me</h2>
      <p className="text-gray-700 mb-6 text-center">Feel free to reach out via email or LinkedIn!</p>
      <form className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
        <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center">
</div>

    </div>
  );
}

export default Contact;
