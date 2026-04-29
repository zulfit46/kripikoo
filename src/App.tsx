/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  CheckCircle2, 
  Smartphone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Truck, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  Share2,
  Menu,
  X,
  Star
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "62895433704646";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Kripikoo!%20Saya%20ingin%20tanya-tanya%20tentang%20Keripik%20Pisang%20Original%20nya...`;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const products = [
    {
      id: "reguler",
      name: "Kripikoo Reguler",
      description: "Kemasan praktis untuk temen ngemil di kantor atau di jalan. Porsi pas, kenyang puas!",
      price: "22.000",
      weight: "150gr",
      img: "/regenerated_image_1777442636812.png"
    },
    {
      id: "premium",
      name: "Kripikoo Premium",
      description: "Kemasan eksklusif standing pouch dengan isi lebih banyak. Cocok untuk stok di rumah atau oleh-oleh.",
      price: "27.000",
      weight: "250gr",
      img: "/regenerated_image_1777442811556.png",
      badge: "BEST SELLER"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 text-amber-950 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-yellow-400/90 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-amber-900 p-1.5 rounded-lg">
                <ShoppingBag className="text-yellow-400 w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-amber-950">KRIPIKOO</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <a href="#hero" className="hover:text-amber-700 transition">Beranda</a>
              <a href="#produk" className="hover:text-amber-700 transition">Pilihan Produk</a>
              <a href="#testimoni" className="hover:text-amber-700 transition">Testimoni</a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-900 text-yellow-400 px-5 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Order via WA
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-yellow-400 border-b border-yellow-500 p-4 space-y-4 font-bold"
          >
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block">Beranda</a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="block">Pilihan Produk</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="block">Testimoni</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-amber-900 text-yellow-400 p-3 rounded-xl text-center flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <span className="inline-block bg-yellow-200 text-amber-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                🍌 100% Pisang Pilihan
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-amber-950 leading-[0.9] mb-6">
                KRENYESNYA <span className="text-amber-600 block italic">TIADA TANDING.</span>
              </h1>
              <p className="text-lg text-amber-900/80 mb-8 max-w-lg leading-relaxed">
                Nikmati kelezatan keripik pisang premium dengan tekstur yang pas dan bumbu rahasia yang meresap sempurna. Snack sehat untuk teman produktifmu!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#produk"
                  className="bg-amber-900 text-yellow-400 px-8 py-4 rounded-2xl font-black text-lg hover:shadow-xl hover:-translate-y-1 transition text-center flex items-center justify-center gap-2"
                >
                  Mulai Rp20.000 - Cek Produk
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-amber-900 text-amber-900 px-8 py-4 rounded-2xl font-bold text-center hover:bg-amber-900/5 transition"
                >
                  Tanya Penjual
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-30 -z-10 translate-x-10 translate-y-10"></div>
              <img 
                src="/regenerated_image_1777442036858.png" 
                alt="Keripik Pisang" 
                className="w-full h-auto rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition duration-500 object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs animate-bounce-slow">
                <p className="text-amber-900 font-bold flex items-center gap-2 italic text-sm md:text-base">
                  <Zap size={20} className="text-yellow-500 fill-yellow-500" />
                  "Kres... Sekali coba langsung nagih!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-amber-950 py-16 text-yellow-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck />, title: "Tanpa Pengawet" },
            { icon: <CheckCircle2 />, title: "Higienis & Bersih" },
            { icon: <Zap />, title: "Varian Original Premium" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-yellow-400">{item.icon}</div>
              <p className="font-bold text-sm md:text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Details - Grid of 2 Packages */}
      <section id="produk" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-amber-950 mb-4 uppercase tracking-tighter">Pilihan Paket Hemat</h2>
            <p className="text-amber-900/60 font-medium">Beda ukuran, tetap satu rasa original yang pecah di mulut!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-yellow-200 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <div className="absolute top-6 left-6 bg-amber-900 text-yellow-400 px-4 py-1 rounded-full font-black text-sm shadow-xl">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-6 right-6 bg-yellow-400 text-amber-900 px-4 py-1 rounded-full font-black text-sm shadow-xl">
                    {product.weight}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-amber-950 mb-4">{product.name}</h3>
                    <p className="text-amber-900/70 leading-relaxed mb-6 font-medium italic">
                      "{product.description}"
                    </p>
                    <div className="text-3xl font-black text-amber-600 mb-8">
                       Rp{product.price}
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Halo%20Kripikoo!%20Saya%20ingin%20memesan%20${product.name}%20seharga%20Rp${product.price}...`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-yellow-400 text-amber-950 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-yellow-500 transition shadow-lg shadow-yellow-100"
                  >
                    <MessageCircle fill="currentColor" />
                    Pesan {product.name.split(' ')[1]}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Description Block */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-amber-950 mb-8 italic">Kenapa Harus Kripikoo?</h2>
            <p className="text-lg text-amber-900/80 leading-relaxed max-w-2xl mx-auto">
              Dibuat dari pisang pilihan, diiris tipis dengan presisi, dan digoreng dengan suhu yang terjaga menggunakan minyak nabati murni. Memberikan sensasi gurih-manis alami pisang yang otentik, renyah tanpa merusak gigi!
            </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-amber-950 mb-4 uppercase tracking-tighter">Kata Pecinta Kripikoo</h2>
            <p className="text-amber-900/60 font-medium">Testimoni jujur dari pelanggan setia kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Siska Amelia",
                role: "Mahasiswi",
                comment: "Keripiknya beneran renyah banget! Pas buat nemenin ngerjain tugas. Manisnya alami, nggak bikin seret.",
                rating: 5
              },
              {
                name: "Budi Santoso",
                role: "Karyawan Swasta",
                comment: "Sudah coba banyak keripik pisang, tapi Kripikoo yang paling juara teksturnya. Tipis tapi nggak gampang hancur.",
                rating: 5
              },
              {
                name: "Linda Permata",
                role: "Ibu Rumah Tangga",
                comment: "Anak-anak suka banget buat cemilan sore. Seneng karena tanpa pengawet jadi tenang kasih ke keluarga.",
                rating: 5
              }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-yellow-50 p-8 rounded-[2rem] border border-yellow-200 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-amber-900/80 italic mb-6 leading-relaxed">
                  "{testi.comment}"
                </p>
                <div>
                  <p className="font-black text-amber-950">{testi.name}</p>
                  <p className="text-sm text-amber-900/50 font-bold">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-12 text-yellow-100/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-end">
          <div>
            <div className="bg-yellow-400 p-1.5 rounded-lg w-fit mb-4">
                <ShoppingBag className="text-amber-950 w-6 h-6" />
            </div>
            <h4 className="text-2xl font-black text-yellow-400 mb-2 italic">KRIPIKOO</h4>
            <p className="text-sm">Dedikasi kami untuk menghadirkan camilan tradisional dengan kualitas modern yang tak terlupakan.</p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-yellow-400 font-bold uppercase text-xs tracking-widest">Hubungi Kami</h5>
            <a href={whatsappUrl} className="flex items-center gap-3 hover:text-white transition">
              <MessageCircle size={20} />
              0895433704646
            </a>
            <div className="flex gap-4">
               <Instagram className="hover:text-white transition cursor-pointer" />
               <Facebook className="hover:text-white transition cursor-pointer" />
            </div>
          </div>

          <div className="text-sm">
            <p>&copy; 2026 Kripikoo UMKM. All rights reserved.</p>
            <p className="mt-2 text-xs">Cintai Produk Lokal Indonesia 🇮🇩</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="md:hidden fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 animate-pulse"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
