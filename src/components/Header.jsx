import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../App.css";
import { data } from "../utlities/data";
import whiteHouse from "../assets/whiteHome.avif";
import HomeCards from "./HomeCards";

const Header = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <div
        className="appHeader flex justify-start items-center "
        // data-aos="fade-up"
      >
        <div className="w-1/2 h-[600px] content-center text-center">
          <h1 className="text-5xl font-black p-2">Let us find your</h1>
          <h1 className="text-5xl font-black text-white p-2">Forever Food.</h1>
          <p className="max-w-[80%] mx-auto p-4 text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex w-full justify-center">
            <button className="h-[44px] w-40 bg-btnRed mx-2 text-white rounded-md">
              Search Now
            </button>
            <button className="h-[44px] w-40 bg-white mx-2 text-btnRed rounded-md">
              Know more
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center  p-8">
        <img className="w-1/2" src={whiteHouse} alt="whiteHouseImg" />
        <div className="p-20">
          <h1 className="text-3xl font-medium p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h1>
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button className="mt-4 h-[44px] w-40 bg-mainBlue mx-2 text-white rounded-sm border border-mainBlue hover:bg-white hover:text-mainBlue">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {data.map((ele, id) => {
          return <HomeCards ele={ele} key={id} />;
        })}
      </div>
    </>
  );
};

export default Header;
