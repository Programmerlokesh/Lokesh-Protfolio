import AboutSextion from './components/About/AboutSextion';
import Footer from './components/Footer/Footer';
import ShootingIndex from './components/HeroSection/ShootingIndex';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <ShootingIndex />
      <AboutSextion />
      <Footer />
    </>
  );
}

export default App;
