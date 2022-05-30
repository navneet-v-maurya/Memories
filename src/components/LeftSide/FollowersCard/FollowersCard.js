import Profilephoto from "../../../images/navneet.jpg";
import "./FollowersCard.css";

const FollowersCard = () => {
  const followers = [
    {
      img: Profilephoto,
      name: "Harsh Rohit",
      userName: "@hrrshuu",
    },
    {
      img: Profilephoto,
      name: "Virat Kohli",
      userName: "@hV.Kohli",
    },
    {
      img: Profilephoto,
      name: "Rohit Sharma",
      userName: "@Sharma",
    },
    {
      img: Profilephoto,
      name: "Navneet Maurya",
      userName: "@navneet_m12",
    },
  ];

  return (
    <div className="followersCard">
      <span>Who is following you</span>
      <div className="followersList">
        {followers.map((follower) => {
          return (
            <div className="follower">
              <img src={follower.img} />
              <div className="followerDetails">
                <span>{follower.name}</span>
                <span>{follower.userName}</span>
              </div>
              <button className="followButton">Follow</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersCard;
