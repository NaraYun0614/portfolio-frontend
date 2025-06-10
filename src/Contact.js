import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', content: '' }); // reset
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-white px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Contact Me</h2>
      <p className="text-gray-700 mb-6 text-center">Feel free to reach out via email or LinkedIn!</p>
      
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />
        <textarea
          name="content"
          placeholder="Your Message"
          rows="4"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        ></textarea>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}

export default Contact;
