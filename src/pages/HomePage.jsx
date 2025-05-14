import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Welcome to the Contact Book</h1>
      <p>Store your contacts securely and access them anytime.</p>
    </div>
  );
}
