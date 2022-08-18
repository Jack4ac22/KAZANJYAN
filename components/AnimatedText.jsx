export default function AnimatedText(props) {
  return (
    <>
      <span>{props.text}</span>
      <style jsx>{`
        span {
          animation-delay: ${props.delay}s;
          animation-duration: ${props.duration}s;
          animation-iteration-count: infinite;
          animation-name: Name;
          animation-timing-function: ease-in-out;
          font-size: ${props.fontSize}px;
          font-weight: ${props.fontWeight};
        }
        @keyframes Name {
          from {
            color: ${props.color1};
          }

          50% {
            color: ${props.color2};
          }

          to {
            color: ${props.color1};
          }
        }
      `}</style>
    </>
  );
}
