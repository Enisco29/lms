import CallToAction from "../../components/students/CallToAction";
import Companies from "../../components/students/Companies";
import Coursesection from "../../components/students/Coursesection";
import Footer from "../../components/students/Footer";
import Hero from "../../components/students/Hero";
import Testimonials from "../../components/students/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies />
      <Coursesection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
