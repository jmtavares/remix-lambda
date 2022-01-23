import { NavLink } from "remix";

const menus = [
  {
    to: "/",
    label: "Homepage",
  },
  {
    to: "/universities",
    label: "Universities",
  },
];

const Header = () => {
  return (
    <header>
      <h1>Remix Demo</h1>
      <div>
        {menus.map((menu) => {
          return (
            <NavLink
              key={menu.to}
              to={menu.to}
              prefetch="intent"
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: "#dd354c" }
                  : { backgroundColor: "#273747" }
              }
            >
              {menu.label}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
