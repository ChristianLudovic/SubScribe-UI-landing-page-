import './App.css';
import { DashboardPresentationSection } from './components/sections/DashboardPresentationSection';
import { FeatureSection } from './components/sections/featureSection';
import { HeroSection } from './components/sections/heroSection';
import { SponsorSection } from './components/sections/sponsor';
import { Testimonial } from './components/sections/testimonial';
import { TrySubScribeSection } from './components/sections/trySubScribe';


function App() {
  return (
    <div className="App">
      <HeroSection/>
      <SponsorSection/>
      <DashboardPresentationSection/>
      <FeatureSection/>
      <Testimonial/>
      <TrySubScribeSection/>
    </div>
  );
}

export default App;
