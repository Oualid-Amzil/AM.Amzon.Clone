import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBasket } from "@mui/icons-material";
import { authActions } from "../app/auth/authSlice";
import { Logout } from "../app/auth/auth-actions";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basket = useSelector((state) => state.basket.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userEmail = useSelector((state) => state.auth.email);

  useEffect(() => {
    const userData = localStorage.getItem("userInfo");

    if (userData) {
      const transformeData = JSON.parse(userData);

      if (
        transformeData.expirationDate <= new Date() ||
        !transformeData.token ||
        !transformeData.userId
      ) {
        return;
      }

      dispatch(
        authActions.authentication({
          email: transformeData.email,
          token: transformeData.token,
          userId: transformeData.userId,
          expirationTime: transformeData.expirationDate,
          isAuthenticated: transformeData.isAuthenticated,
        })
      );
    }
  }, [dispatch]);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo img"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!isAuthenticated && "/login"}>
          <button
            onClick={() => {
              if (isAuthenticated) {
                dispatch(Logout(navigate));
              }

              return null;
            }}
            className="header__option"
          >
            <span className="header__optionLineOne">
              Hello, {!isAuthenticated ? "Guest" : `${userEmail}`}
            </span>
            <span className="header__optionLineTwo">
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </span>
          </button>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
