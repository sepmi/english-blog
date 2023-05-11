import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Skills from "./components/Skills";
import SocialsInfo from "./components/SocialsInfo";
import UserComments from "./components/UserComments";

function App() {
  return (
    <div className="m-0">
      <Navbar />
      <Header />
      <Posts />
      <Skills />
      <UserComments />
      <SocialsInfo />
    </div>
  );
}

export default App;
