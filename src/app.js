import Navbar from "./Components/Navbar.js";
import Serachbar from "./Components/Serachbar.js";
import Content from "./Components/Content.js";
import Aboutus from "./Components/Aboutus.js"
import ContactUs from "./Components/ContactUs.js"


function app(){
   return(<div>
    <Navbar></Navbar>
    <Serachbar></Serachbar>
    <Content></Content>
    <Aboutus></Aboutus>
    <ContactUs></ContactUs>
  </div>)
}
export default app;