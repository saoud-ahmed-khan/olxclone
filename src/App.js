import './App.css';
import { Header } from "../src/components/Header/Header";
import { MiniCat } from "./components/MiniCat/MiniCat";
import { Banner } from "./components/Banner/Banner";
import { FeaturedItems } from "../src/components/Featured items/FeaturedItems";
import { Fresh  } from "../src/components/FreshRecomendation/Fresh";
function App() {

  return (
    <div>
     <Header/>
     <MiniCat/>
     <Banner/>
     <FeaturedItems/>
     <Fresh/>
    </div>
  );
}

export default App;
