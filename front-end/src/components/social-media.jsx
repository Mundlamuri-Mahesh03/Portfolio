import { NavLink } from "react-router-dom";


const SocialAccounts = () => {
    return (
        <div>
            {/* <NavLink style={{textDecoration:"none", color:"#AAAAB2"}} to="https://twitter.com/sriramsanthosh_" target="_blank"><i style={{paddingLeft:"0"}} className="social-media-icon fa-brands fa-x-twitter"></i></NavLink> */}
            <NavLink style={{ textDecoration: "none", color: "#AAAAB2" }} to="https://www.instagram.com/mahesh.cinephile/" target="_blank"><i className="social-media-icon fa-brands fa-instagram"></i></NavLink>
            <NavLink style={{ textDecoration: "none", color: "#AAAAB2" }} to="https://github.com/Mundlamuri-Mahesh03" target="_blank"><i className="social-media-icon fa-brands fa-github"></i></NavLink>
            <NavLink style={{ textDecoration: "none", color: "#AAAAB2" }} to="https://www.linkedin.com/in/mundlamuri-mahesh03/" target="_blank"><i className="social-media-icon fa-brands fa-linkedin"></i></NavLink>
        </div>
    )
}

export default SocialAccounts;