import Carousel from "../components/Carousel";
import Nav from "../components/Nav";

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
    </div>
  );
}
export default Home;
