import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import Method from '@/components/sections/Method';
import Expertise from '@/components/sections/Expertise';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroBanner />
      <Method />
      <div id="expertise">
        <Expertise />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
