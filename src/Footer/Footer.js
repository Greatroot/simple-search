import React from "react"
import classes from "./Footer.module.css";

// TODO: Make left-footer--items all working links to those pages once we make them.
function Footer() {
    return (
        <div>
            <div className={classes.mainFooter}> {/* ***************** main-footer **************** */}
                <div className={classes.leftRightFooter}>
                    <div className={classes.leftFooter}> {/* ******************** left-footer ******************** */}
                        <div className={classes.leftFooterHeader}>
                            <h2>Rate My Internships</h2>
                        </div>
                        <div className={classes.leftFooterItems}>
                            <p>About Us </p>
                            <p>Terms of Use </p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className={classes.rightFooter}> {/* *********** right-footer ************ */}
                        <div className={classes.rightFooterHeader}>
                            <p>Contact Us</p>
                        </div>
                        <p className={classes.footerEmail}> ratemyinternshipsofficial@gmail.com </p>
                        <div className={classes.footerSocials}>
                            <div className={classes.socialIcon}>
                                <a href="https://www.instagram.com/ratemyinternships/?utm_medium=copy_link">
                                    < i class="fa fa-instagram fa-2x"></i>
                                </a>
                            </div>
                            <div className={classes.socialIcon}>
                                <a href="https://www.linkedin.com/company/ratemyinternships/">
                                    < i className="fa fa-linkedin fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bottomFooter}> {/* ************** bottom-footer **************** */}
                    <p>© 2021 ratemyinternships, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
                export default Footer;