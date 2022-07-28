import Navbar from 'components/Navbar';
import About from 'components/About';
import Skills from 'components/Skills';
import Academic from 'components/Academic';
import Experience from 'components/Experience';
import Contact from 'components/Contact';

function App() {
  return (
    <div className=' min-h-screen bg-white'>
      <Navbar />
      <About />
      <Skills />
      <Academic />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
