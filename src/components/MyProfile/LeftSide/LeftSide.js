import SearchBar from "../../LeftSide/SearchBar/SearchBar";
import FollowersCard from "../../LeftSide/FollowersCard/FollowersCard";
import InfoCard from "./InfoCrard/InfoCard";
import "./LeftSide.css";
const LeftSide = () => {
  return (
    <div className="LeftSide">
      <SearchBar />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default LeftSide;
