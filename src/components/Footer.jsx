import { faFolder, faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MikFooterContainer, MikFooterMobileNav, MikFooterMobileNavItems, MikFooterDetails } from "utilities/styledComponent";

const Footer = () => {
    return (
        <MikFooterContainer>
            <MikFooterDetails>
                Copyright @ 2022 By igihcksn 
            </MikFooterDetails>
            <MikFooterMobileNav>
                <MikFooterMobileNavItems to='/' ><FontAwesomeIcon icon={faHouse} /> Home</MikFooterMobileNavItems>
                <MikFooterMobileNavItems to='/collection'><FontAwesomeIcon icon={faFolder} /> Collections</MikFooterMobileNavItems>
                <MikFooterMobileNavItems to='/'><FontAwesomeIcon icon={faHeart} /> Bulk</MikFooterMobileNavItems>
            </MikFooterMobileNav>
        </MikFooterContainer>
    )
};

export default Footer;