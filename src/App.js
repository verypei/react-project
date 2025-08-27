import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppPricings from "./components/pricings";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricings />
        <AppBlog />
        <AppContact />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
