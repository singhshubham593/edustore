import React from 'react'
import { Briefcase, BookOpen, Users } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-20 px-6 md:px-24" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            Empowering students with academic resources and placement preparation tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4 text-blue-600">
              <BookOpen className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Previous Year Papers</h3>
            <p className="text-gray-700 text-center">
              Access a rich repository of previous university question papers to aid your exam preparation.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4 text-blue-600">
              <Briefcase className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Placement Preparation</h3>
            <p className="text-gray-700 text-center">
              Get subject-wise interview questions tailored for placement preparation and crack your dream job.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 transition-transform transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-4 text-blue-600">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Student-Centered Design</h3>
            <p className="text-gray-700 text-center">
              Our platform is built for students, keeping their needs and success at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
