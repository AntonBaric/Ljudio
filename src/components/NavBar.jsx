import React, {useState} from "react"
import { Link } from "react-router-dom"

function NavBar() {
	const [searchString, setSearchString] = useState('')

	return (
		<div>
			<Link to="/" className="link" id="home-link">Home</Link>
			<Link to="/about" className="link" id="about-link">About</Link>
			
			<form className="SearchBar">
			<input type="text" value={searchString} onChange={e => { setSearchString(e.target.value)}}/>
			<Link to={`/search/songs/${searchString}`}>
			<button type="submit">Search songs</button>
			</Link>
			<Link to={`/search/artists/${searchString}`}>
			<button type="submit">Search artists</button>
			</Link>
			</form>
		</div>
	)
}

export default NavBar