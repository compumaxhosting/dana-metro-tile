import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceHero from "@/components/ServiceHero";
import ServicePageServices from "@/components/ServicePageServices";
import Topbar from "@/components/Topbar";

export default function services() {
  return (
    <>
    <Topbar/>
    <Header/>
    <ServiceHero />
    <ServicePageServices />
    <Footer />
    </>
  );
}
