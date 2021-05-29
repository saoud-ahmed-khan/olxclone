import './App.css';
import { Header } from "../src/components/Header/Header";
import { MiniCat } from "./components/MiniCat/MiniCat";
import { Banner } from "./components/Banner/Banner";
function App() {

  return (
    <div>
     <Header/>
     <MiniCat/>
     <Banner/>
    </div>
  );
}

export default App;
