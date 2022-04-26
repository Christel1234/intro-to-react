import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header greeting="Hello World" />
      <Footer companyName="Dunder Mifflin" />
    </div>
  );
}

export default App;
