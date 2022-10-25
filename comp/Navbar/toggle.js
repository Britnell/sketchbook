/*
 * https://www.w3.org/WAI/tutorials/menus/flyout/#use-parent-as-toggle
 */

import { useEffect, useRef, useState } from "react";
import styles from "./Toggle.module.scss";

const MenuItem = ({ id, children, expanded, setExpanded }) => {
  const itemRef = useRef();
  const hoverRef = useRef();

  const expandable = !!children;
  const isExpanded = id === expanded;

  const click = (ev) => {
    if (!expandable) return true;

    ev.preventDefault();

    if (isExpanded) {
      // close
      setExpanded("");
    } else {
      // open
      setExpanded(id);
    }
    return false;
  };

  // * Expand on hover
  useEffect(() => {
    if (!hoverRef.current) return;

    let timer;

    const onHover = (ev) => {
      if (timer) clearTimeout(timer);
      if (!isExpanded) setExpanded(id);
    };
    const onLeave = (ev) => {
      if (isExpanded) {
        timer = setTimeout(() => setExpanded(""), 400);
      }
    };

    hoverRef.current.addEventListener("mouseover", onHover);
    hoverRef.current.addEventListener("mouseleave", onLeave);

    return () => {
      if (timer) clearTimeout(timer);

      hoverRef.current.removeEventListener("mouseover", onHover);
      hoverRef.current.removeEventListener("mouseleave", onLeave);
    };
  }, [id, expanded, isExpanded, hoverRef]);

  // * Auto-close submenus when you tab past
  useEffect(() => {
    if (!itemRef.current) return;
    const onFocus = (ev) => {
      if (expanded !== "" && expanded !== id) {
        setExpanded("");
      }
    };
    itemRef.current.addEventListener("focus", onFocus);
    return () => itemRef.current.removeEventListener("focus", onFocus);
  }, [id, expanded, isExpanded, itemRef]);

  return (
    <li ref={hoverRef}>
      <a
        className={styles.menuitem}
        ref={itemRef}
        href={`#${id}`}
        aria-expanded={isExpanded}
        onClick={click}
      >
        {id} {expandable ? (isExpanded ? "x" : "v") : ""}
      </a>
      <ul className={styles.submenu}>{children}</ul>
    </li>
  );
};

const ToggleNavbar = () => {
  const [expanded, setExpanded] = useState("");

  return (
    <div className={styles.example}>
      <div>
        <h2>But we can do better</h2>
        <p>
          for large menus you need to tab through each element in the dropdown
          to get to the next. Following
          <a href="https://www.w3.org/WAI/tutorials/menus/flyout/#use-parent-as-toggle">
            W3C on Flyout menu's
          </a>{" "}
          we can open/close the submenus on hover, click, keyboard-click, and
          when the user tabs out of a submenu and onto the next item.
        </p>
      </div>
      <header>
        <nav aria-label="NavMenu" className={styles.nav}>
          <ul className={styles.menu}>
            <MenuItem id="home" expanded={expanded} setExpanded={setExpanded} />
            <MenuItem
              id="products"
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <li>
                <a href="#">Product A</a>
              </li>
              <li>
                <a href="#">Product B</a>
              </li>
              <li>
                <a href="#">Product C</a>
              </li>
            </MenuItem>
            <MenuItem id="pages" expanded={expanded} setExpanded={setExpanded}>
              <li>
                <a href="#">Page A</a>
              </li>
              <li>
                <a href="#">Page B</a>
              </li>
              <li>
                <a href="#">Page C</a>
              </li>
            </MenuItem>
            <MenuItem
              id="account"
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default ToggleNavbar;
