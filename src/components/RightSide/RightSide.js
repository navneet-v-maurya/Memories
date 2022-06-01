import RightNav from "./RightNav/RightNav";
import Trends from "./Trends/Trends";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <RightNav />
      <Trends />
    </div>
  );
};

export default RightSide;
