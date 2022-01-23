import { Link } from "remix";

export const meta = () => {
  return {
    title: "Homepage",
  };
};

export default function Index() {
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <Link to="universities" prefetch="none">
          Universities no prefetch
        </Link>
      </div>

      <div>
        <Link to="universities" prefetch="intent">
          Universities prefetch
        </Link>
      </div>
    </div>
  );
}
