import React from 'react';
import { Route , Link } from 'react-router-dom';
// import component after create it in components

const Content = () => {
	return <div style={{ display: "flex", gap: "16px" }}>
	{/* link acts like an `a` tag */}
    <Route exact path="/"   component={Home} />
    <Route exact path="/about"  component={About} />
    <Route exact path="/articles"   component={Articles} />
    <Route exact path="/contact"  component={Contact} />
    <Route exact path="/login"  component={Login} />

  </div>
};

export default Content;
