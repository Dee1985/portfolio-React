import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">
						Logo
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a>Sass</a>
						</li>
						<li>
							<a>Components</a>
						</li>
						<li>
							<a>JavaScript</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
