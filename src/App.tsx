import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import Overlay from './components/Overlay';

export default function App() {
  return (
    <main className="w-full text-white relative">
      {/* Fixed animated background at z-0 */}
      <ScrollyCanvas />
      
      {/* All content at z-10, above the canvas */}
      <div className="relative w-full" style={{ zIndex: 10 }}>
        <Overlay />
        <Projects />
      </div>
    </main>
  );
}
