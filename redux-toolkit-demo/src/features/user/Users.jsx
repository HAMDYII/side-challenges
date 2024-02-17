import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useEffect } from "react";

const Users = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderedUsers = users.data.map((user) => <li>{user.firstname}</li>);
  return (
    <section>
      <h2>List of users:</h2>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>Error.</p>}
      {!users.loading && !users.error
        ? users.data.length > 0
          ? renderedUsers
          : "no users"
        : null}
    </section>
  );
};

export default Users;
