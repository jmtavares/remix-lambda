import { useLoaderData } from "remix";
import styles from "../../styles/university.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const meta = ({ data }) => {
  return {
    title: data[0]?.name,
  };
};

export const loader = async ({ params }) => {
  const res = await fetch(
    `http://universities.hipolabs.com/search?name=${params.name}`
  );

  const universities = await res.json();

  if (universities.length) {
    return universities;
  } else {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

export default function University() {
  const university = useLoaderData();

  return (
    <div className="university-container">
      <h3>{university[0].name}</h3>
      {Object.keys(university[0]).map((key) => {
        return (
          <li key={key}>
            <b>{key}</b> - {university[0][key]}
          </li>
        );
      })}
    </div>
  );
}
