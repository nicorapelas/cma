import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import WhyChoose from '../components/home/WhyChoose';
import Curriculum from '../components/home/Curriculum';
import ExtraMurals from '../components/home/ExtraMurals';
import Quote from '../components/home/Quote';
import CTABar from '../components/home/CTABar';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChoose />
      <Curriculum />
      <ExtraMurals />
      <Quote />
      <CTABar />
    </>
  );
}
