import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../facebook.png'
import instagram from '../instagram.png'
import twitter from '../twitter.png'

const Footer = () => {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">Copyright @akashsarki202<del>2</del>3</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="https://www.facebook.com/" target="_blank" className="nav-link px-2 text-muted"><img src={facebook} alt="social_icon" style={{width: "25px"}}/></Link></li>
                    <li className="nav-item"><Link to="https://www.instagram.com/" target="_blank" className="nav-link px-2 text-muted"><img src={instagram} alt="social_icon" style={{width: "25px"}}/></Link></li>
                    <li className="nav-item"><Link to="https://www.twitter.com/" target="_blank" className="nav-link px-2 text-muted"><img src={twitter} alt="social_icon" style={{width: "25px"}}/></Link></li>
                </ul>
            </footer>

        </div>
    )
}

export default Footer
