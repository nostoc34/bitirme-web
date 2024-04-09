import React, { useState } from 'react';
import injectSheet from 'react-jss';
import styles from './stylesheet';
import { Icon } from '@iconify/react';
import search from "../../../service/query/search";
import { client } from '../../../service';

const Navbar = ({classes}) => {
    
    const isLogged =JSON.parse(window.localStorage.getItem("user")).isLogged;
    const [searchData, setSearchData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getSearch = (srch) => {
        client
			.query({
				query: search,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
                variables: {
                    searchText: srch
                }
			})
			.then((res) => {
				setSearchData(res.data.search.data);
			})
			.catch((err) => {
				console.error("search error:", err);
			});
    }

    return(
        <div className={classes.container}>
            <div className={classes.logo} onClick={() => {
                window.location.href = "/home";
            }}>
                nostopia
            </div>
            <div className={classes.searchContainer}>
                <input
                    placeholder='Arama'
                    type="text"
                    onChange={(e) => {
                        if(e.target.value.length === 0) {
                            setSearchData([]);
                        } else {
                            getSearch(e.target.value);
                        }
                    }}
                />
                <div className={classes.results}>
                    {
                        searchData.length > 0 &&
                        searchData.map((item, index) => {
                        return (
                            <div key={index} onClick={() => {
                                window.location.href = `/profile/${item.userName}`
                            }}>
                                {item.userName}
                            </div>
                        );
                    })
                    }
                </div>
                <div className={classes.srcIcon}>
                    <Icon icon="ic:sharp-search" />
                </div>
            </div>
            {
                    isLogged
                    ?
                    <div className={classes.menu}>
                        <div className={classes.links}>
                            <div
                                className={classes.menuItem}
                                onClick={() => {
                                    window.location.href = "/home"
                                }}
                            >
                                Anasayfa
                            </div>
                            <div className={classes.menuItem}>Mesajlar</div>
                        </div>
                        <div className={classes.personalSection}>
                            <div className={classes.menuItem}>
                                <Icon icon="ic:outline-notifications-none" />
                            </div>
                            <div className={classes.menuItem}
                                onClick={() => {
                                    window.localStorage.removeItem("user");
                                    window.location.href = "/";
                                }}
                            >
                                <Icon icon="material-symbols:logout" />
                            </div>
                            <div className={classes.menuItem}>
                                <div
                                    className={classes.profilePic}
                                    onClick={() => {
                                        window.location.href = "/my-profile"
                                    }}
                                >
                                    <img src={window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).profilePhoto : null} alt="profile_picture" />
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={classes.menu}>
                        <div className={classes.menuItem}>Giriş Yap</div>
                        <div className={classes.menuItem}>Kayıt Ol</div>
                    </div>
            }
        </div>
    )
};

export default injectSheet(styles)(Navbar);