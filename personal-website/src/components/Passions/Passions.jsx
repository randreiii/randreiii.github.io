import React from "react";
import './Passions.css';


export default function Passions() {
  const data = [
    {
      id: 1,
      img: "",
      desc:
        "Technology has always been my passion and hobby since my early childhood. Although I studied Hospitality Management the traditional way at Stenden University, I have actively keep up with the trends within the industry.",
    },
    {
      id: 2,
      img:
        "",
      desc:
        "This curiosity helped me to stay up-to-date from year to year and I’m still learning every single day to ensure I can deliver the most modern and effective solutions. I believe in working hard and smart instead of searching for “hacks and shortcuts",
    },
    {
      id: 3,
      img:
        "",
      desc:
        "As technology progresses, things are getting more and more complex. As a developer, I have a special opportunity to simplify this complex processes by creating different kind of applications that will be ready to use every day.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h2><b>A passion for technology</b></h2>
      <h3> “Any technology distinguishable from magic is insufficiently advanced.” </h3>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="img"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}