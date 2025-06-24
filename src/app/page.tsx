import HeroSection from "../sections/home/hero-section"
import CounterSection from "../sections/home/counter-section"
import GalleryCarousel from "../sections/home/gallery-carousel"
import TestimonialsSection from "../sections/home/testimonials-section"
import BrandsCarousel from "../sections/home/brands-carousel"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CounterSection />
      <GalleryCarousel />
      <TestimonialsSection />
      <BrandsCarousel />
    </div>
  )
}
