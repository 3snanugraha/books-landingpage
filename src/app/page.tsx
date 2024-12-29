"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7); // Add 7 days from now
    return {
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const packages = [
    {
      originalPrice: "7.5 Juta",
      price: "5 Juta",
      books: "150+ Buku",
      suitable: "Desa Kecil",
      discount: "33%",
    },
    {
      originalPrice: "15 Juta",
      price: "10 Juta",
      books: "300+ Buku",
      suitable: "Desa Berkembang",
      discount: "33%",
    },
    {
      originalPrice: "22.5 Juta",
      price: "15 Juta",
      books: "450+ Buku",
      suitable: "Desa Maju",
      discount: "33%",
    },
    {
      originalPrice: "30 Juta",
      price: "20 Juta",
      books: "600+ Buku",
      suitable: "Desa Mandiri",
      discount: "33%",
    },
    {
      originalPrice: "45 Juta",
      price: "30 Juta",
      books: "900+ Buku",
      suitable: "Desa Metropolitan",
      discount: "33%",
    },
  ];

  return (
    <>
      <Head>
        <title>Paket Buku Perpustakaan Desa | Program Dana Desa 2024</title>
        <meta
          name="description"
          content="Dapatkan paket buku perpustakaan desa berkualitas untuk Program Dana Desa 2024. Tersedia 5 paket mulai dari 5-30 Juta dengan koleksi 150-900+ buku."
        />
        <meta
          name="keywords"
          content="perpustakaan desa, dana desa, buku perpustakaan, paket buku, kemendes pdtt, uu desa"
        />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Hero Section */}
            <div className="py-16 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-gray-900 px-4 py-1 rounded-full font-bold animate-bounce mt-12">
                🎉 Program Terbaru!
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 mt-6 relative">
                <span className="relative inline-block">
                  Paket Buku Perpustakaan Desa
                  <div className="absolute -bottom-2 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300"></div>
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 block mt-4 animate-pulse">
                  Program Dana Desa
                </span>
              </h1>
              <div className="relative group">
                <Image
                  src="/perpusdesa.jpg"
                  alt="Books Packet"
                  width={500}
                  height={300}
                  priority
                  className="mx-auto mb-8 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-amber-400/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span
                    className="text-amber-400 font-bold cursor-pointer hover:underline"
                    onClick={() =>
                      document
                        .getElementById("paket-section")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Lihat Detail Paket ↓
                  </span>{" "}
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="text-center mb-2">
                <span className="text-gray-400 text-lg">
                  Promo Berakhir Dalam:
                </span>
              </div>
              <div className="flex gap-2 md:gap-4 justify-center text-xl md:text-3xl font-bold my-8">
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-3 md:p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[70px] md:min-w-[100px] shadow-lg hover:shadow-amber-400/20 transform hover:scale-105">
                  <span className="text-amber-400 text-2xl md:text-4xl">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-normal tracking-wider">
                    Hari
                  </p>
                </div>
                <span className="text-amber-400 animate-pulse self-center text-2xl md:text-4xl">
                  :
                </span>
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-3 md:p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[70px] md:min-w-[100px] shadow-lg hover:shadow-amber-400/20 transform hover:scale-105">
                  <span className="text-amber-400 text-2xl md:text-4xl">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-normal tracking-wider">
                    Jam
                  </p>
                </div>
                <span className="text-amber-400 animate-pulse self-center text-2xl md:text-4xl">
                  :
                </span>
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-3 md:p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[70px] md:min-w-[100px] shadow-lg hover:shadow-amber-400/20 transform hover:scale-105">
                  <span className="text-amber-400 text-2xl md:text-4xl">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-normal tracking-wider">
                    Menit
                  </p>
                </div>
                <span className="text-amber-400 animate-pulse self-center text-2xl md:text-4xl">
                  :
                </span>
                <div className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-3 md:p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 min-w-[70px] md:min-w-[100px] shadow-lg hover:shadow-amber-400/20 transform hover:scale-105">
                  <span className="text-amber-400 text-2xl md:text-4xl">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-normal tracking-wider">
                    Detik
                  </p>
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl mb-12 text-left border-2 border-amber-400/20 hover:border-amber-400/50 transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 flex items-center gap-3">
                  <span className="animate-spin-slow">📚</span>
                  Mengapa Perpustakaan Desa Penting?
                </h2>
                <ul className="space-y-6 text-gray-300">
                  <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                    <span className="text-amber-400 text-2xl">📊</span>
                    <span>
                      Tingkat membaca masyarakat Indonesia tahun 2023:{" "}
                      <span className="text-amber-400 font-bold">66,67</span>{" "}
                      (kategori sedang)
                    </span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                    <span className="text-amber-400 text-2xl">🏘️</span>
                    <span>
                      <span className="text-amber-400 font-bold">41.363</span>{" "}
                      dari 83.763 desa belum memiliki perpustakaan
                    </span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                    <span className="text-amber-400 text-2xl">📜</span>
                    <span>
                      Didukung kebijakan{" "}
                      <span className="text-amber-400 font-bold">
                        Kemendes PDTT 2024
                      </span>{" "}
                      untuk pengembangan perpustakaan
                    </span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2">
                    <span className="text-amber-400 text-2xl">⚖️</span>
                    <span>
                      Revisi{" "}
                      <span className="text-amber-400 font-bold">
                        UU Desa No. 3 Tahun 2024
                      </span>{" "}
                      mendukung pendanaan perpustakaan desa
                    </span>
                  </li>
                </ul>
              </div>

              {/* Package Section */}
              <div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
                id="paket-section"
              >
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl border-2 border-amber-400 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"
                  >
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                        <span className="animate-pulse">⭐</span>
                        Paket {pkg.price}
                      </h3>
                      {index === 2 && (
                        <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-bounce">
                          Best Seller!
                        </div>
                      )}
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-2">
                        <p className="line-through text-gray-500">
                          {pkg.originalPrice}
                        </p>
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                          -{pkg.discount}
                        </span>
                      </div>
                      <p className="text-3xl font-bold text-amber-400 bg-gradient-to-r from-amber-400/10 to-transparent p-2 rounded-lg">
                        {pkg.price}
                      </p>
                      <div className="bg-gray-700/50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Termasuk:</p>
                        <p className="font-medium">{pkg.books}</p>
                      </div>
                      <div className="border-t border-gray-700 pt-3">
                        <p className="text-amber-400/80">Ideal untuk:</p>
                        <p className="font-semibold bg-gradient-to-r from-amber-400/20 to-transparent px-2 py-1 rounded">
                          {pkg.suitable}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/6281223871439?text=Halo,%20saya%20tertarik%20dengan%20paket%20${pkg.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 group inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-300 w-full justify-center"
                    >
                      <span>Pilih Paket</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
                <div className="bg-gray-800 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 border-2 border-amber-400/20 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📚</span>
                    <h3 className="text-xl font-bold text-amber-400">
                      Kategori Lengkap
                    </h3>
                  </div>
                  <p className="text-gray-300 bg-gray-700/30 p-4 rounded-lg">
                    Koleksi buku mencakup sastra, keterampilan, pemerintahan,
                    dan buku anak. Pilihan terbaik untuk pengembangan literasi
                    desa!
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 border-2 border-amber-400/20 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📋</span>
                    <h3 className="text-xl font-bold text-amber-400">
                      Bantuan RAB
                    </h3>
                  </div>
                  <p className="text-gray-300 bg-gray-700/30 p-4 rounded-lg">
                    Pendampingan penyusunan Rencana Anggaran dan Biaya (RAB)
                    dengan tim profesional kami. Hemat waktu & akurat!
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20 border-2 border-amber-400/20 hover:border-amber-400">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">💬</span>
                    <h3 className="text-xl font-bold text-amber-400">
                      Konsultasi Gratis
                    </h3>
                  </div>
                  <p className="text-gray-300 bg-gray-700/30 p-4 rounded-lg">
                    Konsultasi pemilihan buku sesuai kebutuhan masyarakat desa.
                    Dapatkan saran terbaik dari ahli perpustakaan!
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-amber-500 text-black rounded-2xl p-8 sm:p-12 my-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Wujudkan Perpustakaan Desa Impian!
                </h2>
                <p className="mb-8">
                  Konsultasikan kebutuhan perpustakaan desa Anda dengan tim kami
                </p>
                <a
                  href="https://wa.me/6281223871439?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20perpustakaan%20desa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>© 2024 Paket Buku Perpustakaan Desa. Hak Cipta Dilindungi.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
