import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsSection from "@/components/home/AnnouncementsSection";
import StatsSection from "@/components/home/StatsSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsSection />
    <AnnouncementsSection />
    <QuickLinksSection />
  </Layout>
);

export default Index;
