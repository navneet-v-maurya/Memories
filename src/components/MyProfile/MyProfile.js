import LeftSide from "./LeftSide/LeftSide";
import Middle from "./Middle/Middle";
import RightSide from "./RightSide/RightSide";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <div className="MyProfile">
      <LeftSide />
      <Middle />
      <RightSide />
    </div>
  );
};

export default MyProfile;
