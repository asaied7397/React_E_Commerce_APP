import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem
          adipisci atque, a exercitationem harum nesciunt soluta perferendis.
          Obcaecati laborum facere sint iure sit praesentium vel, assumenda
          iusto architecto eum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          laborum, quam maxime ducimus ipsum eveniet voluptatibus, qui optio eos
          fuga ut neque est, fugiat natus omnis molestias ipsam molestiae unde.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
