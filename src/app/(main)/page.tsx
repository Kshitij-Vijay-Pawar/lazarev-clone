import Hero from "@/components/Homepage Sections/Hero";
import ParallaxSection from "@/components/Homepage Sections/ParallaxSection";
import StatsSection from "@/components/Homepage Sections/StatsSection";
import VideoSection from "@/components/Homepage Sections/VideoSection";
import Ourclients from "@/components/Homepage Sections/Ourclients"

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-bg">
      {/* Hero Section */}
      <Hero />
      
      {/* Video Showcase */}
      <VideoSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Parallax Section */}
      <ParallaxSection />
      
      <Ourclients />
      {/* Additional spacing for better visual flow */}
      <div className="h-20" />
    </main>
  );
}
