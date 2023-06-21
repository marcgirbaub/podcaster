import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">
        <Link to={"/"}>Podcaster</Link>
      </h1>
    </HeaderStyled>
  );
};

export default Header;
