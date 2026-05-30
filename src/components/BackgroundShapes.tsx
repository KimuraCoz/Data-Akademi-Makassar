import React from 'react';

export const BackgroundShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#050102]">
      {/* Structural Forms Studio Grid Backdrop */}
      <div className="absolute inset-0 studio-grid opacity-75" />
      <div className="absolute inset-0 studio-dots opacity-45" />

      {/* Floating Fluid Shape 1 - Dark Crimson Deep */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-deep/30 blur-[120px] pointer-events-none animate-fluid-1" />

      {/* Floating Fluid Shape 2 - Bright Vermilion Spark */}
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] rounded-full bg-brand-bright/15 blur-[140px] pointer-events-none animate-fluid-2" />

      {/* Floating Fluid Shape 3 - Pure Medium Red Core */}
      <div className="absolute top-[50%] left-[40%] w-[35vw] h-[35vw] max-w-[380px] max-h-[380px] rounded-full bg-[#9B0F06]/20 blur-[130px] pointer-events-none animate-fluid-1" style={{ animationDelay: '-6s' }} />

      {/* Modern architectural form lines that cross the screen occasionally for high-impact Studio design */}
      <div className="absolute top-1/4 left-0 w-full h-[0.5px] bg-brand-medium/10 hidden lg:block" />
      <div className="absolute top-2/3 left-0 w-full h-[0.5px] bg-brand-medium/5 hidden lg:block" />
      <div className="absolute left-[30.5%] top-0 h-full w-[0.5px] bg-brand-medium/10 hidden lg:block" />
      <div className="absolute left-[65.5%] top-0 h-full w-[0.5px] bg-brand-medium/5 hidden lg:block" />
    </div>
  );
};
