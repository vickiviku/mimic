
import LayoutWrapper from "./layoutwrapper";
import CardHoverPopout from './cardholder';
import CardHolder from './cardholder';
import InfiniteScrollingLogosAnimation from './infinite';

const HeroSection: React.FC = () => (
  <LayoutWrapper>
    <section className="flex flex-col bg-[#f1f5f9] items-center justify-center py-20 px-4 text-center ">
    <div className="mb-6">
      <span className="inline-block px-4 py-1 rounded-full bg-[#e3e2fa] text-xs font-semibold tracking-wide text-[#3b3892]">Accepting Projects for April</span>
    </div>
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#20204c]">World-Class Design<br />For SaaS & Startups</h1>
    <p className="text-lg text-[#707684] mb-10 max-w-xl mx-auto">Design that converts, grows businesses,<br /> and delivers where it matters.</p>
    {<button className="relative inline-block px-6 py-3 rounded-[54.69px] border border-white/5 bg-[radial-gradient(35%_63%_at_50%_50%,_#6366f1_0%,_#4338ca_100%)] shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
       <span className="block text-center font-bold text-[16px] tracking-[-0.02em] bg-[radial-gradient(50%_50%_at_50%_50%,_#e0e7ff_0%,_#ffffff_100%)] bg-clip-text text-transparent font-[Manrope,sans-serif]">
    Book a Free Intro Call
        </span>
      </button>}
    
    {/* Add infinite logos under the CTA button */}
    <div className="w-full mt-20">
      <InfiniteScrollingLogosAnimation />
    </div>
     
    
    
   {/* Row 1 - Three Cards */}
  <div className="grid bg- grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
    {["Websites", "Mobile Apps", "Product Design"].map((title, i) => (
      <div key={i} className="flex   flex-col items-center w-[240px]">
        <CardHoverPopout />
        <h3 className="mt-4 text-xl font-semibold text-[#0f0c29] text-center">{title}</h3>
      </div>
    ))}
  </div>

  {/* Row 2 - Two Cards */}
  <div className="grid grid-cols-1  md:grid-cols-2 gap-20 place-items-center -mt-10 ">
    {["Logo Design", "Branding"].map((title, i) => (
      <div key={i} className="flex   flex-col items-center w-[240px]">
        <CardHoverPopout />
        <h3 className="mt-4 text-xl font-semibold text-[#0f0c29] text-center">{title}</h3>
      </div>
    ))}
  </div>

 



    </section>
  </LayoutWrapper>
);

export default HeroSection;
