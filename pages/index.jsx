import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <h3>Hi</h3>
        <h2>I am</h2>
        <h1>Jack Kazanjyan</h1>
        <h4>
          I am a reformed Christian, presuppositionalist, young earth
          creationist, and a junior web developer.
        </h4>
        <h4>This page is still under construction.</h4>
        <h4>
          for more information, please contact me via{" "}
          <a href="mailto:kazanjyan.jack@gmail.com">kazanjyan.jack@gmail.com</a>
          .
        </h4>
      </div>
      <style>{`
      .main{
        display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center
background-color: black;
text-align
      }

  `}</style>
    </>
  );
}
