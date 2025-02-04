import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
// import Footer from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="dark:bg-dark relative min-h-screen">
      {/* Move ThemeToggle to the right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Intro />
      <Portfolio />
      <Timeline />
    </main>
  );
}
