import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
    return(
        <div className="min-h-screen  bg-gradient-to-br from-white to-blue-300 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-14 w-full max-w-5xl px-6">

                <div className="mb-12 md:mb-0">
                    <img
                      src="/profile1.png"
                      alt="Nara Yun"
                      className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white"
                    />
                </div>
                
                <div className="text-white max-w-xl text-center">
                    <h1 className="text-center text-4xl font-bold mb-4 text-blue-800">Hi, I'm Nara Yun!</h1>
                    <p className="text-lg text-black mb-4">
                        I'm a software engineering student at McGill University.
                    </p>
                    <div className="flex justify-center space-x-6 mt-6">
                    <a
                        href="https://www.linkedin.com/in/nara-yun/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-black hover:text-black"
                    >
                        <Linkedin size={24} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/NaraYun0614"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-black hover:text-black"
                    >
                        <Github size={24} />
                        <span>GitHub</span>
                    </a>

                    <a
                        title="Email me"
                        href="mailto:nara.yun@mail.mcgill.ca"
                        className="flex items-center space-x-2 text-black hover:text-black"
                    >
                        <Mail size={24} />
                        <span>Email</span>
                    </a>
                    </div>
                    <a
                        href="https://cal.com/nara-yun-vg4zu3/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-white border border-gray-300 text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
                    >
                        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="font-medium">Let’s chat</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;