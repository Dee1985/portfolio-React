import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">
							AyDy Burling
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a>About Me</a>
							</li>
							<li>
								<a>Projects</a>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
