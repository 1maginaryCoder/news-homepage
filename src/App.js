import Navbar from "../Components/Navbar";
import Article from "../Components/Article";
import NewsTracker from "../Components/NewsTracker";
import Footer from "../Components/Footer";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <div className="flex-col md:flex md:flex-row justify-evenly p-5">
        <Article />
        <NewsTracker />
      </div>
      <Footer />
    </div>
  );
}
