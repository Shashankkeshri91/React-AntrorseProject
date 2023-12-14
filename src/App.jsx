import NavBar from "./NavBar";
import Content from "./content";
import LeftSidebar from "./leftSidebar";
import RightSideBar from "./rightSidebar";
import Footer from "./footer";

function App() {
  return (
    <div>
      <LeftSidebar />
      <RightSideBar />
      <NavBar />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
