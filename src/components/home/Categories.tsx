import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

import cateimg from "../../assets/images/Vegetable.jpg";

function Categories() {
  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
  };

  return (
    <section className="mt-10 px-4">
      <h1 className="mb-8 text-center text-4xl font-medium text-lime-700">
        Categories
      </h1>
      <div className="overflow-hidden [&_div.slick-track]:flex [&_div.slick-track]:gap-4">
        <Slider {...settings}>
          <div className="w-44 text-center">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="rounded-xl border-[1px] border-gray-200 p-2"
              />
              <h4 className="mt-2">Vegetable</h4>
            </Link>
          </div>
          <div className="w-44 text-center">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="rounded-xl border-[1px] border-gray-200 p-2"
              />
              <h4 className="mt-2">2</h4>
            </Link>
          </div>
          <div className="w-44 text-center">
            <Link to="/shop">
              <img
                src={cateimg}
                alt=""
                className="rounded-xl border-[1px] border-gray-200 p-2"
              />
              <h4 className="mt-2">3</h4>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Categories;
