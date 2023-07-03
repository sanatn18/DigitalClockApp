import React, { useEffect, useState } from "react";

function Clock() {
	const [clockState, setClockState]=useState();

	useEffect( ()=> {
		setInterval( ()=> {
			const date=new Date();
			setClockState(date.toLocaleTimeString() );
		}, 1000);
	}, []);

	return(
	<>
	<center>
	<div style={ { fontSize: "55px", margin: "60px" } } > Time in India: {clockState} </div>
	</center>
	</>
	);
}

export default Clock;