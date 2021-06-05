import React from 'react';
import { Route , Link } from 'react-router-dom';


const Header = () => {
	return <div style={{ display: "flex", gap: "16px" }}>
	{/* link acts like an `a` tag */}
	<Link to="/"> Home </Link>
	<Link to="/about"> About </Link>
	<Link to="/login"> Sign Up </Link>
	<Link to="/contact"> Contact</Link>
	<Link to="/articles"> Articles</Link>
  </div>
};

export default Header;
