"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import Navbar from '@/components/Navbar';
import emailjs from '@emailjs/browser';

export default function Home() {
  const sectionRefs = {
    about: useRef(null),
    visi: useRef(null),
    divisi: useRef(null),
    kontak: useRef(null),
    developer: useRef(null),
  };

  const [visibleSections, setVisibleSections] = useState({
    about: false,
    visi: false,
    divisi: false,
    kontak: false,
    developer: false,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formRef.current) {
      console.error("Form ref is null");
      return;
    }
  
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing environment variables");
      return;
    }
  
    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        alert("Message sent!");
      })
      .catch((err) => {
        console.error("Failed to send:", err);
      });
  };
  

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer, idx) => {
        const ref = Object.values(sectionRefs)[idx];
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HOME SECTION (tetap langsung tampil) */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-[url('/server.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-row flex-wrap justify-center gap-5 pt-3 pb-1">
            <h1 className="text-4xl text-[#e11212] font-semibold">We&apos;re More Than</h1>
            <h1 className="text-4xl text-[#d7d7d7] font-semibold">Laboratory!</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-5">
            <h1 className="text-4xl text-[#d7d7d7] font-semibold">We&apos;re Partners In Your</h1>
            <h1 className="text-4xl text-[#3182BD] font-semibold">Growth!</h1>
          </div>
          <div className="text-[#d7d7d7] pt-2 font-semibold">#GoGoMBC #WeAttack #WeProtect</div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          ref={sectionRefs.about}
          className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ease-in-out ${
            visibleSections.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('starry.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col max-w-5xl items-center text-center rounded-2xl shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] p-10">
            <div className="text-3xl font-semibold text-white pb-12">About Us</div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-6 pb-6">
              <img src="/logo.png" alt="MBC Lab Logo" className="max-w-[350px] h-auto object-contain" />
              <img src="/NCM.png" alt="NCM Logo" className="max-w-[350px] h-auto object-contain rounded-xl" />
            </div>
            <p className="text-justify text-xl text-[#d7d7d7]">
              MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian 
              Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia. 
              Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam 
              tiga bidang utamanya.
            </p>
          </div>
        </section>

        {/* VISI & MISI */}
        <section
          id="visi"
          ref={sectionRefs.visi}
          className={` flex justify-center pt-20 pb-20 transition-all duration-1000 ease-in-out ${
            visibleSections.visi ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('starry.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="w-full max-w-6xl border border-[#2c2c2c] rounded-3xl min-h-[400px] md:min-h-[500px] bg-[rgba(26,26,26,0.75)] shadow-[0_0_20px_2px_rgba(255,255,255,0.1)]">
            <div className="flex flex-col items-center text-center p-20">
              <div className="text-3xl font-semibold text-white pb-7">Vision</div>
              <div className='text-xl pb-7'>
              Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan merancang riset yang 
              memberikan dampak positif dan mengikuti perkembangan teknologi masa kini serta menjadi lingkungan yang membentuk, mematangkan, dan mempersiapkan skill asisten MBC 
              Laboratory agar dapat bersaing di Industri.
              </div>
              <div className='text-lg font-bold pb-10'>“Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka”</div>
              <div className="text-3xl font-semibold text-white pb-7">Mission</div>
              <div className='text-xl'>
                <div>1. Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka panjang.</div>
                <div>2. Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan profesional serta mendukung karier.</div>
                <div className='pb-7'>3. Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa.</div>
                <div className='text-lg font-bold'>“Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif”</div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVISI */}
        <section
          id="divisi"
          ref={sectionRefs.divisi}
          className={`min-h-screen flex flex-col items-center justify-center px-4 pt-20 transition-all duration-1000 ease-in-out ${
            visibleSections.divisi ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('starry.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="text-4xl font-semibold text-white pt-5 pb-10">Division</div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 text-xl w-full max-w-6xl px-4 mb-10">
            
            {/* Card CS */}
            <div className="bg-black/50 text-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] transition-all duration-500">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="fluent:shield-keyhole-20-regular" className="w-16 h-16" />
                  <h3 className="text-2xl font-semibold">Cybersecurity</h3>
                </div>
                <p className="text-justify text-base text-gray-300">
                  Divisi Riset Cyber Security di Laboratorium Multimedia Application,Big Data, dan Cybersecurity (MBC) Telkom University merupakan kelompok yang berfokus pada penelitian 
                  dan pengembangan di bidang keamanan siber. Divisi ini bertujuan untuk memperkuat kemampuan teknis serta memperdalam pengetahuan mahasiswa dalam menghadapi ancaman siber 
                  yang semakin kompleks. Selain melakukan riset, divisi ini juga berperan sebagai grup belajar, dimana anggota dapat berbagi wawasan, memecahkan masalah, dan berkolaborasi 
                  dalam berbagai proyek yang mencakup topik-topik seperti analisis malware, keamanan jaringan, kriptografi, dan forensik digital. Dengan menggabungkan riset dan pembelajaran 
                  kolaboratif, divisi ini berkontribusi dalam mencetak ahli keamanan siber yang siap menghadapi tantangan industri dan mendukung perkembangan keamanan teknologi informasi di 
                  Indonesia.
                </p>
              </div>
            </div>

            {/* Card GT */}
            <div className="bg-black/50 text-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] transition-all duration-500">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="famicons:game-controller-outline" className="w-16 h-16" />
                  <h3 className="text-2xl font-semibold">Game Tech</h3>
                </div>
                <p className="text-justify text-base text-gray-300">
                  Divisi Game Tech di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi 
                  permainan yang mencakup aspek desain, pemrograman, serta optimasi game. Divisi ini memberikan wadah bagi mahasiswa untuk mendalami berbagai komponen teknologi game, 
                  mulai dari game engine seperti Unity dan Unreal Engine hingga teknik animasi, grafis 3D, dan virtual reality (VR). Selain menjadi ruang riset, divisi ini juga 
                  berfungsi sebagai grup belajar yang mendorong kolaborasi dalam mengembangkan game, baik yang bersifat edukatif, hiburan, maupun yang berkontribusi pada simulasi dan 
                  pelatihan. Dengan memadukan riset dan pembelajaran berbasis proyek, Divisi Game Tech bertujuan untuk melahirkan talenta muda yang kreatif dan terampil dalam 
                  menciptakan inovasi di industri game yang dinamis dan berkembang pesat.
                </p>
              </div>
            </div>

            {/* Card BD */}
            <div className="bg-black/50 text-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] transition-all duration-500">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="majesticons:data-line" className="w-16 h-16" />
                  <h3 className="text-2xl font-semibold">Big Data</h3>
                </div>
                <p className="text-justify text-base text-gray-300">
                  Divisi Big Data di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan pengembangan teknologi serta 
                  aplikasi data skala besar untuk mendukung pengambilan keputusan berbasis data. Divisi ini tidak hanya bertujuan untuk mengeksplorasi teknik pengolahan data yang 
                  efisien, seperti data mining, machine learning, dan data analytics, tetapi juga berfungsi sebagai grup belajar yang mendorong kolaborasi antar mahasiswa. Anggota 
                  divisi berkesempatan untuk mempelajari dan mengimplementasikan teknologi big data seperti Hadoop, Spark, dan NoSQL, serta mendiskusikan tren terkini dalam analisis 
                  data. Dengan pendekatan berbasis riset dan pembelajaran kolaboratif, divisi ini berupaya menghasilkan solusi inovatif yang dapat diaplikasikan di berbagai sektor 
                  industri, baik dalam konteks lokal maupun global.
                </p>
              </div>
            </div>

            {/* Card GIS */}
            <div className="bg-black/50 text-white rounded-2xl p-6 shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] transition-all duration-500">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row items-center gap-2">
                  <Icon icon="la:globe" className="w-16 h-16" />
                  <h3 className="text-2xl font-semibold">Geographic Information System</h3>
                </div>
                <p className="text-justify text-base text-gray-300">
                  Divisi Geographic Information System (GIS) di Laboratorium Multimedia Application, Big Data, dan Cybersecurity (MBC) Telkom University berfokus pada penelitian dan 
                  pengembangan teknologi pemetaan serta analisis data geospasial. Divisi ini mendukung mahasiswa dalam mempelajari dan menerapkan konsep GIS untuk memecahkan berbagai 
                  masalah terkait lokasi, seperti perencanaan kota, manajemen sumber daya alam, dan analisis risiko bencana. Dengan menggunakan perangkat lunak seperti ArcGIS, QGIS, 
                  dan teknologi remote sensing, anggota divisi ini dapat mengasah keterampilan dalam pemrosesan, visualisasi, dan analisis data spasial. Selain berperan sebagai pusat 
                  riset, divisi ini juga berfungsi sebagai grup belajar, yang memfasilitasi diskusi dan kolaborasi antar mahasiswa untuk mengembangkan solusi inovatif yang relevan 
                  dengan kebutuhan industri dan pemerintah. Melalui pendekatan berbasis riset dan pembelajaran kolaboratif, divisi ini berupaya mencetak ahli GIS yang mampu memanfaatkan 
                  teknologi geospasial untuk mendukung pembangunan berkelanjutan di Indonesia.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* KONTAK */}
        <section
          id="kontak"
          ref={sectionRefs.kontak}
          className={`min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ease-in-out ${
            visibleSections.kontak ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('starry.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col max-w-3xl items-center text-center p-30">
              <div className="text-3xl font-semibold text-white pb-5">Visit Our Laboratory!</div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col">
                  <div className='rounded-2xl overflow-hidden'>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3389366293322!2d107.62558207483596!3d-6.969281993031346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sen!2sid!4v1751630163987!5m2!1sen!2sid"
                      width="500"
                      height="270"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className='text-justify pt-4'>
                  Telkom University, TULT 13.04, TULT 11.12, Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, 
                  Jawa Barat 40257
                  </div>
                </div>
                <div className="flex flex-col gap-4 font-bold">
                  <div className="flex flex-row">
                    <a
                      href="https://www.instagram.com/mbclab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#3182BD]">
                      <Icon icon="line-md:instagram" className="w-8 h-8" />
                      mbclab
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a
                      href="https://www.linkedin.com/company/mbclaboratory/mycompany/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#3182BD]">
                      <Icon icon="mdi:linkedin" className="w-8 h-8" />
                      mbclaboratory
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a 
                      href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-[#3182BD]">
                      <Icon icon="jam:line" className="w-8 h-8" />
                      @sok8073r
                    </a>
                  </div>

                  {/* Tombol Popup */}
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="mt-4 px-6 py-2 bg-black/50 round-xl text-white rounded-lg shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] hover:bg-black transition cursor-pointer"
                  >
                    Get in Touch With Us !
                  </button>
                </div>
              </div>
            </div>
          </div>
              {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                    <button
                      onClick={() => setIsPopupOpen(false)}
                      className="absolute top-2 right-2 text-black hover:text-red-500 cursor-pointer"
                    >
                      ✕
                    </button>
                    <h2 className="text-xl text-black font-bold mb-4 text-center">Contact Form</h2>
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border text-black border-gray-300 p-2 rounded"
                        required
                      />
                      <input
                        type="email"
                        name="reply_to"
                        placeholder="Your Email"
                        className="border text-black border-gray-300 p-2 rounded"
                        required
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="border text-black border-gray-300 p-2 rounded"
                        required
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        className="border text-black border-gray-300 p-2 rounded h-32"
                        required
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-[#3182BD] text-white px-4 py-2 rounded hover:bg-[#256fa3] transition"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              )}
        </section>

        {/* DEVELOPER */}
        <section
          id="developer"
          ref={sectionRefs.developer}
          className={`min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ease-in-out ${
            visibleSections.developer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url('starry.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex flex-col items-center text-center bg-black/50 p-10 rounded-2xl shadow-[0_0_20px_2px_rgba(255,255,255,0.3)]">
            <div className="text-3xl font-semibold text-white pb-10">This site is developed by</div>
            <div className="flex flex-row gap-10">
              <img src="/developer.jpeg" alt="developer" className="max-h-100 w-auto rounded-xl"/>
              <div className="flex flex-col text-left">
                <div className="text-3xl max-w-2xl font-bold pb-5">
                  Mirekel Ilham Akbar
                </div>
                <div className="text-xl max-w-xl text-justify">
                  adalah seorang mahasiswa S1 Informatika yang memiliki minat pada bidang informatika, terutama cybersecurity. Ketertarikan tersebut didukung oleh kemampuannya dalam 
                  menggunakan bahasa programming, seperti golang, java, python, dan c++, serta kemampuan dalam menggunakan wireshark, metasploit, dan kali linux. Selain kemampuan 
                  tersebut, Mirekel pernah berkecimpung di bidang web developer dengan menggunakan html 5, tailwind, bootstrap, ReactJS, NextJS, dan typescript. 
                </div>
                <div className="pt-10 flex flex-row text-xl">
                  <a
                    href="https://github.com/Kell1179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#3182BD]">
                    <Icon icon="mdi:github" className="w-12 h-12" />
                    Kell1179
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
