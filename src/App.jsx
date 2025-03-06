import React from 'react';
import HeroComponent from './hero/HeroComponent';
import Section2 from './section2/section2';
import About1 from './aboutSection/about1';
import About2 from './aboutSection/about2';
import ProjectSection from './projects_section/projects_section';
import Footer from './footer/footer';
function App() {
  return (
    <div>
      <HeroComponent />
      <Section2  />
      {/* About Section */}
 
      <About1 />
<div className="hidden md:block">
  <About2 />
</div>

      {/* Projects Section */}
      <ProjectSection />
      {/* <section id="projects" className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-black">Our Projects</h2>
      </section> */}

      {/* Contact Section */}
      <section id="contact" >
      <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
