import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Compass, Award, Building2, ShieldCheck, Ship, ShieldAlert, BadgeCheck, Stethoscope } from 'lucide-react';
import { KAMPUS_DATA } from '../data';
import { KampusItem } from '../types';
import { AsymmetricCard } from './AsymmetricCard';

export const KampusSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('kampus-unhas');
  const [filterType, setFilterType] = useState<'ALL' | 'PTN' | 'PTS'>('ALL');

  const filteredKampus = useMemo(() => {
    return KAMPUS_DATA.filter(item => {
      if (filterType === 'ALL') return true;
      if (filterType === 'PTN') return item.category.startsWith('PTN');
      if (filterType === 'PTS') return item.category === 'PTS';
      return true;
    });
  }, [filterType]);

  const activeKampus = useMemo(() => {
    return KAMPUS_DATA.find(item => item.id === selectedId) || KAMPUS_DATA[0];
  }, [selectedId]);

  // Map icon strings to Lucide components for aesthetic pairing
  const getIcon = (type: string, className: string = "w-5 h-5") => {
    switch (type) {
      case 'phinisi':
        return <Ship className={`${className} text-brand-bright`} />;
      case 'islamic':
        return <Landmark className={`${className} text-brand-bright`} />;
      case 'scale':
        return <ShieldCheck className={`${className} text-[#D53E0F]`} />;
      case 'traditional':
        return <Stethoscope className={`${className} text-[#D53E0F]`} />;
      case 'academic':
      default:
        return <Compass className={`${className} text-brand-bright`} />;
    }
  };

  return (
    <div className="section-container relative">
      
      <div className="mb-8">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-bright" />
          <div className="w-3 h-0.5 bg-brand-bright" />
          <span className="text-xs font-mono text-brand-bright tracking-widest uppercase">Barometer Kampus</span>
        </div>
        <h2 className="text-2.5xl lg:text-3.5xl font-display font-extrabold tracking-tight text-white">
          List Kampus & Perguruan Tinggi
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Pusat transfer ilmu dan menara gading pergerakan intelektual nasional terkemuka.
        </p>
      </div>

      {/* Tabs segment to select PTN / PTS */}
      <div className="flex items-center gap-4 pb-4 mb-8">
        <span className="text-xs font-mono text-gray-500 uppercase tracking-tighter hidden sm:block">Klasifikasi:</span>
        <div className="flex bg-[#141414] p-1 rounded-md">
          {(['ALL', 'PTN', 'PTS'] as const).map(type => (
            <button
              key={type}
              onClick={() => {
                setFilterType(type);
                // Auto-select first item of filtered list to avoid empty state reference
                const firstFound = KAMPUS_DATA.find(item => {
                  if (type === 'ALL') return true;
                  if (type === 'PTN') return item.category.startsWith('PTN');
                  if (type === 'PTS') return item.category === 'PTS';
                  return true;
                });
                if (firstFound) setSelectedId(firstFound.id);
              }}
              className={`px-3 py-1 text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                filterType === type
                  ? 'bg-brand-medium/85 text-white shadow-inner font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Blueprint Visual Showcase (Anti-Grid Asymmetrical Split) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive University Tree (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {filteredKampus.map((k) => {
            const isSelected = k.id === selectedId;
            return (
              <div
                key={k.id}
                onClick={() => setSelectedId(k.id)}
                className={`relative p-5 rounded-lg text-left cursor-pointer transition-all duration-300 group ${
                  isSelected
                    ? 'bg-[#181818]/90 shadow-[0_0_20px_rgba(213,62,15,0.06)] translate-x-1.5'
                    : 'bg-[#121212]/50 hover:bg-[#141414]/80'
                }`}
              >
                {/* Visual link anchor indicating selected tree member */}
                {isSelected && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-brand-bright rounded-r" />
                )}

                <div className="flex items-start gap-4">
                  {/* Circle shape housing specific icons */}
                  <div className={`p-2.5 rounded transition-all ${
                    isSelected ? 'bg-brand-deep/55' : 'bg-black/30'
                  }`}>
                    {getIcon(k.iconType, "w-5 h-5")}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-mono tracking-wider text-brand-bright font-semibold uppercase">
                        {k.category}
                      </span>
                      <span className="text-[9px] text-gray-500 font-mono">EST. {k.established}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-white group-hover:text-brand-bright transition-colors duration-200">
                      {k.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {k.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Blueprint Blueprint Technical Grid Sheet (lg:col-span-7) */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-full">

            <div className="relative z-10 w-full h-full p-6 lg:p-8 rounded-xl bg-[#121212]/90 backdrop-blur-lg flex flex-col justify-between">
              
              <div>
                {/* Top tracker data */}
                <div className="flex justify-between items-center pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-brand-bright" />
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">CAMPUS ANALYTICAL SPEC</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">AKREDITASI: {activeKampus.accreditation}</span>
                  </div>
                </div>

                {/* Subtitle / category */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-brand-deep/40 text-brand-bright font-mono text-[9px] uppercase">
                    {activeKampus.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Tahun Berdiri: {activeKampus.established}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-display font-black text-white tracking-tight mb-4">
                  {activeKampus.name} <span className="text-brand-bright text-lg font-mono">({activeKampus.alias})</span>
                </h3>

                {/* Long description - preserve literal word contents */}
                <div className="p-4 bg-[#0a0a0a]/60 rounded-lg text-xs leading-relaxed font-sans font-light text-gray-300 mb-6">
                  {activeKampus.longDescription}
                </div>

                {/* Specific features bento boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  
                  {/* Box 1: Core strengths */}
                  <div className="p-4 rounded bg-[#0a0a0a]/50 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-brand-bright tracking-wider uppercase block mb-1.5">Karakter Unggulan</span>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {activeKampus.keyFeature}
                    </p>
                  </div>

                  {/* Box 2: Dominant Faculty */}
                  <div className="p-4 rounded bg-[#0a0a0a]/50 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-brand-bright tracking-wider uppercase block mb-1.5 font-bold">Fakultas Utama & Favorit</span>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      {activeKampus.dominantFaculty}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom decorative coordinates */}
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-gray-500 gap-2">
                <span>SYSTEM_CORE_STATUS: ACTIVE</span>
                <span className="text-brand-bright">MAK_COORD // 5.1478° S, 119.4244° E</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
