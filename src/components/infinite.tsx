

// Remove Next.js Image import
import * as React from 'react';
import { motion } from "framer-motion";


import acmeLogo from './../logos/airbnb.svg';
import quantumLogo from './../logos/apple.svg';
import echoLogo from './../logos/disney.svg';
import celestialLogo from './../logos/sass.svg';
import pulseLogo from './../logos/quora.svg';
import apexLogo from './../logos/samsung.svg';

const CompanyLogoData: Array<{ src: any; alt: string }> = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
];

const InfiniteScrollingLogosAnimation = () => {
    return (
      
          
          <div className="max-w-5xl mx-auto relative flex overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 
        before:bg-gradient-to-r before:from-[#f1f5f9] before:via-[#f1f5f9]/70 before:to-transparent 
        before:content-[''] 
        after:absolute after:right-0 after:top-0 after:h-full after:w-24 
        after:bg-gradient-to-l after:from-[#f1f5f9] after:via-[#f1f5f9]/70 after:to-transparent 
        after:content-['']">
            <motion.div
              transition={{
                duration: 15,
                ease: 'linear',
                repeat: Infinity,
              }}
              initial={{ translateX: 0 }}
              animate={{ translateX: '-50%' }}
              className="flex flex-none gap-12 pr-12"
            >
              {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                  {CompanyLogoData.map(({ src, alt }) => (
                    <img
                      key={alt}
                      src={src}
                      alt={alt}
                      className="h-10 w-auto flex-none opacity-200 grayscale"
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        
    )};
  
    export default InfiniteScrollingLogosAnimation;
