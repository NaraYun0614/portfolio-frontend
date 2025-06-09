import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-5 items-center gap-8 animate-fade-in">

        <div className="flex justify-center md:col-span-2">
          <img
            src="/aboutMe.png"
            alt="Nara Yun"
            className="w-[300px] h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center md:text-left space-y-6 md:col-span-3">
          <h1 className="text-center text-4xl font-bold text-indigo-800">About Me</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            I'm a third-year <span className="font-semibold text-indigo-600">Software Engineering student</span> at McGill University with a minor in Artificial Intelligence. I love turning complex ideas into real, usable applications.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            I've worked on projects like a full-stack web app and an AI-powered chatbot, which reflect my interest in backend development and creative problem solving. I also worked as a <span className="font-semibold text-indigo-600">full-stack intern at Inbiznet</span>, contributing to both frontend and backend features while learning from senior engineers.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            I'm currently conducting research on Android login testing under Professor Lili Wei, where I'm learning to use <span className="font-semibold text-indigo-600">dynamic analysis tools</span> to evaluate login processes in mobile apps. I'm always curious, eager to improve, and excited to collaborate with others who love building cool things.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;