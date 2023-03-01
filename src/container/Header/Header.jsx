import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{}}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Eric</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Front End Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.sass, images.javascript, images.react, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');