import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

import "./Member.css";

const Member = () => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    axios
      .get("https://ssc-reunion-default-rtdb.firebaseio.com/members.json")
      .then((response) => {
        setMembers(response.data);
      })
      .catch(() => {
        toast.error("Sorry! Something went Wrong", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  }, []);

  let card = null;

  if (members) {
    card = Object.keys(members).map((key, index) => (
      <div className="my_card" key={key}>
        <div className="profile_pic">
          {members[key].gender === "Male" ? (
            <img src="images/male.jpg" alt="Profile" />
          ) : (
            <img src="images/female.jpg" alt="Profile" />
          )}
        </div>

        <h3 className="member_name">{members[key].name} </h3>
        <p>
          <span className="title">ID: </span>
          {key}
        </p>
        <p>
          <span className="title">SERIAL: </span>
          <span
            style={{
              backgroundColor: "#d70f64",
              padding: "2px 5px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {" "}
            {index + 1}
          </span>
        </p>
        <p>
          <span className="title"> PHONE:</span>
          {members[key].phone}
        </p>
        <p>
          <span className="title">GENDER:</span>
          {members[key].gender}
        </p>
        <p>
          <span className="title">T-SHIRT:</span>
          {members[key].tshirt}
        </p>
        <p>
          <span className="title">ADDRESS:</span>
          {members[key].address}
        </p>
        <p>
          <span className="title"> TIME:</span>
          {members[key].time}
        </p>
      </div>
    ));
  }

  return <>{card}</>;
};

export default Member;
