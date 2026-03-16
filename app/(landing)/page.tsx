import HeroSection from "./components/herosection";
import CompanyProfile from "./components/companyprofile";
import Solusi from "./components/solusi";
import Testimoni from "./components/testimoni"
import Artikel from "./components/artikel"

export const runtime = 'edge';

export default function Home() {
  return (
  <main>
  <HeroSection/>
  <CompanyProfile />
  <Solusi />
  <Testimoni />
  <Artikel />
  </main>
  );
}
