export const UsersList = ({ users, deleteUser, openModal }) => {
  return (
    <ul>
      {users.map(({ name, email, id, avatar }) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={() => deleteUser(id)}>Delete</button>
            <button onClick={() => openModal({ alt: name, src: avatar })}>
              Show Avatar
            </button>
          </li>
        );
      })}
    </ul>
  );
};
