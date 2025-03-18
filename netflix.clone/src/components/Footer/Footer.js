import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';

import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer-icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center </li>
              <li>jobs</li>
              <li>cookie preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Card</li>
              <li>Termes of User</li>
              <li>Corporete Information</li>
            </ul>
          </div>

          <div className="info">
            <ul>
              <li>Media Center </li>
              <li>Privacy </li>
              <li>Contact Us </li>
            </ul>
          </div>
        </div>

        <div className="two">
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy-write">&copy;1997-2025 Netflex, Inc</div>
        </div>
      </div>
    </div>
  );
}

export default Footer