import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import Photo from "../../../images/mountain.jpg";
import "./Posts.css";

const Posts = () => {
  return (
    <>
      <div className="Post">
        <img src={Photo} />
        <div className="LikeComponents">
          <FcLikePlaceholder />
          <FaRegCommentDots />
          <BiShare />
        </div>
        <span>23000 likes</span>
        <span> Harshu Happy birthday!!</span>
      </div>

      <div className="Post">
        <img src={Photo} />
        <div className="LikeComponents">
          <FcLikePlaceholder />
          <FaRegCommentDots />
          <BiShare />
        </div>
        <span>23000 likes</span>
        <span> Harshu Happy birthday!!</span>
      </div>
    </>
  );
};

export default Posts;
