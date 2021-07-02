import './App.css';
import { Header } from "../src/components/Header/Header";
// import { MiniCat } from "./components/MiniCat/MiniCat";
// import { Banner } from "./components/Banner/Banner";
// import { FeaturedItems } from "../src/components/Featured items/FeaturedItems";
// import { Footer } from "./components/Footer/Footer";
// import { Fresh  } from "../src/components/FreshRecomendation/Fresh";
// import { Login } from "./components/Login/Login";
// import { AddPosting } from "./components/AddPosting/AddPosting";
// import { Signup } from "./components/signup/Signup";
import { AddPostForm} from "./components/AddPostform/AddPostForm";
function App() {

  return (
    <div>
     <Header/>
     <AddPostForm/>
     {/* <MiniCat/>
     <Banner/>
     <FeaturedItems/>
     <Fresh/>
     <Footer/> */}
     {/* <Signup/> */}
   
    </div>
  );
}

export default App;
