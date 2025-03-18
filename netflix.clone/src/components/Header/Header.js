import React from 'react'
import "./header.css"

import Netflixlogo from "../../assetes/images/Logonetflix.png"

import SearchIcon from "@mui/icons-material/Search";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <ul>
          <li>
            <img src={Netflixlogo} alt="Netflexlogo" width="100" />
          </li>
          <li>Netflex</li>

          <li>Home</li>
          <li>TVShows</li>

          <li> Movies</li>

          <li>Latest</li>

          <li>Mylist</li>

          <li>Browser_by_Language</li>
        </ul>
      </div>

      <div className="header_right">
        <ul>
          <li>
            <SearchIcon />
          </li>

          <li><NotificationsNoneIcon /></li>


          <li><AccountBoxIcon /> </li>

          <li><ArrowDropDownCircleIcon /> </li>
        </ul>
      </div>
    </div>
  );
}

export default Header