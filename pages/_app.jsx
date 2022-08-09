import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style>
        {`
    `}
      </style>
    </>
  );
}

export default MyApp;
