import React from "react";

const UsersPage = ({ users }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
        >
          <div className="flex flex-col space-y-1">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.username}</p>
          </div>
          <div className="flex flex-col space-y-1 items-end">
            <div className="text-md text-gray-700">{user.email}</div>
            <div className="text-md text-gray-700">{user.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
};

export default UsersPage;
