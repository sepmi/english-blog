import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Skills from "./components/Skills";
import UserComments from "./components/UserComments";

function App() {
  return (
    <div className="m-0">
      <Navbar />
      <Header />
      <Posts />
      <Skills />
      <UserComments />
    </div>
  );
}

export default App;
