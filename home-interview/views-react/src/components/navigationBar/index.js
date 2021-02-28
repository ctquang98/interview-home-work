import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.css';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { actGetUserInfo, actLogout } from '../../redux/actions/userAction';

const username = 'meowmeow';
const password = '1234567890';

const NavigationBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const userSelector = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleUserLogin = () => {
        dispatch(actGetUserInfo(username, password));
    }

    const handleUserLogout = () => {
        dispatch(actLogout());
    }

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand as={Link} to="/">
                <Image className={styles.logoImage}
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    rounded
                />
                Logo
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/">Blog</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search by title"
                    className="mr-sm-2"
                    name="searchValue"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <Button
                    variant="outline-info"
                    as={Link}
                    to={{
                        pathname: '/search',
                        searchValue
                    }}
                    onClick={() => setSearchValue('')}
                >
                    Search
                </Button>
                <Nav>
                    {userSelector.loggedIn
                     ? <>
                        <Nav.Link>{userSelector.user.username}</Nav.Link>
                        <Nav.Link onClick={handleUserLogout}>Logout</Nav.Link>
                       </>  
                     : <Nav.Link
                            onClick={handleUserLogin}
                            disabled={userSelector.loading ? true : false}
                        >
                            Login
                        </Nav.Link>
                    }
                </Nav>
            </Form>
        </Navbar>
    );
}

export default NavigationBar