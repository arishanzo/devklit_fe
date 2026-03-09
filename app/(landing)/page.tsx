import HeroSection from "./components/herosection";
import CompanyProfile from "./components/companyprofile";
import Solusi from "./components/solusi";
import Testimoni from "./components/testimoni"


export default function Home() {
  return (
  <main>
  <HeroSection/>
  <CompanyProfile />
  <Solusi />
  <Testimoni />
  </main>
  );
}
