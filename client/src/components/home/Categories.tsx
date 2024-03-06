import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cateimg from "../../assets/images/Vegetable.jpg";

function Categories() {
  const settings: Settings = {
    arrows: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          draggable: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="mt-10 px-4 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-medium text-lime-700 md:text-left">
        Categories
      </h1>
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-40 text-center sm:w-44 lg:w-52 ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Categories;
