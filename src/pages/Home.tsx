
import HeroSection from '../components/HeroSection';
import WhyChooseMimic from '../components/WhyChooseMimic';

const Home: React.FC = () => (
  <div className="bg-[#f5f5fb] min-h-screen">
    <HeroSection />
    
    {/* Why Choose Section */}
    <WhyChooseMimic />
    {/* Case Studies Section */}
    <section className="py-16">Case Studies Section</section>
    {/* Testimonials Section */}
    <section className="py-16">Testimonials Section</section>
    {/* CTA Section */}
    <section className="py-16">Large CTA Section</section>
  </div>
);

export default Home;
