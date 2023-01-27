import "./App.css";
import Header from "./assets/layouts/header";
import HomePage from "./assets/pages/home-page";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./assets/pages/detail-page";
import Footer from "./assets/layouts/footer";
import WishList from "./assets/pages/wishlist-page";
import AddFlower from "./assets/pages/addflowerPage";
import NotFound from "./assets/pages/notFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/detailPage/:id"} element={<DetailPage />}></Route>
        <Route path={"/wishList"} element={<WishList />}></Route>
        <Route path={"/addData"} element={<AddFlower />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
