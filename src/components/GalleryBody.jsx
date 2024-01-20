import React from "react";

export default function GalleryBody(props){
    console.log(props)

    var imageData=props.data2
    return(
        <div>{
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }</div>
    )
}
