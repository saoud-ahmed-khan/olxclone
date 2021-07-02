import "./App.css";
import { Home } from "../src/components/pages/Home";
import { Route } from "react-router-dom";
// import { FeaturedItems } from "../src/components/Featured items/FeaturedItems";
import { Footer } from "./components/Footer/Footer";
// import { Fresh  } from "../src/components/FreshRecomendation/Fresh";
import { Login } from "./components/Login/Login";
import { AddPosting } from "./components/AddPosting/AddPosting";
import { Signup } from "./components/signup/Signup";
import { AddPostForm } from "./components/AddPostform/AddPostForm";
import { Header } from "../src/components/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Home />
        <Login />
      </Route>
      <Route path="/signup">
        <Home />
        <Signup />
      </Route>
      <Route path="/catagories">
        <AddPosting />
      </Route>
      <Route path="/selling">
        <AddPosting />
      </Route>
      <Route path="/selling/:productname">
        <AddPostForm />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
