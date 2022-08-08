import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <h1>My name is Jack</h1>
        <p>
          I am a reformed Christian, presuppositionalist, young earth
          creationist, and a junior web developer.
        </p>
        <p>This page is still under construction.</p>
        <p>
          for more information, please contact me via kazanjyan.jack@gmail.com.
        </p>
      </div>
      <style>{`
      .main{
        display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center
      }
  p{
    backgroundcolor: black;
    color: white;
    text-align

  }
  `}</style>
    </>
  );
}
