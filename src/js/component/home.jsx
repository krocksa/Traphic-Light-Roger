import React , { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ligth, setLigth] = useState(undefined)
	const [isPurple, setIsPurple]=useState(false)
	const handleOn = (newLigth)=>{
		if(ligth == newLigth){
			setLigth(undefined)
		} else {
			setLigth(newLigth)
		}
	}

	const handleChange = ()=>{
		let colors = ["red","yellow","green","purple"]
		let i = 0
		setInterval(()=>{
			if (isPurple){
				setLigth(colors[i%4])
			} else {
				setLigth(colors[i%3])
			}
			i++
		},1000)
		
		// let newLigth = 'red'
		// setInterval(()=>{
		// 	setLigth(newLigth)
		// 	if(newLigth == "red"){
		// 		newLigth = "yellow"
		// 	} else if (newLigth== "yellow"){
		// 		newLigth= "green"
		// 	} else {
		// 		newLigth = 'red'
		// 	}
		// },1000)

	}

	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className={isPurple ? "traffic-light traffic-light-with-purple" : "traffic-light"}>
				<div className={ligth == "red" ? "lights red on" : "lights red opaco" } onClick={()=>{handleOn("red")}}></div>
				<div className={ligth == "yellow" ? "lights yellow on" : "lights yellow opaco"} onClick={()=>{handleOn("yellow")}}></div>
				<div className={ligth == "green" ? "lights green on" : "lights green opaco"} onClick={()=>{handleOn("green")}}></div>
				{isPurple && <div className={ligth == "purple" ? "lights purple on" : "lights purple"} onClick={()=>{handleOn("purple")}}></div>}
			</div>
			<button onClick={()=>handleChange()}>Change</button>
			<button onClick={()=>setIsPurple(!isPurple)}>Add Or Delete</button>
		</div>
	);
};

export default Home;
