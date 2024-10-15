import { useState, useEffect } from "react";

export function UseEffect() {
  const [userData, setUserData] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setUserLoading(false);
      }
    };

    fetchData();
  }, []);

  if (userLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userData.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
