import React from "react";
import Aodai from "../../../assets/images/aodaiPhoto.png";
import FamilyPT from "../../../assets/images/familyPT.png";
import WeddingPT from "../../../assets/images/weddingPT.png";
import ConceptPT from "../../../assets/images/conceptPT.png";
import CouplePT from "../../../assets/images/couplePT.png";
import OurdoorPT from "../../../assets/images/ourdoorPT.png";
import "./style.scss";
const CategoryProductGroup = () => {
  return (
    <div className="homeTableProduct">
      <div className="itemFormRow">
        <div className="itemForm">
          <img src={Aodai} alt="image1" />
          <div className="content">
            <span className="textCategory">Ao dai photo</span>
            <span className="textType">Album</span>
          </div>
        </div>
        <div className="itemForm">
          <img src={FamilyPT} alt="image1" />
          <div className="content">
            <span className="textCategory">Family photo</span>
            <span className="textType">Album</span>
          </div>
        </div>
        <div className="itemForm">
          <img src={ConceptPT} alt="image1" />
          <div className="content">
            <span className="textCategory">Concept photo</span>
            <span className="textType">Album</span>
          </div>
        </div>
      </div>

      <div className="itemFormRow">
        <div className="itemForm">
          <img src={WeddingPT} alt="image1" />
          <div className="content">
            <span className="textCategory">Wedding photo</span>
            <span className="textType">Album</span>
          </div>
        </div>

        <div className="itemForm">
          <img src={CouplePT} alt="image1" />
          <div className="content">
            <span className="textCategory">Couple photo</span>
            <span className="textType">Album</span>
          </div>
        </div>

        <div className="itemForm">
          <img src={OurdoorPT} alt="image1" />
          <div className="content">
            <span className="textCategory">Outdoors photo</span>
            <span className="textType">Album</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductGroup;
