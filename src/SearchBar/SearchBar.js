import React from "react";
import classes from './SearchBar.module.css';
import {IoSearchOutline} from "react-icons/all";

const SearchBar = ({ type, placeholder, name, value, onChange }) => {

    return(
        <form className={classes.searchBar}>
            <input type = { type }
                   placeholder = { placeholder }
                   name = { name }
                   value = { value }
                   onChange = { onChange }
                   className={classes.searchBarInput}
            />
            <IoSearchOutline className={classes.searchBarIcon}/>
        </form>
    );
}

export default SearchBar;