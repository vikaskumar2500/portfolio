import { memo, type CSSProperties } from 'react';
import Image from 'next/image';

import universe from '../img/universe.webp';
import galaxy from '../img/galaxy.webp';

interface GalaxyProps {
  className?: string;
}

const perspectiveStyle = {
  transformStyle: 'preserve-3d',
  transform: 'perspective(50em) rotateX(-120deg) rotateY(20deg)',
} as const;

export const GalaxyHeader = memo(({ className = '' }: GalaxyProps) => (
  <div
    className={`relative h-[500px] max-h-[60vh] w-full overflow-hidden bg-base-100 grayscale filter ${className}`}
  >
    <div
      className="absolute inset-0 h-full w-full animate-fadeIn bg-[url('/img/universe.webp')] object-cover object-center opacity-0"
      style={{ '--opacityTo': 0.75 } as CSSProperties}
    />

    {/* NebulaeWrapper */}
    <div className="absolute left-[50%] top-[50%] z-0 h-[800px] w-[800px] translate-x-[-50%] translate-y-[calc(-50%-50px)] bg-transparent">
      {/* Nebulae */}
      <div
        style={perspectiveStyle}
        className="h-[800px] w-[800px] animate-fadeIn bg-[radial-gradient(circle,_rgba(255,_218,_185,_1),_rgba(0,_0,_139,_1),_transparent_70%)] opacity-0"
      />
    </div>

    {/* GalaxyContainer */}
    <div className="absolute left-[50%] top-[50%] z-10 h-[800px] w-[800px] translate-x-[-50%] translate-y-[calc(-50%-50px)] bg-transparent">
      <div
        style={{ ...perspectiveStyle, '--opacityTo': 0.9 } as CSSProperties}
        className="animate-fadeIn opacity-0"
      >
        {/* Galaxy */}
        <Image
          src={galaxy}
          placeholder="empty"
          alt="Galaxy"
          width={800}
          height={800}
          className="animate-rotate overflow-hidden rounded-full object-cover object-center will-change-transform"
          priority={false}
        />
      </div>
    </div>
  </div>
));

GalaxyHeader.displayName = 'GalaxyHeader';
