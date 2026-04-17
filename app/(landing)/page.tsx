import HeroSection from "./components/herosection";
import CompanyProfile from "./components/companyprofile";
import Solusi from "./components/solusi";
import Testimoni from "./components/testimoni";
import ArtikelPage from "./components/artikel";

import Portofolio from "./components/portofolio";
import Product from "./components/product";
import FormContact from "./components/formContact";

export const runtime = 'edge';

export default function Home() {
  return (
  <main>
  <HeroSection/>
  <CompanyProfile />
  <Solusi />
  <Product />
  <Testimoni />
  <FormContact />
  < ArtikelPage/>
  </main>
  );
}
