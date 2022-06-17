import React from "react";

export default function About() {
return(
    <div>
                    <div className="photo-div">
            <img className="photo" src="https://www.facebook.com/photo/?fbid=3955741060208&set=a.1323392773146" alt="Max Profile Pic"/>
            </div>
            <section className="section-row">
                <div className="section-heading">
        <h2 id="about-me">About Me</h2>
                </div>
                <div className="section-content">
                    <p className="content">
                        I've been working in managment and sales over the past decade, and when the pandemic started and turned everything upside down, I started to look into Software Development.
                    </p>
                    <br/>
                    <p className="content">
                        After a lot of thought in the matter, I decided to take a coding bootcamp and get that path started.
                    </p>
                </div>
            </section>
    </div>
)
}