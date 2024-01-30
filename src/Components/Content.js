import one from "../assets/images/perfume1.jpg";
import two from "../assets/images/perfume2.jpg";
import three from "../assets/images/perfume3.jpg";

function Content(){
    return(
      <div class="Main">
      <div class="Main__Container">
          <img class="Main__Container-img" src={one} alt="The perfume "></img>
          <p class="Main__Container-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, impedit.</p>
      </div>
      <div class="Main__Container">
          <img class="Main__Container-img" src={two} alt="The perfume "></img>
          <p class="Main__Container-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, impedit.</p>
      </div>
  
      <div class="Main__Container">
          <img class="Main__Container-img" src={three} alt="The perfume"></img>
          <p class="Main__Container-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, impedit.</p>
      </div> 
      
  </div>
    )
  }

  export default Content;