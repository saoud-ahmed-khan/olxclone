import './App.css';
import { Header } from "../src/components/Header/Header";
import { MiniCat } from "./components/MiniCat/MiniCat";
// import { Banner } from "./components/Banner/Banner";
// import { FeaturedItems } from "../src/components/Featured items/FeaturedItems";
// import { Footer } from "./components/Footer/Footer";
// import { Fresh  } from "../src/components/FreshRecomendation/Fresh";
// import { Login } from "./components/Login/Login";
import { Signup } from "./components/signup/Signup";
function App() {

  return (
    <div>
     <Header/>
     <MiniCat/>
     {/* <Banner/>
     <FeaturedItems/>
     <Fresh/>
     <Footer/> */}
     {/* <Login/> */}
     <Signup/>
    </div>
  );
}

export default App;
