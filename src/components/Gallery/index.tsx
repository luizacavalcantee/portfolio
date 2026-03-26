"use client";

import Image from "next/image";
import image1 from "@/assets/image-1.png";
import image2 from "@/assets/image-2.png";
import image3 from "@/assets/image-3.png";
import image4 from "@/assets/image-4.png";
import image5 from "@/assets/image-5.png";
import image6 from "@/assets/image-6.png";
import image7 from "@/assets/image-7.png";
import image8 from "@/assets/image-8.png";
import profilePic from "@/assets/profile-pic.png";

const galleryItems = [
  { id: 1, src: image1, alt: "Gallery image 1" },
  { id: 2, src: profilePic, alt: "Profile picture" },
  { id: 3, src: image2, alt: "Gallery image 2" },
  { id: 4, src: image3, alt: "Gallery image 3" },
  { id: 5, src: image4, alt: "Gallery image 4" },
  { id: 6, src: image5, alt: "Gallery image 5" },
  { id: 7, src: image6, alt: "Gallery image 6" },
  { id: 8, src: image7, alt: "Gallery image 7" },
  { id: 9, src: image8, alt: "Gallery image 8" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 lg:px-12 pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-1.5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="img-hover relative bg-zinc-900 overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 33vw, 320px"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-[0.2em] uppercase text-white border border-white/50 px-4 py-2">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
