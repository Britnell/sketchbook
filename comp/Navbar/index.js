import Menu from "./Menu";
import CSSNavbar from "./Navbar";
import ToggleNavbar from "./toggle";
import HoverToggle from "./hover";

const Page = () => {
  return (
    <>
      <h2>
        Making a hover elements just a little more accessible with a little css
      </h2>
      <CSSNavbar />
      <ToggleNavbar />
      <HoverToggle />
      <Menu />
    </>
  );
};

export default Page;
