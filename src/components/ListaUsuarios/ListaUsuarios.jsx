import React, { useState, useEffect } from "react";

export default function ListaUsuarios() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => data.results)
    .then((data) => {
      setProfiles(data);
    })
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <p>error al conectar con la API: {error.message}</p>;
  }

  const card = {
    width: "30rem",
    height: "100%",
  };
  return (
  <>
    <div className="row gap-3 m-3">
      {profiles.map((item)=>(
        <div key={item?.login?.uuid} className="col">
          <div className="card mx-auto" style={card}>
            <div className="card-body d-flex">
            <img src={item?.picture?.large} className="card-img-top w-25" alt={`${item?.name?.first} ${item?.name?.last}`}></img>
              <div className="d-flex w-100">
                <h5 className="m-auto">{item?.name?.first} {item?.name?.last}</h5>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Age:</strong> {item?.dob?.age}</li>
              <li className="list-group-item"><strong>Username:</strong> {item?.login?.username}</li>
              <li className="list-group-item"><strong>Email:</strong> {item?.email}</li>
              <li className="list-group-item"><strong>Cell:</strong> {item?.cell}</li>
              <li className="list-group-item"><strong>Location:</strong> {item?.location?.state},  {item?.location?.country}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </>);
}
