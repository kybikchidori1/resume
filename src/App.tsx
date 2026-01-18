;
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main font-sans selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
