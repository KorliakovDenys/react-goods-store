import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import SalesPage from "./pages/SalesPage";
import EventsPage from "./pages/EventsPage";
import ContactsPage from "./pages/ContactsPage";
import CategoryPage from "./pages/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import "./styles/w650.css";

const App = () => {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/sales" element={<SalesPage/>}/>
				<Route path="/events" element={<EventsPage/>}/>
				<Route path="/faq" element={<FaqPage/>}/>
				<Route path="/contacts" element={<ContactsPage/>}/>
				<Route path="/categories/:id" element={<CategoryPage/>}/>
				<Route path="/products/:id" element={<ProductPage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Routes>
		</Router>
	);
};

export default App;