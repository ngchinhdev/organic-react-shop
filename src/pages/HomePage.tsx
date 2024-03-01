import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Header from "../ui/header";

function HomePage() {
  return (
    <div className="h-[10000px]">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default HomePage;
