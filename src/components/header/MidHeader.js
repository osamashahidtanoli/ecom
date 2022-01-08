import { Container, TextField, IconButton, InputAdornment } from '@material-ui/core';
import classes from './Header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';

const MidHeader = () => {
    const navigate = useNavigate();
    return (
        <header className={classes.header2}>
            <Container>
                <div className={classes.flex1}>
                    <div className={classes.logo}>
                        ecom<span>Logo</span>
                    </div>
                    <div className={classes.searchField}>
                        <TextField InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )}} placeholder='Search...' className={ classes.txtField } variant='outlined' fullWidth/>
                    </div>
                    <div className={classes.navBtns}>
                        <div>
                            <IconButton onClick={() => navigate('/cart')} >
                                <ShoppingCartIcon className={classes.fontSize} />
                            </IconButton>
                            <IconButton>
                                <FavoriteIcon className={classes.fontSize} />
                            </IconButton>
                            <IconButton>
                                <PersonIcon className={classes.fontSize} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default MidHeader
