import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import HeaderStyled from "./HeaderStyled";
import { useAppSelector } from "../../store";

const Header = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">
        <Link to={"/"}>Podcaster</Link>
      </h1>
      {isLoading && <CircularProgress />}
    </HeaderStyled>
  );
};

export default Header;
