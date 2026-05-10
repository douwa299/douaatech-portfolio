import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("EMAILJS ERROR:", error);
        alert("Oops! Something went wrong.");
      });
  };

  return (
  <section
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center py-16 px-4"
  >
    <RevealOnScroll>
     
      {/* SECTION TITLE */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r
       from-blue-500 to-cyan-400 bg-clip-text
        text-transparent text-center">
        Get In Touch
      </h2>

      {/* CONTENT */}
      <div className="text-xl max-w-6xl w-full grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          
          <p className="text-white/70 leading-relaxed text-center">
            Feel free to contact me for internship opportunities,
            collaborations, or any project discussions.
          </p>

          <div className="space-y-5">

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>

              <div>
                <p className="text-sm text-white/50">Email</p>
                <p className="text-white">
                  douaaberrahmo@gmail.com
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <FaPhone className="text-blue-400 text-xl" />
              </div>

              <div>
                <p className="text-sm text-white/50">Phone</p>
                <p className="text-white">
                  +212 6 45 39 39 44
                </p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 pt-4">

            <a
              href="https://github.com/douwa299"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition hover:-translate-y-1"
            >
              <FaGithub className="text-2xl text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/douaa-berrahmo-73ba6334b/"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition hover:-translate-y-1"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
 <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name..."
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Example@gmail.com..."
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
                  transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:cursor-pointer"
              >
                Send A Message
              </button>
            </form>           

        </div>

      </div>
    </RevealOnScroll>
   <footer className="fixed bottom-0 left-0 w-full border-t border-white/10 py-4 text-center bg-black/30 backdrop-blur-md z-50">
  <p className="text-sm text-white/50">
    © 2026 Douaa Berrahmo. All rights reserved.
  </p>
</footer>
  </section>
);
};




