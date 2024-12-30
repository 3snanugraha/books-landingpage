"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "H. Ahmad Supriyadi",
      role: "Kepala Desa",
      text: "Alhamdulillah, koleksi bukunya sangat lengkap dan berkualitas. Sekarang warga desa kami jadi lebih semangat membaca. Pelayanannya juga sangat profesional!",
      image: "/avatar.svg",
    },
    {
      name: "Ibu Sri Wahyuni",
      role: "Ketua PKK Desa",
      text: "Paket bukunya sangat sesuai dengan kebutuhan perpustakaan desa kami. Anak-anak sangat senang dengan koleksi buku cerita dan pendidikannya.",
      image: "/avatar.svg",
    },
    {
      name: "Bapak Hendra Kusuma",
      role: "Sekretaris Desa",
      text: "Tim sangat membantu dalam proses RAB dan pemilihan buku. Pengiriman cepat dan buku tiba dalam kondisi sempurna. Sangat recommended!",
      image: "/avatar.svg",
    },
    {
      name: "Ibu Ratna Dewi",
      role: "Pengelola Perpustakaan Desa",
      text: "Buku-bukunya berkualitas tinggi dan sesuai dengan kebutuhan literasi desa. Proses pengadaan sangat transparan dan profesional.",
      image: "/avatar.svg",
    },
    {
      name: "H. Bambang Sutrisno",
      role: "Kepala Desa",
      text: "Bantuan penyusunan RAB sangat membantu kami. Koleksi bukunya juga lengkap, dari buku anak sampai pertanian dan UMKM.",
      image: "/avatar.svg",
    },
    {
      name: "Ibu Nurhayati",
      role: "Ketua Tim Penggerak PKK Desa",
      text: "Respon cepat dan pelayanan memuaskan. Buku-bukunya menjadi favorit ibu-ibu PKK untuk program literasi keluarga.",
      image: "/avatar.svg",
    },
    {
      name: "Bapak Darmawan",
      role: "Kepala Desa",
      text: "Sangat puas dengan layanan konsultasi dan pendampingan. Koleksi buku yang disediakan sangat beragam dan bermanfaat untuk warga desa.",
      image: "/avatar.svg",
    },
    {
      name: "Ibu Maryam",
      role: "Koordinator Perpustakaan Desa",
      text: "Proses pengadaan buku sangat mudah dan transparan. Kualitas buku terjamin dan sesuai dengan anggaran yang kami miliki.",
      image: "/avatar.svg",
    },
    {
      name: "H. Sulaiman",
      role: "Kepala Desa",
      text: "Tim sangat kooperatif dalam memberikan solusi untuk pengembangan perpustakaan desa kami. Koleksi buku pertanian sangat membantu petani lokal.",
      image: "/avatar.svg",
    },
    {
      name: "Ibu Kartika Sari",
      role: "Ketua PKK Desa",
      text: "Buku-buku UMKM dan keterampilan sangat membantu program pemberdayaan masyarakat desa kami. Pelayanan sangat memuaskan!",
      image: "/avatar.svg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - (isMobile ? 1 : 3)
          ? 0
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [isMobile, testimonials.length]);

  return (
    <section className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
          Apa Kata Mereka?
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (isMobile ? 100 : 100 / 3)
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-full md:w-1/3 px-4">
                <div className="bg-gray-800 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 border-2 border-amber-400/20 hover:border-amber-400">
                  <div className="space-y-4">
                    <p className="text-gray-300 bg-gray-700/30 p-4 rounded-lg italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-amber-400/50"
                      />
                      <div>
                        <p className="font-bold text-amber-400">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(testimonials.length - 2)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-amber-400 w-4"
                  : "bg-gray-600 hover:bg-amber-400/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
