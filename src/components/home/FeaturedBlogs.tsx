import { Link } from "react-router-dom";
import blogImage from "../../assets/images/blog.jpg";
import Button from "../../ui/button/Button";

function FeaturedBlogs() {
  return (
    <section className="mt-10 px-4 lg:px-8">
      <h1 className="mb-8 text-center text-4xl font-medium text-lime-700 md:text-left">
        Featured Blogs
      </h1>
      <div className="flex flex-col justify-center gap-5 sm:flex-row sm:justify-between ">
        <div className="shrink text-center">
          <Link to="/blogs">
            <img src={blogImage} alt="" className="rounded-2xl" />
            <h3 className="mx-auto w-[80%] overflow-hidden text-ellipsis pt-3 text-2xl font-medium text-lime-700">
              Growing vegetables in small spaces
            </h3>
            <p className="text-md mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              voluptates quas, animi dolorem harum atque sunt ratione inventore
              quos soluta excepturi, recusandae quis eaque amet rem? Inventore
              soluta cupiditate labore!
            </p>
          </Link>
        </div>
        <div className="shrink text-center">
          <Link to="/blogs">
            <img src={blogImage} alt="" className="rounded-2xl" />
            <h3 className="mx-auto w-[80%] overflow-hidden text-ellipsis pt-3 text-2xl font-medium text-lime-700">
              Growing vegetables in small spaces
            </h3>
            <p className="text-md mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              voluptates quas, animi dolorem harum atque sunt ratione inventore
              quos soluta excepturi, recusandae quis eaque amet rem? Inventore
              soluta cupiditate labore!
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button to="/shop" type="secondary">
          Read more
        </Button>
      </div>
    </section>
  );
}

export default FeaturedBlogs;
