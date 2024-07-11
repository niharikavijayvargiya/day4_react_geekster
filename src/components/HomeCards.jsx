import ProtoTypes from "prop-types";
import profileImage from "../assets/profile.avif";

const HomeCards = ({ ele }) => {
  const { content, image, name, position } = ele;
  console.log(image);
  return (
    <div className="w-1/3 p-12">
      <p>{content}</p>

      <div className="flex py-4 mt-6">
        <div>
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="font-normal">{position}</p>
        </div>
      </div>
    </div>
  );
};

HomeCards.propTypes = {
  ele: ProtoTypes.object,
};

export default HomeCards;
