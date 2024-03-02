import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cateimg from "../../assets/images/Vegetable.jpg";

function Categories() {
  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
      <h1 className="mb-8 text-center text-4xl font-medium text-lime-700">
        Categories
      </h1>
      <div className="overflow-hidden [&_.slick-slide]:w-44 md:[&_.slick-slide]:w-56 [&_.slick-track]:flex [&_.slick-track]:gap-4">
        <Slider {...settings}>
          <div className="w-44 text-center ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-44 text-center ">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="w-full rounded-xl border-[1px] border-gray-200 p-2 hover:border-lime-800 md:w-56"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-44 text-center ">
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
