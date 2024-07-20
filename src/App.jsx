import Footer from "./layouts/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <div className="container vh-90">
        <div
          className="d-flex justify-content-center"
          style={{ minHeight: "580px" }}
        >
          <Home />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
