import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  // const { email } = user?.user;
  // console.log(email);
  // console.log(user.user);
  // console.log(user);
  const location = useLocation();
  const links = (
    <>
      <li className="text-base ">
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li className="text-base">
        <NavLink to={"/allArticles"}>All Articles</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/myArticles"}>My Articles</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/postArticle"}>Post Article</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/"}>About Us</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/signUp"}>Sign Up</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/signIn"}>Sign In</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      className={`${
        location.pathname === "/"
          ? "bg-transparent"
          : "bg-linear-to-r from-[#01257D] to-[#00FFFF] via-[#0E7490]"
      }`}
    >
      <div className={`navbar  max-w-11/12 mx-auto py-6 text-white`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            {/* <img className="w-8 h-8 " src={logoIcon} alt="" /> */}
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 fill-current text-white"
            >
              <path
                d="M16,1c8.271,0,15,6.729,15,15s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1 M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16
            s16-7.163,16-16S24.837,0,16,0L16,0z"
              />
              <path
                d="M16,7.045L24.955,16L16,24.955L7.045,16L16,7.045 M16,5.607l-0.793,0.793L6.4,15.107L5.607,16l0.793,0.893l8.807,8.707
            L16,26.393l0.793-0.793l8.807-8.707L26.393,16l-0.793-0.893l-8.807-8.707L16,5.607L16,5.607z"
              />
            </svg>
            <a className="text-3xl font bold text-white ">Clarity Insights</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#00183A] rounded-box w-52"
              >
                <li>
                  <a>My Articles</a>
                </li>
                <li>
                  <a>Post Article</a>
                </li>
                <li onClick={handleSignOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            // <p>{user?.user?.email}</p>
            <Link to="/signIn">Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
