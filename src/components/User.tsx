import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const UserComponent = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "abc123",
      name: "Fernando Alonso",
    });
  };

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {!user ? <pre>You don´t have user, touch the button</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
