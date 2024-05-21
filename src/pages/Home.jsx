import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import VidePlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";
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
      <Carousel images={imageLinks} />
      <Slider images={imageLinks} />
      <VidePlayer />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;
