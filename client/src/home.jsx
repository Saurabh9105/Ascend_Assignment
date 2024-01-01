import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        minHeight: "200vh",

        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "top",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          padding: "32px",
          borderRadius: "25px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1>Home Page</h1>
        <p>This is home page.</p>
      </div>

      <button>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none "
        >
          Signup
        </Link>
      </button>
      <br></br>
      <button>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </button>
      <br></br>
      <button>
        <Link
          to="/TextColumn"
          className="btn btn-default border w-100 bg-light rounded-0 "
        >
          CREATE LIST
        </Link>
      </button>
    </div>
  );
}

export default Home;
