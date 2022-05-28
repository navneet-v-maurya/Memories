import "./SearchBar.css";
import logo from "../../../images/memories.jpg";
import { FcSearch, FcStackOfPhotos } from "react-icons/fc";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <FcStackOfPhotos className="l-icon" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <FcSearch className="s-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
