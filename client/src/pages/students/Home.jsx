import Companies from "../../components/students/Companies";
import Coursesection from "../../components/students/Coursesection";
import Hero from "../../components/students/Hero";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center">
      <Hero />
      <Companies/>
      <Coursesection/>
    </div>
  );
};

export default Home;
