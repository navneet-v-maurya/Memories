import FollowersCard from "./FollowersCard/FollowersCard";
import "./LeftSide.css";
import LeftProfileCard from "./ProfileCard/LeftProfileCard";
import SearchBar from "./SearchBar/SearchBar";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <SearchBar />
      <LeftProfileCard />
      <FollowersCard />
    </div>
  );
};

export default LeftSide;
