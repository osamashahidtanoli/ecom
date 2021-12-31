import classes from './Pages.module.css';
import { Button, Container } from '@material-ui/core';
import {Feature} from '../components';

const Home = () => {
    return (
        <>
            <div className={classes.bannerImg}>
                <Container>
                    <div className={classes.content}>
                        <div >
                            <div className={classes.firstHeader}>New Fashion Collection</div>
                            <div className={classes.firstHeader}>Summer Sale</div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam voluptas iusto distinctio, ab non ut?</p>
                            <Button className={classes.actionBanner} variant='contained'>Order Now</Button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={classes.section1}>
                <Container>
                    <Feature/>
                </Container>
            </div>
        </>
    )
}

export default Home
