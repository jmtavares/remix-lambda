import { Link, NavLink, Outlet, useLoaderData } from "remix";
import styles from "../styles/universities.css";

export const meta = () => {
  return {
    title: "Universities",
  };
};

export const links = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
  const res = await fetch(
    "http://universities.hipolabs.com/search?country=Portugal"
  );
  const universities = await res.json();  

  return Array.from(new Set(universities.map((u) => u.name)));
};

export default function Universities() {
  const universities = useLoaderData();

  return (
    <div>
      <h1>Universities</h1>
      <Link to="/">
        <button type="button">Homepage</button>
      </Link>
      <div className="universities-container">
        <ul>
          <NavLink
            to={encodeURI("jalksjdlaksjd")}
            prefetch="intent"
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: "black" }
            }
          >
            <p>Not found</p>
          </NavLink>
          {universities.map((name) => {
            return (
              <li key={name}>
                <NavLink
                  to={encodeURI(name)}
                  prefetch="intent"
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : { color: "black" }
                  }
                >
                  <p>{name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
