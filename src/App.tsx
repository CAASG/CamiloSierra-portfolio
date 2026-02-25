import SpotlightBackground from "./components/layout/SpotlightBackground";
import MobileHeader from "./components/layout/MobileHeader";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative">
      <SpotlightBackground />
      <MobileHeader />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />

            <footer className="max-w-md pb-16 text-sm text-muted sm:pb-0">
              <p>
                Designed & built by{" "}
                <span className="text-body">Camilo Sierra</span> with{" "}
                <a
                  href="https://react.dev"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
                {" & "}
                <a
                  href="https://www.framer.com/motion/"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Framer Motion
                </a>
                . Deployed on{" "}
                <a
                  href="https://vercel.com"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
