import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, BookOpen, GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { SMU_DATA } from '../data';
import { SmuItem } from '../types';
import { AsymmetricCard } from './AsymmetricCard';

export const SmuSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Negeri' | 'Swasta'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>('smu-17'); // pre-select SMAN 17 for high impact

  const filteredData = useMemo(() => {
    return SMU_DATA.filter((item) => {
      const matchFilter = filter === 'All' || item.category === filter;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [filter, searchQuery]);

  const activeSmu = useMemo(() => {
    return SMU_DATA.find((item) => item.id === selectedId) || SMU_DATA[0];
  }, [selectedId]);

  return (
    <div className="section-container relative">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-bright animate-pulse" />
            <span className="text-xs font-mono text-brand-bright uppercase tracking-widest">Database Portal</span>
          </div>
          <h2 className="text-2.5xl lg:text-3.5xl font-display font-extrabold tracking-tight text-white">
            List SMU Unggulan
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Menampilkan sekolah menengah tingkat atas ternama dengan reputasi historis kuat.
          </p>
        </div>

        {/* Studio Technical Category Filters */}
        <div className="flex flex-wrap gap-2">
          {(['All', 'Negeri', 'Swasta'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-md transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-brand-medium text-white shadow-[0_0_15px_rgba(213,62,15,0.15)]'
                  : 'bg-[#151515] text-gray-400 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'PROFIL LENGKAP' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Tool-Console search bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-bright/60">
          <Search size={16} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari sekolah (misal: SMAN 17, Smansa, Athirah)..."
          className="w-full pl-10 pr-4 py-3 bg-[#141414] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-mono text-gray-400 hover:text-white"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Main Grid: Anti-Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Smu Cards Column - Asymmetrical spanning (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          {filteredData.length === 0 ? (
            <div className="p-8 rounded-lg bg-[#141414]/40 text-center">
              <p className="text-gray-500 font-mono text-sm">DATA TIDAK DITEMUKAN</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredData.map((item, index) => {
                const isActive = item.id === selectedId;
                // Anti-grid custom styles (asymmetrical sizing pattern)
                const isAlternativeItem = index % 3 === 0;
                return (
                  <AsymmetricCard
                    key={item.id}
                    id={item.id}
                    code={`SMU-${item.stats.established || '50'}`}
                    title={item.name}
                    subtitle={item.alias}
                    category={item.category}
                    isActive={isActive}
                    onClick={() => setSelectedId(item.id)}
                    className={`${isAlternativeItem ? 'md:col-span-2' : 'col-span-1'}`}
                  >
                    <p className="text-gray-300 text-xs leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3 text-[11px] font-mono text-brand-bright/90">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> Est. {item.stats.established}
                      </span>
                      <span className="px-1.5 py-0.5 select-none rounded bg-brand-deep/40 text-[9px]">
                        Akreditasi {item.stats.accreditation}
                      </span>
                    </div>
                  </AsymmetricCard>
                );
              })}
            </div>
          )}
        </div>

        {/* Dynamic Studio Inspection Right Panel - Spacey and details rich (lg:col-span-5) */}
        <div className="lg:col-span-5 lg:sticky lg:top-8">
          <div className="relative">
            
            <div className="relative z-10 bg-[#121212]/90 p-6 rounded-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4 justify-between pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-brand-bright" size={18} />
                  <span className="text-xs font-mono text-gray-400">SMU DETAIL CONSOLE</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono text-brand-bright bg-brand-deep/40">
                  ID: {activeSmu.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-white leading-tight">
                {activeSmu.name}
              </h3>
              <p className="text-xs text-brand-bright font-mono mt-1 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-bright" />
                {activeSmu.alias} • Kategori {activeSmu.category}
              </p>

              {/* Main long description - preserve precise details requested */}
              <div className="p-4 bg-[#0a0a0a]/60 rounded-lg text-xs leading-relaxed font-sans font-light text-gray-300 mb-6">
                {activeSmu.longDescription}
              </div>

              {/* Unique stats alignment inside technical borders */}
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest text-brand-bright uppercase mb-2">
                  Spesifikasi Institusi
                </div>
                
                <div className="grid grid-cols-3 gap-3 p-3 rounded-lg bg-[#0a0a0a]/50">
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-gray-400 uppercase">Akreditasi</div>
                    <div className="text-sm font-display font-bold text-white mt-1">
                      {activeSmu.stats.accreditation}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-gray-400 uppercase">Tahun Berdiri</div>
                    <div className="text-sm font-display font-bold text-white mt-1">
                      {activeSmu.stats.established}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[9px] font-mono text-gray-400 uppercase">Populasi</div>
                    <div className="text-sm font-display font-bold text-white mt-1">
                      {activeSmu.stats.studentCount || 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements / Point List */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-brand-bright uppercase mb-3 flex items-center gap-1">
                  <Award size={12} /> Pilar Keunggulan Akademik
                </div>
                <ul className="space-y-3">
                  {activeSmu.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-normal">
                      <CheckCircle size={14} className="text-[#D53E0F] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 flex justify-between text-[8px] font-mono text-gray-600">
                <span>SECTOR_05_EDU</span>
                <span>LAT -5.1476 // LON 119.4327</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
