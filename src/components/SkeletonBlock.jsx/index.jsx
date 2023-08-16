import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = (props) => (
  <ContentLoader 
    speed={1}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="396" y="140" rx="3" ry="3" width="53" height="11" /> 
    <circle cx="144" cy="121" r="120" /> 
    <rect x="3" y="244" rx="0" ry="0" width="276" height="24" /> 
    <rect x="5" y="286" rx="0" ry="0" width="270" height="50" /> 
    <rect x="4" y="358" rx="0" ry="0" width="135" height="36" /> 
    <rect x="152" y="358" rx="0" ry="0" width="124" height="36" />
  </ContentLoader>
)

export default SkeletonPizza;