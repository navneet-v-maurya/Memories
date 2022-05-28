import LeftSide from "./LeftSide/LeftSide";
import Middle from "./Middle/Middle";
import RightSide from "./RightSide/RightSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  );
};

export default Home;
