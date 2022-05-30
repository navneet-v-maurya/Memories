import Posts from "./Posts/Posts";
import PostShare from "./PostShare/PostShare";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="Middle">
      <PostShare />
      <Posts />
    </div>
  );
};

export default Middle;
