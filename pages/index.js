import React from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";

// Sections for this page
import SectionProduct from "pages-sections/landing-page/SectionProduct.js";
import SectionTeam from "pages-sections/landing-page/SectionTeam.js";
import SectionWork from "pages-sections/landing-page/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={require("assets/img/Ultimate_Background.png")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={10}>
              <h1 className={classes.title}>Job Matching Done Smarter</h1>
              <h3>
                Pumpt is a private technology-driven job platform serving professionals and companies in the digital media, ad tech, and SaaS/Enterprise industries throughout the U.S. With a focus on sales and sales support functions, Pumpt uses proprietary AI to match Candidates & Employers. There’s no longer any need to search for jobs or candidates…we do it for you.
              </h3>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
          <SectionWork />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
              </List>
            </div>
          </div>
        }
      />
    </div>
  );
}