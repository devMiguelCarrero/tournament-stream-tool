import React from "react";
import "./BrandImage.scss";
const BrandImage = (props) => {
	return <img class={`brand-image ${props.className}`} src={props.src} />
};
export default BrandImage;
