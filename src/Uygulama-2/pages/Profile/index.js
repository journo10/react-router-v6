import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) =>
      setProfile(res.data)
    );
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile.map((profil) => (
        <p key={profil.id}>{profil.title}</p>
      ))}
    </div>
  );
}

export default Profile;
