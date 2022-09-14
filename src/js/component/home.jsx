import React, { useState } from "react";

//create your first component
const Home = () => {

	const [selectColor, setSelectColor] = useState ();


	return (
		<div className="container">
			<div className="palillo">
			</div>
				<div className="row semaforo">
					<div
					onClick={() => setSelectColor ("red")}
					 className={"col-sm-4 red"+((selectColor === "red") ? " glow" : "")}>
					</div>
					<div
					onClick={() => setSelectColor ("yellow")}
					 className={"col-sm-4 yellow"+((selectColor === "yellow") ? " glow" : "")}>
					</div>					
					<div
					onClick={() => setSelectColor ("green")}
					 className={"col-sm-4 green"+((selectColor === "green") ? " glow" : "")}>						
					</div>
				</div>
		</div>
	);
};

export default Home;
