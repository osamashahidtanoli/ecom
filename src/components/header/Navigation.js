import TopHeader from "./TopHeader";
import MidHeader from "./MidHeader";
import classes from './Header.module.css';
import { Container } from "@material-ui/core";
import {useNavigate, useLocation} from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const routeMatch = (route) => {
        if(route === location.pathname){
            console.log('Hi');
            return true;
        }
    }
   
    return (
        <>
            <TopHeader/>
            <MidHeader/>
            <div className={classes.header3}>
            <Container>
            <ul className={classes.navBar}>
                <li className={routeMatch('/') ? 'active' : ''} onClick={() => navigate('/')}>Home</li>
                <li className={routeMatch('/') ? 'active' : ''} onClick={() => navigate('/products')}>Products</li>
                <li>Blogs</li>
                <li>FAQ</li>
                <li>Ads</li>
                <li>Discounts</li>
            </ul>
            </Container>
            </div>
        </>
    )
}

export default Navigation
