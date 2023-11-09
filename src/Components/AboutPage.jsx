import React from "react";
import "/Users/jackiecheung/Module_4/SIngle-Resource-Project/Front_end/Single-Resource-Front_End/src/index.css";
import Header from "./Header";
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="">
        <div className="div">
          {/* <div className="text-wrapper">ABOUT US</div> */}
          <div className="rectangle" />
          <div className="overlap-group">
            <p className="lorem-ipsum-is">
              At LivingHeungs, our story is one of passion, tradition, and the
              pursuit of culinary excellence. Our journey began in the
              picturesque Italian village of centuries past, where the Heungs
              family crafted pizzas that transcended time. Today, we carry on
              this legacy, embracing our rich heritage while infusing innovation
              into every slice. We believe in the power of food to bring people
              together, and we take pride in using only the freshest
              ingredients, handcrafted dough, and a wood-fired oven to create
              pizzas that are not just meals but works of art. As you savor
              LivingHeungs, you partake in a five-century-old tradition of
              taste, where the past and the present converge on your plate. Join
              us on this timeless journey, and let our pizza transport you to
              the heart of Italian culinary history.
            </p>
            <div className="rectangle-2" />
            <div className="text-wrapper-2">READ MORE</div>
          </div>
          <img
            className="restaurant"
            alt="Restaurant"
            src="restaurant-5521372-1920-1.png"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
