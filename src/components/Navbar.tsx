import "./styles/navbar.css"
import {NavLink} from "react-router-dom";
import account from "../assets/account.svg";
import expand from "../assets/expand.svg";
import favorites from "../assets/favorites.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import shoppingBag from "../assets/shopping_bag.svg";

const Navbar = () => {
	return (
		<div className='navbar'>
			<nav className='nav'>
				<div className='burger'>
					<img src={menu} alt='burger menu'/>
				</div>
				<div className='logo'>
					<NavLink className='nav-item home-link' to='/'>home</NavLink>
				</div>
				<div className='main-menu'>
					<NavLink className='nav-item dropdown' to='categories/0'>
						shop
						<img className="expand-icon" src={expand} alt=''/>
					</NavLink>
					<NavLink className='nav-item underline' to='sales'>sales</NavLink>
					<NavLink className='nav-item underline' to='events'>events</NavLink>
					<NavLink className='nav-item underline' to='faq'>faq</NavLink>
					<NavLink className='nav-item underline' to='contacts'>contacts</NavLink>
				</div>
				<div className='tool-box'>
					<NavLink to='/' className='tool-box-item'>
						<img src={search} alt=''/>
					</NavLink>
					<NavLink to='/' className='tool-box-item large-screen-only'>
						<img src={shoppingBag} alt=''/>
					</NavLink>
					<NavLink to='/' className='tool-box-item large-screen-only'>
						<img src={favorites} alt=''/>
					</NavLink>
					<NavLink to='/' className='tool-box-item'>
						<img src={account} alt=''/>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
