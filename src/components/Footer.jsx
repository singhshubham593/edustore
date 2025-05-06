import React from 'react'
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-6 lg:py-4 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">StudentHub</h2>
          <p className="text-sm">
            Helping students prepare for exams and placements with curated resources and question papers.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-300"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} StudentHub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
