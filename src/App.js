import  Home from "./components/Home";
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import Header from "./pages/Header"
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <AboutUs/>
    </div>
  );
}

export default App;
