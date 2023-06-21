import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <Link to={"/"} className="header__title">
        Podcaster
      </Link>
    </HeaderStyled>
  );
};

export default Header;
