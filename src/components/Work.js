import React from "react";

export default function Work() {
return(
    <section className="section-row">
    <div className="section-heading">
        <h2 id="work">Work</h2>
    </div>
    <div className="section-content-work">
        <div className="main-work-card" id="image1">
            <div className="main-card-title">
                <h3>Project 1 - Vibe Lounge</h3>
                <a href = "https://github.com/alexgeis/VIBE-LOUNGE" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://alexgeis.github.io/VIBE-LOUNGE/" target="_blank" rel="noopener noreferrer"> Deployed Link</a>
            </div>
        </div>
        <div className="project-sub-contatiner">
        <div className="work-card" id="image2">
            <div className="sub-card-title">
                <h3>Project 2 - Pantry Chef</h3>
                <a href = "https://github.com/tracyewilhelm/Pantry_Chef" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://awesome-pantry-chef.herokuapp.com" target="_blank" rel="noopener noreferrer"> Deployed Link</a>
            </div>
        </div>
        <div className="work-card" id="image3">
            <div className="sub-card-title">
                <h3>Project 3 - Daily Planner</h3>
                <a href = "https://github.com/jmg5369/Daily_Planner" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
                <a href="https://jmg5369.github.io/Daily_Planner/" target="_blank" rel="noopener noreferrer"> Deployed Link</a>
            </div>
        </div>
    </div>
    <div className="project-sub-contatiner">
        <div className="work-card" id="image4">
            <div className="sub-card-title">
                <h3>Project 4 - A glimse in time</h3>
            </div>
        </div>
        <div className="work-card" id="image5">
            <div className="sub-card-title">
                <h3>Project 5 - It all ends here</h3>
            </div>
        </div>
    </div>
    </div>
</section>
)
}