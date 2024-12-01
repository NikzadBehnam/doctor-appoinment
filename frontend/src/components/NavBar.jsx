import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const cssStyles = {
    navLinkBorder: "py-1  mb-2",
  };

  const navigate = useNavigate();

  // const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // if true we are logged in

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      <ul className="navbar hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className={cssStyles.navLinkBorder}>HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className={cssStyles.navLinkBorder}>ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className={cssStyles.navLinkBorder}>ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className={cssStyles.navLinkBorder}>CONTACT</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full "
              src={assets.profile_pic}
              alt=""
            />
            <img
              className="w-2.5 group-hover:rotate-180 transition-transform delay-150 ease-in-out"
              src={assets.dropdown_icon}
              alt=""
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-200 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded\ flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My profile
                </p>
                <p
                  onClick={() => navigate("/my-appoinments")}
                  className="hover:text-black cursor-pointer"
                >
                  My appoinments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
