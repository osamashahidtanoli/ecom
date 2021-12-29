import classes from './Header.module.css';
import { Container, IconButton, Menu, MenuItem, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useState } from 'react';


const TopHeader = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>

            <div className={classes.firstHeader}>
                <Container>
                    <div className={classes.flex1}>
                        <div className={classes.icon}>
                            <IconButton> <FacebookIcon className={classes.iconColor} /> </IconButton>
                            <IconButton> <TwitterIcon className={classes.iconColor} /> </IconButton>
                            <IconButton> <InstagramIcon className={classes.iconColor} /> </IconButton>
                        </div>
                        <div className={classes.text}>
                            FREE SHIPPING THIS WEEK ORDER OVER - $75
                        </div>
                        <div className={classes.currency}>
                            <Button
                                className={classes.color}
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Currency
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>PKR</MenuItem>
                                <MenuItem onClick={handleClose}>USD</MenuItem>

                            </Menu>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default TopHeader
