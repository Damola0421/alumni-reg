"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img from "@/assets/img.jpg";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUsers, FaBriefcase, FaRegCalendarCheck, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


const images = [
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
];

export default function Gallery() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-6 text-gray-800">Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              layout="fill" 
              objectFit="cover"
              className="hover:opacity-80 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
