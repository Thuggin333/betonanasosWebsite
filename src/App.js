import  Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header"
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
