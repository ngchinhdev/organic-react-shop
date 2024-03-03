import BannerBottom from "../components/home/BannerBottom";
import BannerTop from "../components/home/BannerTop";
import Categories from "../components/home/Categories";
import FeaturedBlogs from "../components/home/FeaturedBlogs";
import ProductsFilter from "../components/home/ProductsFilter";
import Header from "../ui/header";

function HomePage() {
  return (
    <div className="h-[10000px]">
      <Header />
      <BannerTop />
      <Categories />
      <ProductsFilter />
      <FeaturedBlogs />
      <BannerBottom />
    </div>
  );
}

export default HomePage;
