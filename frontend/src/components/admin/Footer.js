import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
        <footer className='footer'>
            <div className="footer_container">
                <div className="fooetr_top">
                    <div>
                        <h6 className="footer_title">...</h6>
                        <ul className="footer_list">
                            <li className="footer_list_item">
                                <NavLink to="" className="footer_list_link">....</NavLink>
                            </li>

                        </ul>
                    </div>
                    {/* Other groups */}
                </div>

                <hr className="footer_divider" />
                
                <div className="footer_bottom">
                    <span className='copyright'>....</span>
                
                        <ul className="footer_list">
                            <li className="footer_list_item">
                                <NavLink to="#" className="footer_list_link">
                                    <i className='ri-facebook-circle-line'></i>
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            

        </footer>
  )
}

export default Footer;