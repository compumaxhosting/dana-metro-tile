import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ServiceHero from "@/components/services-page-components/ServiceHero";
import ServicePageServices from "@/components/services-page-components/ServicePageServices";
import Topbar from "@/components/layout/Topbar";
import MobileContactEasy from "@/components/layout/MobileContactEasy";

export default function services() {
  return (
    <>
    <Topbar/>
    <Header/>
    <ServiceHero />
    <ServicePageServices />
    <MobileContactEasy />
    <Footer />
    </>
  );
}
