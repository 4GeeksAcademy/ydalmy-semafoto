import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





//create your first component
export function Home  () {
	const [selectedColor, setSelectedColor] = useState ("red");
	return (
	
		<div className="semaforo pt-1 pb-1 mx-auto ps-1" >
		<div onClick ={() => setSelectedColor("red")}  className= {"red " + (selectedColor === "red" ? "glowing-border" :"")}></div>
		
		<div onClick = {() => setSelectedColor("yellow")} className= {"yellow " + (selectedColor === "yellow" ? "glowing-border": "")}></div>
		
		<div onClick ={() => setSelectedColor("green")} className={"green " + (selectedColor === "green" ? "glowing-border": "")}></div>
			
        </div>
    
		
	);
}

export default Home