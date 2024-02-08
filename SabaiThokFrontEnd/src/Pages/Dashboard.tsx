import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card  from "../Components/Card";
import "./Dashboard.css";

function Dashboard () {
    return (
       <>
       <div className="Top">
               <Navbar/>
       </div>

       <div className="bodyheight">
        <div className="bodytoaddproduct">
        <Card/>
        </div>
                  
       </div>
       
        <div className="Bottom">
            <Footer/>
        </div>
      

        </>
    );
}

export default Dashboard;