import { Link } from "remix";

export const meta = () => {
  return {
    title: "Homepage",
  };
};

export default function Index() {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
}
