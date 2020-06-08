import React from 'react';
import Navbar from './components/Navbar';

let Navbar = () => {
	document.addEventListener('DOMContentLoaded', function () {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, options);
	});

	return (
		<>
			<nav>
				<div class="nav-wrapper">
					<a href="#!" class="brand-logo">
						Logo
					</a>
					<a href="#" data-target="mobile-demo" class="sidenav-trigger">
						<i class="material-icons">menu</i>
					</a>
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="sass.html">Sass</a>
						</li>
						<li>
							<a href="badges.html">Components</a>
						</li>
						<li>
							<a href="collapsible.html">Javascript</a>
						</li>
						<li>
							<a href="mobile.html">Mobile</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul class="sidenav" id="mobile-demo">
				<li>
					<a href="sass.html">Sass</a>
				</li>
				<li>
					<a href="badges.html">Components</a>
				</li>
				<li>
					<a href="collapsible.html">Javascript</a>
				</li>
				<li>
					<a href="mobile.html">Mobile</a>
				</li>
			</ul>
		</>
	);
};
export default Navbar;