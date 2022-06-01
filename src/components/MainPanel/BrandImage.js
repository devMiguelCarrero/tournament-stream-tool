import React from "react";
import "./BrandImage.scss";
const BrandImage = (props) => {
	return <img className={`brand-image ${props.className}`} src={props.src} />
};
export default BrandImage;
