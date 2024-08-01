// import { useEffect } from "react";
import { useState } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API);
      if (!res.ok) {
        setError("Something wrong!");
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "2rem",
      }}
    >
      <h1>List of users</h1>
      {loading && (
        <img
          src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952bcrc79clqsjzqezdeo1ybkok99t2ocecul04pr5k&ep=v1_gifs_search&rid=200w.gif&ct=g"
          style={{ width: "120px" }}
        />
      )}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      <ul>{!error && users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
      <button onClick={fetchUsers}>Fetch</button>
    </div>
  );
}

export default App;
