 
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">📄 Submit a Document via GitHub</h2>
          <p className="mb-4 text-gray-700">
            If you want to contribute a document or content to this page, please fork the GitHub repository and open a Pull Request:
          </p>
          <a
            href="https://github.com/your-username/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://github.com/your-username/your-repo
          </a>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">📬 Contact or Submit Document</h2>
          <p className="mb-4 text-gray-700">
            Use the form below to send a message or upload a document directly.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submitted successfully (mockup). Replace with backend integration.");
            }}
            className="space-y-4"
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
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border rounded-md"
              rows="4"
            ></textarea>
            <input
              type="file"
              name="document"
              className="w-full"
            />
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
