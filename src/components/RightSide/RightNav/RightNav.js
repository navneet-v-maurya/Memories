import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { SiCodesandbox } from "react-icons/si";
import "./RightNav.css";

const RightNav = () => {
  return (
    <div className="nav">
      <SiCodesandbox />
      <AiOutlineSetting />
      <IoIosNotificationsOutline />
      <AiOutlineMessage />
    </div>
  );
};

export default RightNav;
