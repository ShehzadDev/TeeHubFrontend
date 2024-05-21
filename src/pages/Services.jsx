import Nav from "../components/Nav";
import HeroServies from "../components/HeroServices";
import Footer from "../components/Footer";
import OrderProcessing from "../components/OrderProcessing";
import BulkOrdersDiscount from "../components/DiscountCard";
import Accordion from "../components/Accordion";
import ContactUs from "../components/ContactUs";
import LiveChat from "../components/LiveChat";

function Home() {
  function generateLoremPicsumImageLinks() {
    const imageLinks = [];
    for (let i = 0; i < 5; i++) {
      const imageUrl = `https://picsum.photos/id/${i}/1920/800`; // Adjust dimensions as needed
      imageLinks.push(imageUrl);
    }
    return imageLinks;
  }

  const imageLinks = generateLoremPicsumImageLinks(5); // Generate 5 image links

  return (
    <div>
      <Nav />
      <HeroServies />
      <OrderProcessing />
      <div className="container mx-auto">
        <div className="mx-20">
          <BulkOrdersDiscount />
        </div>
      </div>
      <Accordion />
      <div className="container flex mx-auto ps-32 justify-center my-20">
        <ContactUs />
        <LiveChat />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
