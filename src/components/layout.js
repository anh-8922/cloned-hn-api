import { Outlet, Link } from "react-router-dom";
import './css/anh.css';
import './css/navbar.css';
import Footer from "./footer";


export default function Layout() {
    //const [click, setClick] = useState(false);
    return (
        <>
            <div id="header">
                <h1><span>DEV</span>&lt;NEWS/&gt;</h1> 
            </div>
            <nav>
                <ul id="nav-bar">
                    <li>
                        <Link to="/" activeClassName="active" id='nav-items'>Home</Link>
                    </li>
                    <li>
                        <Link to="top" activeClassName="active" id='nav-items'>Top Stories</Link>
                    </li>
                    <li>
                        <Link to="latest" activeClassName="active" id='nav-items'>Latest Stories</Link>
                    </li>
                    <li>
                        <Link to="best" activeClassName="active" id='nav-items'>Best Stories</Link>
                    </li>
                    <li>
                        <Link to="login" activeClassName="active" id='nav-items'>Login</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
            
            <Footer/>
        </>
      )

}