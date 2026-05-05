import { RevealOnScroll } from "D:/MyPersonalPortoFolio/src/components/RevealOnScroll.jsx";

import { useState } from "react";

import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((result) => {
        alert("Message sent !");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-between  py-1"
    >
      <RevealOnScroll>
        <div className="px-4 w-150 py-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white
                 transition focus:outline-none focus:border-blue-500  focus:bg-blue-500/5"
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
                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white
                 transition focus:outline-none focus:border-blue-500  focus:bg-blue-500/5"
                placeholder="Example@gmail.com..."
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white
                 transition focus:outline-none focus:border-blue-500  focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 py-3 px-6 rouonded font-medium transition relative overflow-hidden overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:cursor-pointer"
            >
              Send A Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
};
