/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
// import SectionLatestOffers from "pages-sections/ecommerce/SectionLatestOffers.js";
// import SectionProducts from "pages-sections/ecommerce/SectionProducts.js";
// import SectionBlog from "pages-sections/ecommerce/SectionBlog.js";

// import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function SiteFooter(){
    React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Presentation
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={e => e.preventDefault()}
                    className={classes.block}
                  >
                    Discover
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={e => e.preventDefault()}
                    className={classes.block}
                  >
                    Payment
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=njsmkp-e-ecommerce"
                target="_blank"
                className={classes.aClasses}
              >
                Creative Tim
              </a>{" "}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>About Us</h5>
            <p>
              Creative Tim is a startup that creates design tools that make the
              web development process faster and easier.{" "}
            </p>
            <p>
              We love the web and care deeply for how users interact with a
              digital product. We power businesses and individuals to create
              better looking web projects around the world.{" "}
            </p>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Social Feed</h5>
            <div className={classes.socialFeed}>
              <div>
                <i className="fab fa-twitter" />
                <p>How to handle ethical disagreements with your clients.</p>
              </div>
              <div>
                <i className="fab fa-twitter" />
                <p>The tangible benefits of designing at 1x pixel density.</p>
              </div>
              <div>
                <i className="fab fa-facebook-square" />
                <p>
                  A collection of 25 stunning sites that you can use for
                  inspiration.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Instagram Feed</h5>
            <div className={classes.galleryFeed}>
              <img
                src={face1}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face2}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face3}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face4}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face5}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face6}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face7}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
              <img
                src={face8}
                className={classNames(
                  classes.img,
                  classes.imgRaised,
                  classes.imgRounded
                )}
                alt="..."
              />
            </div>
          </GridItem>
        </GridContainer>
      </Footer>
  )
}
 