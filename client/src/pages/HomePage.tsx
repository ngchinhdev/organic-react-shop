import BannerBottom from "../components/home/BannerBottom";
import BannerTop from "../components/home/BannerTop";
import Categories from "../components/home/Categories";
import FeaturedBlogs from "../components/home/FeaturedBlogs";
import ProductsFilter from "../components/home/ProductsFilter";

function HomePage() {
  return (
    <>
      <BannerTop />
      <Categories />
      <ProductsFilter />
      <FeaturedBlogs />
      <BannerBottom />
    </>
  );
}

export default HomePage;
