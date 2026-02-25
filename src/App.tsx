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

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-muted sm:pb-0">
              <p>
                Loosely designed and coded by{" "}
                <span className="text-body">Camilo Sierra</span>.
                Built with{" "}
                <a
                  href="https://react.dev"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  className="font-medium text-body hover:text-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed with{" "}
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
