import React from "react";
import './Interests.css';


export default function Interests() {
    const data = [
      {
        id: 1,
        img:
          "",
        desc:
          "Self development. I believe it's important to constantly develop my personal skills in every field of my life. Consequently, I enjoy a good book, audio book or video.",
      },
      {
        id: 2,
        img:
          "",
        desc:
          "Sport acitivities play an important role in my daily routine. I enjoy hitting the gym, ocasionally playing football & tennis, going for a jogg in the park or simply walking my dog (yes, it can be an acitivity itself when you have a Beagle :)",
      },
      {
        id: 3,
        img:
          "",
        desc:
          "Travel in order to discover new places. So far I've been to about 10 Europeean counntries however I am looking forward to add some more to my list",
      },
    ];
    return (
      <div className="interests" id="interests">
        <br></br> <br></br> <br></br> <br></br>
        <h2><b>I’m also passionate about</b></h2>
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