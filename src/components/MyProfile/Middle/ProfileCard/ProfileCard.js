import cover from "../../../../images/mountain.jpg";
import profilePhoto from "../../../../images/navneet.jpg";
import "./MiddleProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="profileImages">
        <img src={cover} alt="coverPhoto" />
        <img src={profilePhoto} alt="profilePhoto" />
      </div>

      <div className="profileName">
        <span>Navneet Maurya</span>
        <span>Full Stack MERN Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>5268</span>
            <span>Followings</span>
          </div>

          <div className="verticalLine"></div>

          <div className="follow">
            <span>2</span>
            <span>Followers</span>
          </div>

          <div className="verticalLine"></div>

          <div className="numberOfPosts">
            <span>2</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProfileCard;
