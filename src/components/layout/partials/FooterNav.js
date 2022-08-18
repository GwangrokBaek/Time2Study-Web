import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="command">Commands</Link>
        </li>
        <li>
          <a href="mailto:zester926@gmail.com">Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
