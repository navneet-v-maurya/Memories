import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineSlowMotionVideo, MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "./PostShare.css";
import profilePhoto from "../../../images/navneet.jpg";

const PostShare = () => {
  return (
    <div className="PostShare">
      <div className="SearchBar">
        <img src={profilePhoto} alt="ProfilePhoto" />
        <input type="search" placeholder="Whats happenning?" />
      </div>
      <div className="shareComponents">
        <div className="PhotoComponent">
          <HiOutlinePhotograph />
          <span>Photo</span>
        </div>

        <div className="VideoComponent">
          <MdOutlineSlowMotionVideo />
          <span>Video</span>
        </div>

        <div className="LocationComponent">
          <GoLocation />
          <span>Location</span>
        </div>

        <div className="ScheduleComponent">
          <MdDateRange />
          <span>Schedule</span>
        </div>

        <div className="ShareButton">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
