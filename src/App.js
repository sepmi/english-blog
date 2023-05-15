import AppLinks from "./components/AppLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import ShowCase from "./components/ShowCase";
import Skills from "./components/Skills";
import SocialsInfo from "./components/SocialsInfo";
import UserComments from "./components/UserComments";
import UserStory from "./components/UsersStory";
import VideoPosts from "./components/VideoPosts";

function App() {
  return (
    <div className="m-0 ">
      <Navbar />
      <Header />
      <Posts />
      <Skills />
      <UserComments />
      <SocialsInfo />
      <ShowCase />
      <VideoPosts />
      <UserStory />
      <AppLinks />
      <Footer />
    </div>
  );
}

export default App;
