import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlblkov",
        "template_nf50qeo",
        form.current,
        "CdC2hq79LgPa7wJ-c"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
      e.target.reset(); // clear form after submit
  };
  return (
    <div className="min-h-screen bg-blue-950 p-6">
      <div className="max-w-3xl mx-auto space-y-10">
         

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">📬 Contact or Submit Document</h2>
          <p className="mb-4 text-gray-700">
            Use the form below to send a message or inform to upload a document .
          </p>

          <form
             ref={form} onSubmit={sendEmail} className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              name="filelink"
              placeholder="Paste Document Link (Google Drive, Dropbox, etc.)"
              className="w-full px-4 py-2 border rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-md"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
