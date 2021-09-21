import React, {useState} from "react"
import { Link } from "react-router-dom"

function NavBar() {
	const [searchString, setSearchString] = useState()

	return (
		<div>
			<Link to="/" className="link" id="home-link">Home</Link>
			<Link to="/about" className="link" id="about-link">About</Link>
			
			<form className="SearchBar">
			<input type="text" value={searchString} onChange={e => { setSearchString(e.target.value)}}/>
			<Link to={`/search/${searchString}`}>
			<button type="submit">Search</button>
			</Link>
			</form>
		</div>
	)
}

export default NavBar