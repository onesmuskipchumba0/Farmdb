import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import QuickLinks from "@/components/home/QuickLinks";
import AboutPreview from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <QuickLinks />
      <Features />
      <AboutPreview />
    </main>
  );
}
