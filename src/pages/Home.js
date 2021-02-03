import React from "react";
import "./style.css";
import me from "../assets/images/me.jpg";
import PortfolioBtn from "../components/PortfolioBtn";


function Home() {

    function handlePortfolioClick(event) {
        event.preventDefault();
        window.location.href = "/portfolio";
    }



    return(
        <div>
            <div className="row">
                <div className="text col-6">
                    <h3>
                        Hey there, I'm Ashvini Thomas!
                    </h3>
                    <h4>
                        I am a Full Stack Web Developer <br />
                        with a background in Information Technology and Informatics.
                    </h4>
                </div>
                <div className="image col-6">
                    <img className="my-image" src={me} />
                </div>
            </div>
            <div className="row">
                <PortfolioBtn onClick={handlePortfolioClick} />
            </div>

        </div>
    );
}

export default Home;