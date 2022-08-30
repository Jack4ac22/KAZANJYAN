import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="main ">
        <h3 className="scale-up-ver-center">Hello, my name is</h3>
        <h1 className="scale-up-ver-center">Jack Kazanjyan</h1>
        <p className="scale-up-ver-center">
          I am a reformed Christian, presuppositionalist, young earth
          creationist, and a junior web developer.
        </p>
        <p className="scale-up-ver-center">
          This page is still under construction.
        </p>
        <h4 className="scale-up-ver-center">
          for more information, please contact me via{" "}
          <a
            href="mailto:kazanjyan.jack@gmail.com"
            className="scale-up-ver-center"
          >
            kazanjyan.jack@gmail.com
          </a>
          .
        </h4>
      </div>
      <style jsx>{`
        .main {
          align-content: center;
          align-items: center;
          background-color: #444;
          color: white;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          padding: 50px;
        }

        h1,
        h2,
        h3,
        h4,
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
