import { useEffect, useState } from "react";
import styles from "./Hover.module.scss";

const SubMenu = ({ id, children, focus, setFocus }) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (expanded && focus !== id) {
      setExpanded(false);
    }
  }, [focus, expanded, id]);
  return (
    <li className={styles.listitem} onFocus={() => setFocus(id)}>
      <a href={`#${id}`}>{id}</a>
      <button
        className={[styles.toggle, expanded ? styles.visible : ""].join(" ")}
        aria-expanded={expanded}
        onClick={() => setExpanded((t) => !t)}
      >
        {expanded ? "^" : "v"}
      </button>
      <ul className={[styles.li, expanded ? styles.expanded : ""].join(" ")}>
        {children}
      </ul>
    </li>
  );
};

const MenuItem = ({ id, focus, setFocus }) => {
  return (
    <li onFocus={() => setFocus(id)}>
      <a href={`#${id}`}>{id}</a>
    </li>
  );
};
export default function HoverToggle() {
  const [focus, setFocus] = useState(null);

  return (
    <div className={styles.container}>
      <div>
        <h2>But we can make it nicer</h2>
        <p>
          now we can't have a link to the overall category e.g. of /products
          page, since this now opens the dropdown. w3's second version uses
          toggle buttons, but those intrude a bit too much into the design for
          my liking. I actually really like the way ebay did it with toggle
          buttons that appear only when you keyboard-tab onto them.
        </p>
        <p>
          To me this seems quite nice as the menu still works with normal
          mouse-hover contentions, and the keyboard experience is quite close to
          that. Additionally it uses each html element in its intended purpose.
          and could probably also be done with css and quite minimal vanilla js
        </p>
      </div>
      <div>
        <header>
          <nav className={styles.nav}>
            <ul className={styles.bar}>
              <MenuItem id="home" focus={focus} setFocus={setFocus} />
              <SubMenu id="products" focus={focus} setFocus={setFocus}>
                <li>
                  <a href="#p-a">p-a</a>
                </li>
                <li>
                  <a href="#p-b">p-b</a>
                </li>
                <li>
                  <a href="#p-b">p-b</a>
                </li>
              </SubMenu>
              <SubMenu id="solution" focus={focus} setFocus={setFocus}>
                <li>
                  <a href="#s-a">s-a</a>
                </li>
                <li>
                  <a href="#s-b">s-b</a>
                </li>
                <li>
                  <a href="#s-c">s-c</a>
                </li>
              </SubMenu>

              <MenuItem id="about" focus={focus} setFocus={setFocus} />
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
