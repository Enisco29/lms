import Companies from "../../components/students/Companies";
import Coursesection from "../../components/students/Coursesection";
import Hero from "../../components/students/Hero";
import Testimonials from "../../components/students/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies/>
      <Coursesection/>
      <Testimonials/>
    </div>
  );
};

export default Home;
