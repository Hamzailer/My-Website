import NavBar from "./Components/Navbar";
import CustomCard from "./Components/CustomCard";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div>
      <NavBar />
      <br />
      <Row className="mx-auto">
        <CustomCard
          title="I Love You to the Moon And Back"
          image="https://i.imgur.com/HNPABJa.jpg"
          content='A sweet, gentle rhyme, perfect for sharing with a special little one that also includes a “To” and "From” personalization page in the front of the book, making this heartwarming book an ideal gift.'
          link="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518"
        />
        <br />
        <CustomCard
          title="I Love You to the Moon And Back"
          image="https://i.imgur.com/HNPABJa.jpg"
          content='A sweet, gentle rhyme, perfect for sharing with a special little one that also includes a “To” and "From” personalization page in the front of the book, making this heartwarming book an ideal gift.'
          link="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518"
        />
        <br />
        <CustomCard
          title="I Love You to the Moon And Back"
          image="https://i.imgur.com/HNPABJa.jpg"
          content='A sweet, gentle rhyme, perfect for sharing with a special little one that also includes a “To” and "From” personalization page in the front of the book, making this heartwarming book an ideal gift.'
          link="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518"
        />
        <br />
        <CustomCard
          title="I Love You to the Moon And Back"
          image="https://i.imgur.com/HNPABJa.jpg"
          content='A sweet, gentle rhyme, perfect for sharing with a special little one that also includes a “To” and "From” personalization page in the front of the book, making this heartwarming book an ideal gift.'
          link="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518"
        />
        <br />
        <CustomCard
          title="I Love You to the Moon And Back"
          image="https://i.imgur.com/HNPABJa.jpg"
          content='A sweet, gentle rhyme, perfect for sharing with a special little one that also includes a “To” and "From” personalization page in the front of the book, making this heartwarming book an ideal gift.'
          link="https://www.amazon.com/I-Love-You-Moon-Back/dp/1589255518"
        />
      </Row>
    </div>
  );
}

export default App;
