"use client";

import { useState, useEffect } from "react";
import Conversation from "./components/Conversation";

export default function Home() {
  // Agent IDs for each character
  const agentIds = {
    bobby: "gWpp1eYFZ7H3iW92JcNb", // Real ID provided by user
    julie: "TXoQbtGdzFVgZs5aAJaS", // Replace with actual ID when available
    simone: "4C9vQNRwyr6HWLibHzuU", // Replace with actual ID when available
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></div>
            <h1
              className="text-2xl font-bold"
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
              }}
            >
              Imaginary Friends
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#about"
                  className="text-purple-700 hover:text-purple-500 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#family"
                  className="text-purple-700 hover:text-purple-500 transition"
                >
                  Meet the Family
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-purple-700 hover:text-purple-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-16 text-center">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full opacity-20"
            style={{ animation: "float 8s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute bottom-0 left-10 w-48 h-48 bg-pink-300 rounded-full opacity-20"
            style={{ animation: "float 6s ease-in-out infinite" }}
          ></div>
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20"
            style={{ animation: "float 4s ease-in-out infinite" }}
          ></div>

          <h2
            className="text-5xl font-bold mb-6 z-10"
            style={{
              color: "transparent",
              backgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
            }}
          >
            Meet Your Spiritual AI Family
          </h2>
          <p className="text-lg text-purple-800 mb-8 max-w-2xl z-10">
            Connect with Bobby, Julie, and Simone — your digital companions for
            mindfulness, spiritual growth, and emotional wellbeing.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:opacity-90 transition shadow-lg z-10">
            Start Your Journey
          </button>
        </section>

        {/* Family Section with Conversation Components */}
        <section id="family" className="py-16">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{
              color: "transparent",
              backgroundClip: "text",
              backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
            }}
          >
            Your Imaginary Family
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>

            <p className="text-center text-purple-700 text-lg mb-12">
              Click on any character to start a conversation!
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-8 relative z-10">
              {/* Bobby with Conversation Integration */}
              <Conversation
                agentId={agentIds.bobby}
                characterName="Bobby"
                avatarSrc="/images/bobby-avatar.svg"
              />

              {/* Julie with Conversation Integration */}
              <Conversation
                agentId={agentIds.julie}
                characterName="Julie"
                avatarSrc="/images/julie-avatar.svg"
              />

              {/* Simone with Conversation Integration */}
              <Conversation
                agentId={agentIds.simone}
                characterName="Simone"
                avatarSrc="/images/simone-avatar.svg"
              />
            </div>

            <p className="text-center text-purple-700 italic mt-12">
              &ldquo;We&apos;re here to accompany you on your journey to inner
              peace and spiritual growth.&rdquo;
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-200 rounded-full opacity-30"></div>

          <div className="relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
              }}
            >
              About Our AI Family
            </h2>
            <p className="text-lg text-purple-900 mb-4">
              Our AI companions were created to provide spiritual guidance,
              emotional support, and mindful conversation in today&apos;s busy
              digital world.
            </p>
            <p className="text-lg text-purple-900 mb-4">
              Each AI has a unique personality and purpose, designed to help you
              on different aspects of your spiritual journey.
            </p>
            <p className="text-lg text-purple-900 mb-4">
              Whether you&apos;re looking for philosophical discussions with
              Bobby, mindfulness practices with Julie, or intuitive guidance
              with Simone, our AI family is here for you.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-8 border-t border-purple-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                <span
                  className="font-bold"
                  style={{
                    color: "transparent",
                    backgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(to right, #9333ea, #ec4899)",
                  }}
                >
                  Imaginary Friends
                </span>
              </div>
              <p className="text-sm text-purple-700 mt-2">
                © 2025 Imaginary Friends. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-purple-600 hover:text-purple-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-purple-600 hover:text-purple-500">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
