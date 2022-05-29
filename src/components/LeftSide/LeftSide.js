import FollowersCard from "./FollowersCard/FollowersCard";
import "./LeftSide.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./SearchBar/SearchBar";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <SearchBar />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default LeftSide;
