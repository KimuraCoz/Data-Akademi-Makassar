/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Award, 
  Clock, 
  History, 
  GraduationCap, 
  Flame, 
  ArrowUpRight, 
  Globe, 
  LayoutGrid, 
  Sparkles,
  Info
} from 'lucide-react';
import { BackgroundShapes } from './components/BackgroundShapes';
import { SmuSection } from './components/SmuSection';
import { KampusSection } from './components/KampusSection';
import { AsymmetricCard } from './components/AsymmetricCard';
import { 
  EXPLANATION_SHORT, 
  EXPLANATION_LONG, 
  HISTORY_PARAGRAPHS, 
  FOOTER_CREDITS 
} from './data';

// Import the generated image of Makassar Academy
import makassarPhoto from './assets/images/regenerated_image_1780134736123.jpg';

export default function App() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Read current time and set up a dynamic clock for Form Studio technical vibe
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as WITA (Makassar is UTC+8)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('id-ID', options).format(now) + ' WITA');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full overflow-hidden relative text-gray-100 font-sans antialiased bg-[#0a0a0a]">
      {/* Immersive background layouts and glowing visual dusts */}
      <BackgroundShapes />

      {/* 
        ========================================================================================
        SIDE NAVIGATION PANEL - "Professional Polish" Static Sidebar Layout
        ========================================================================================
      */}
      <aside className="w-full lg:w-[240px] p-5 lg:p-6 flex flex-col justify-between bg-[#0a0a0a]/90 backdrop-blur-md shrink-0 z-25">
        <div className="space-y-8">
          <div className="flex justify-between items-center lg:items-start gap-4">
            <div>
              {/* Elegant Accent line from professional polish theme */}
              <div className="w-[60px] h-[4px] bg-brand-bright mb-4" />
              <h1 className="font-display font-black text-2xl lg:text-3.5xl leading-none tracking-tight text-white uppercase">
                Makassar <br />
                <span className="text-brand-bright">Akademi</span>
              </h1>
            </div>

            {/* Menu on the right side of Makassar Akademi */}
            <div className="flex flex-row flex-wrap items-center gap-1 bg-[#121212]/50 p-1.5 rounded-lg border border-white/5 font-mono text-[9px] tracking-wide text-center">
              <a href="#intro" className="px-1.5 py-0.5 rounded hover:bg-brand-medium/25 hover:text-brand-bright text-gray-400 font-semibold transition-all">
                INTRO
              </a>
              <a href="#sejarah" className="px-1.5 py-0.5 rounded hover:bg-brand-medium/25 hover:text-brand-bright text-gray-400 font-semibold transition-all">
                SEJARAH
              </a>
              <a href="#smu" className="px-1.5 py-0.5 rounded hover:bg-brand-medium/25 hover:text-brand-bright text-gray-400 font-semibold transition-all">
                SMU
              </a>
              <a href="#kampus" className="px-1.5 py-0.5 rounded hover:bg-brand-medium/25 hover:text-brand-bright text-gray-400 font-semibold transition-all">
                KAMPUS
              </a>
            </div>
          </div>
        </div>


      </aside>

      {/* 
        ========================================================================================
        SCROLLABLE VIEWPORT CONSOLE - "Professional Polish" Main Pane Area
        ========================================================================================
      */}
      <main className="flex-1 h-full overflow-y-auto p-6 md:p-10 lg:p-14 space-y-16 scroll-smooth relative z-10 no-scrollbar">
        
        {/* HERO TITLE BLOCK */}
        <section className="relative grid grid-cols-1 xl:grid-cols-12 gap-6 items-start pt-2">
          <div className="xl:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-deep/30 text-[10px] font-mono text-brand-bright tracking-widest uppercase">
              <Sparkles size={11} className="text-brand-bright" />
              <span>SISTEM PORTAL BERBASIS DATA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-none">
              Kumpulan Data Kota Makassar dalam Bidang Akademi
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl font-light">
              Portal data strategis dan sejarah komprehensif institusi sekolah menengah atas terbaik hingga perguruan tinggi penopang peradaban ilmu di kota Anging Mammiri.
            </p>
          </div>

          <div className="xl:col-span-4 flex flex-col gap-2.5 p-4 bg-[#140405]/80 rounded-md font-mono text-[9px] text-gray-400 select-none">
            <div className="flex justify-between pb-1.5 text-brand-bright font-bold">
              <span>METRIC_ID</span>
              <span>VALUE_FIELD</span>
            </div>
            <div className="flex justify-between">
              <span>REGIONAL</span>
              <span>SULAWESI SELATAN</span>
            </div>
            <div className="flex justify-between">
              <span>LATITUDE // COORD</span>
              <span>-5.14766° S</span>
            </div>
            <div className="flex justify-between">
              <span>CORE ACCREDITATION</span>
              <span>PRIMARY UNGGUL</span>
            </div>
          </div>
        </section>

        {/* INTRODUKSI CARD with Asymmetric anti-grid alignment (#intro) */}
        <section id="intro" className="anti-grid-card-theme anti-grid-card-odd relative scroll-mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-12 mb-2 flex items-center justify-between">
              <span className="pill-tag text-[10px]">Data Makro Geografis</span>
              <span className="text-[10px] font-mono text-gray-500">MKS-METRIC // SULSEL</span>
            </div>

            {/* FIRST TEXT COLUMN - First half of the requested text */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs lg:text-sm leading-relaxed text-gray-300 font-sans font-light">
                Kota Makassar (Lontara Makassar: ᨀᨚᨈ ᨆᨀᨔᨑ, transliterasi: Kota Mangkasara'), sebelumnya bernama Ujung Pandang (nama benteng suku makassar), adalah ibu kota Provinsi Sulawesi Selatan, Indonesia. Sebelumnya, kota yang sejak 1971 hingga 1999 dikenal secara resmi sebagai Ujung Pandang ini merupakan kota terbesar di wilayah Indonesia Timur dan pusat kota terbesar ketujuh di Indonesia dari jumlah penduduk setelah Jakarta, Surabaya, Medan, Bandung, Semarang, dan Palembang. Kota ini terletak di pesisir barat daya pulau Sulawesi, menghadap Selat Makassar.
              </p>
            </div>

            {/* MIDDLE PHOTO BAR (Exactly between the split introduction texts) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-2">
              <div 
                className="relative group p-1 bg-[#1c0607]/40 rounded-lg rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl mx-auto"
                style={{ width: '12cm', maxWidth: '100%' }}
              >
                <div className="overflow-hidden rounded-md relative flex justify-center items-center">
                  <img 
                    src={makassarPhoto} 
                    alt="Makassar Skyline Panorama" 
                    className="h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                    style={{ width: '12cm', maxWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/35 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>

            {/* SECOND TEXT COLUMN - Second half of the requested text */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs lg:text-sm leading-relaxed text-gray-300 font-sans font-light">
                Sebagian besar penduduk yang mendiami kota ini adalah suku Makassar atau Tu MANGKASARAK (paling dominan) dan pendatang dari orang-orang Bugis, Jawa, Mandar, Toraja, Sunda, Tionghoa dan lain-lain. Menurut Bappenas, Makassar adalah salah satu dari empat pusat pertumbuhan utama di Indonesia, bersama dengan Medan, Jakarta, dan Surabaya. Dengan memiliki wilayah seluas 175,77 km² dan jumlah penduduk lebih dari 1,4 jiwa, kota ini berada di urutan ketujuh kota terbesar di Indonesia dari jumlah penduduk setelah Jakarta, Surabaya, Medan, Bandung, Semarang, dan Palembang. Makanan khas Makassar yang umum dijumpai di pelosok kota adalah Coto Makassar, Roti Maros, Jalangkote, Bassang, Kue Tori, Pallu butung, Pisang Ijo, Sop Saudara dan Sop Konro.
              </p>
            </div>

          </div>
        </section>

        {/* SEJARAH TIMELINE SEGMENT inside an anti-grid-card (#sejarah) */}
        <section id="sejarah" className="anti-grid-card-theme anti-grid-card-even relative scroll-mt-10">
          <div className="mb-8 justify-between flex items-center pb-3">
            <div className="flex items-center gap-2">
              <span className="pill-tag text-[10px]">Lintasan Sejarah</span>
              <h2 className="text-lg lg:text-xl font-display font-extrabold text-white">Evolusi & Sejarah Pendidikan Makassar</h2>
            </div>
            <span className="text-xs font-mono text-brand-bright">DEKADE 1950 - MODERN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Historical item 1 */}
            <div className="list-item pl-4 space-y-1">
              <span className="text-[10px] font-mono text-brand-bright font-bold">1950s // FONDASI</span>
              <h4 className="text-white text-sm font-bold font-display">Awal Kemerdekaan</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {HISTORY_PARAGRAPHS[0]}
              </p>
            </div>

            {/* Historical item 2 */}
            <div className="list-item pl-4 space-y-1">
              <span className="text-[10px] font-mono text-brand-bright font-bold">1956 // BERDIRINYA UNHAS</span>
              <h4 className="text-white text-sm font-bold font-display">Universitas Hasanuddin</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {HISTORY_PARAGRAPHS[1]}
              </p>
            </div>

            {/* Historical item 3 */}
            <div className="list-item pl-4 space-y-1">
              <span className="text-[10px] font-mono text-brand-bright font-bold">MODERN // PERTUMBUHAN</span>
              <h4 className="text-white text-sm font-bold font-display">Center of Excellence</h4>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {HISTORY_PARAGRAPHS[2]}
              </p>
            </div>
          </div>
        </section>

        {/* LIST SMU INTERACTIVE AREA (#smu) */}
        <section id="smu" className="anti-grid-card-theme anti-grid-card-odd scroll-mt-10">
          <SmuSection />
        </section>

        {/* LIST KAMPUS INTERACTIVE AREA (#kampus) */}
        <section id="kampus" className="anti-grid-card-theme anti-grid-card-even scroll-mt-10">
          <KampusSection />
        </section>

        {/* METRICS / STATS OVERVIEW SECTION (Forms Studio Styling block) */}
        <section className="relative">
          <div className="p-6 bg-[#130305]/95 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              
              <div className="p-2 md:p-4">
                <div className="text-xs font-mono text-gray-400 uppercase">AKREDITASI INSTANSI</div>
                <div className="text-2xl font-display font-black text-brand-bright mt-1">A / UNGGUL</div>
                <div className="text-[9px] font-mono text-gray-500 mt-2">SELEKSI STANDAR OSN & BAN-PT</div>
              </div>

              <div className="p-2 md:p-4 pt-6 md:pt-4">
                <div className="text-xs font-mono text-gray-400 uppercase">DAFTAR KAMPUS</div>
                <div className="text-2xl font-display font-black text-white mt-1">5 RAKSASA</div>
                <div className="text-[9px] font-mono text-gray-500 mt-2">PTN, PTS, & KAMPUS ISLAMIC</div>
              </div>

              <div className="p-2 md:p-4 pt-6 md:pt-4">
                <div className="text-xs font-mono text-gray-400 uppercase">SEKOLAH FAVORIT</div>
                <div className="text-2xl font-display font-black text-white mt-1">6 PILIHAN</div>
                <div className="text-[9px] font-mono text-gray-500 mt-2">NEGERI, SWASTA, & BOARDING</div>
              </div>

              <div className="p-2 md:p-4 pt-6 md:pt-4">
                <div className="text-xs font-mono text-gray-400 uppercase">PUSAT KOORDINAT</div>
                <div className="text-lg font-mono font-bold text-brand-bright mt-2">WITA (GMT+8)</div>
                <div className="text-[9px] font-mono text-gray-500 mt-2">KOTA PINTU GERBANG INDONESIA TIMUR</div>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-6 pb-2 text-xs font-mono text-gray-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="font-bold text-white block">Created by KimuraCoz (Github)</span>
            <span className="text-[10px] text-gray-400">Disclaimer: Data dikumpulkan dari internet. Informasi dapat berubah sewaktu-waktu.</span>
          </div>
          <div className="text-left md:text-right text-[10px]">
            <span>ENGINE: REACT 19 + TAILWIND V4</span>
          </div>
        </footer>

      </main>

      {/* Dynamic technical Disclaimer container popup in main layout */}
      {showDisclaimer && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm p-4 bg-[#140405]/95 rounded-lg shadow-2xl backdrop-blur-md">
          <div className="flex items-start gap-3">
            <Info className="text-brand-bright shrink-0 mt-0.5" size={18} />
            <div className="flex-1">
              <h4 className="text-xs font-mono font-bold text-white tracking-wider uppercase mb-1">DISCLAIMER!!</h4>
              <p className="text-[11px] text-gray-300 leading-normal font-sans">
                {FOOTER_CREDITS.disclaimer}
              </p>
              <button 
                onClick={() => setShowDisclaimer(false)} 
                className="mt-3 px-3 py-1 text-[10px] font-mono bg-brand-bright text-white uppercase font-bold rounded transition-colors cursor-pointer"
              >
                KONFIRMASI DAN DIINGAT
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
