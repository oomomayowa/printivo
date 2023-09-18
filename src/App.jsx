import Print from "./Component/Print";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Card from "./Component/Card";
import Logo from "./Component/Logo";
import Comment from "./Component/Comment";

function App() {
  return (
    <>
      <div style={{overflowX: 'hidden'}}>
        <Print />
        <Body />
        <Card />
        <Logo />
        <Comment />
        <Footer />
      </div>
    </>
  );
}

export default App;
