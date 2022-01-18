import React, {useState} from "react";
import Nav from "./Nav";
import PigDisplay from "./PigDisplay"
import GreaseFilter from "./GreaseFilter"
import SortPigs from "./SortPigs"
// Data Import
import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)

	

	
	
	function handleFilterGrease(e) {
		const hogsToDisplay = hogs.filter((hog) => {
			if (e.target.value === "true") return hog.greased === true
			else if (e.target.value === "false") return hog.greased === false
			else return true
		})
		setPigs(hogsToDisplay)
		console.log(hogsToDisplay)
		console.log(e.target.value)
	}

	function handleSortPigs(e) {
		const newArr = [...pigs]
		const sorter = e.target.value
		console.log(sorter)
		function SortArray(x,y) {
			if (x[sorter] < y[sorter]) {return -1}
			if (x[sorter] > y[sorter]) {return 1}
			return 0;
		}
		const hogsToDisplay = newArr.sort(SortArray)
		console.log(hogsToDisplay)
		setPigs(hogsToDisplay)
	}
	return (
		<div className="App">
			<Nav />
			<GreaseFilter hogs={pigs} handleFilterGrease={handleFilterGrease}/>
			<SortPigs hogs={pigs} handleSortPigs={handleSortPigs}/>
			<br></br>
			<br></br>
			<PigDisplay hogs={pigs} />
		</div>
	);
}

// function filterGrease() {
// 	const newList = hogs.filter(hog => 
// 		if (greased === "true") {
// 			hog.greased === true}
// 		else if (greased === "false") {
// 			hog.greased === false
// 		})
// 	setPigs(newList)

export default App;
