import Button from "../../ui/button/Button";

function BannerBottom() {
  return (
    <section
      className="mt-10 bg-[url('./assets/images/banner2.jpg')] bg-cover bg-center
      pb-56 pt-36 text-center"
    >
      <h4 className="uppercase">Organic farming standards</h4>
      <h1 className="mb-10 mt-7 text-4xl font-semibold text-lime-700 md:text-6xl">
        Learn about organic <br /> vegetables
      </h1>
      <Button to="/shop" type="primary">
        Shop Now
      </Button>
    </section>
  );
}

export default BannerBottom;
