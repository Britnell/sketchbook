/*
 * https://www.w3.org/WAI/tutorials/menus/flyout/#use-parent-as-toggle
 * https://www.w3.org/WAI/tutorials/menus/application-menus/
 * https://headlessui.com/react/tabs
 *
 */

import { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.scss";

const keys = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  enter: 13,
  space: 32,
  esc: 27,
  tab: 9,
};

const menuConfig = {
  home: {
    name: "home",
    url: "#home",
  },
  products: [
    { name: "PA", url: "#PA" },
    { name: "PB", url: "#PB" },
    { name: "PC", url: "#PC" },
  ],
  solutions: [
    { name: "SA", url: "#SA" },
    { name: "SB", url: "#SB" },
    { name: "SC", url: "#SC" },
  ],
  branches: [
    { name: "London", url: "#london" },
    { name: "Brighton", url: "#Brighton" },
    { name: "Cambridge", url: "#Cambridge" },
    { name: "Leeds", url: "#Leeds" },
    { name: "Oxford", url: "#Oxford" },
    { name: "Bristol", url: "#Bristol" },
  ],
  about: {
    name: "About",
    url: "#about",
  },
};

const Menu = () => {
  const [menuFocus, setMenufocus] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const stepFocus = (dir) => {
    const menuSize = Object.keys(menuConfig).length;
    let next = menuFocus + dir;
    if (next < 0) next += menuSize;
    if (next >= menuSize) next -= menuSize;
    setMenufocus(next);
  };

  const onKey = (ev) => {
    switch (ev.keyCode) {
      case keys.right:
        stepFocus(1);
        ev.preventDefault();
        break;
      case keys.left:
        stepFocus(-1);
        ev.preventDefault();
        break;
      case keys.space:
        if (!expanded) {
          setExpanded(true);
          ev.preventDefault();
        }
        break;
      case keys.down:
        if (!expanded) {
          setExpanded(true);
          ev.preventDefault();
        }
        break;
      case keys.esc:
        if (expanded) {
          setExpanded(false);
          ev.preventDefault();
        }
        break;
      case keys.tab:
        // close when user tabs off
        setExpanded(false);
        break;
      default:
        // console.log(ev.keyCode);
        break;
    }
  };

  const MenuBuilder = ({ config }) => {
    const menu = Object.entries(config).map(([name, item], index) => {
      if (Array.isArray(item)) {
        // Menuitem w Submenu
        return (
          <MenuItem
            key={index}
            name={name}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            focus={menuFocus}
            setFocus={setMenufocus}
          >
            {item.map((it, idx) => (
              <SubMenuitem key={idx} name={it.name} url={it.url} />
            ))}
          </MenuItem>
        );
      } else {
        // Menuitem no Submenu

        return (
          <MenuItem
            key={index}
            name={item.name}
            url={item.url}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            focus={menuFocus}
            setFocus={setMenufocus}
          />
        );
      }
    });

    return <ul role="menubar">{menu}</ul>;
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>For larger Menu's lets try more advanced keyboard navigation</h2>
        <p>
          Here the menu is just one tabbable item, the rest is navigated through
          arrow keys
        </p>
      </div>
      <nav onKeyDown={onKey} className={styles.nav}>
        <MenuBuilder config={menuConfig} />
      </nav>
    </div>
  );
};

const MenuItem = ({
  index,
  focus,
  setFocus,
  name,
  url,
  expanded,
  setExpanded,
  children,
}) => {
  const ref = useRef();
  const isFocus = index === focus;
  const isExpanded = isFocus && expanded;
  const [subfocus, setSubfocus] = useState(0);

  const subItems = children ? children?.length : 0;

  useEffect(() => {
    if (!ref.current) return;
    if (!isFocus) {
      // reset subfocus to top when left
      setSubfocus(0);
      return;
    }

    // Focus menuitem
    if (!isExpanded || subItems === 0) {
      ref.current.focus();
    }

    // focus submenuitems
    if (isExpanded) {
      const it = ref.current.querySelectorAll("li a")[subfocus];
      it && it.focus();
    }

    // Focus submenuitems
  }, [isFocus, isExpanded, subfocus, subItems, ref]);

  const onFocus = () => {
    if (index === 0) setFocus(0);
  };

  const stepFocus = (st) => {
    let next = subfocus + st;
    if (next >= subItems) next = 0;
    if (next < 0) next = subItems - 1;
    setSubfocus(next);
  };

  const onKey = (ev) => {
    switch (ev.keyCode) {
      case keys.up:
        stepFocus(-1);
        ev.preventDefault();
        break;
      case keys.down:
        stepFocus(1);
        ev.preventDefault();
        break;

      case keys.enter:
        // expand if it has subitems and is currently closed
        console.log(focus, isExpanded, subfocus);
        if (subItems && !expanded) {
          setExpanded(true);
          ev.preventDefault();
        }
        break;
      default:
        break;
    }
  };

  // Menuitem
  if (subItems === 0)
    return (
      <li role="menuitem" className={styles.menuitem}>
        <a
          ref={ref}
          href={url}
          onFocus={onFocus}
          onKeyDown={onKey}
          tabIndex={index === 0 ? 0 : -1}
          aria-haspopup="false"
          aria-expanded={isExpanded}
        >
          {name}
        </a>
      </li>
    );

  // Submenu
  return (
    <li
      ref={ref}
      role="menuitem"
      tabIndex={index === 0 ? 0 : -1}
      aria-haspopup="true"
      aria-expanded={isExpanded}
      onFocus={onFocus}
      onKeyDown={onKey}
      className={styles.menuitem}
    >
      {name}
      {children ? <ul className={styles.submenu}>{children}</ul> : null}
    </li>
  );
};

const SubMenuitem = ({ name, url }) => (
  <li>
    <a href={url} tabIndex={-1}>
      {name}
    </a>
  </li>
);

export default Menu;
