import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import "./App.css";
import MyContainer from "./components/MyContainer";
import MyGallery from "./components/MyGallery";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNavbar />
      <MyContainer />
      <Container fluid className="px-4 film bg-dark">
        <h4 className="text-white mb-3">Trending Now</h4>
        <MyGallery name="Batman" />

        <h4 className="text-white mb-3 mt-3">Watch it Again</h4>
        <MyGallery name="Dragon Ball" />

        <h4 className="text-white mb-3 mt-3">New Releases</h4>
        <MyGallery name="Harry Potter" />

        <MyFooter />
      </Container>
    </>
  );
}

export default App;
