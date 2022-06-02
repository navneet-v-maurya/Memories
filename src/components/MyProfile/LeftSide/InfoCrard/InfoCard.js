import "./InfoCard.css";
import { GrEdit } from "react-icons/gr";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="editInfo">
        <span>Your Info</span>
        <GrEdit />
      </div>
      <div className="Info">
        <span>
          Status <span>Single </span>
        </span>
        <span>
          Lives in <span>Spain</span>
        </span>
        <span>
          Works at <span>Google</span>
        </span>
      </div>
      <button>Log Out</button>
    </div>
  );
};

export default InfoCard;
