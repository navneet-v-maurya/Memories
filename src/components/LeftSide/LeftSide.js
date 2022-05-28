import "./LeftSide.css";
import ProfileCard from "./ProfileCard/ProfileCard";
import SearchBar from "./SearchBar/SearchBar";

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <SearchBar />
      <ProfileCard />
    </div>
  );
};

export default LeftSide;
