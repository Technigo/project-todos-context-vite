import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import animation from "../assets/animations/Animation-planning.json";
import "../styling/InspirationCard.css";

const InspirationCard = () => {
  //state variables
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  //Api url
  const URL = "https://type.fit/api/quotes";

  const fetchQuote = () => {
    fetch(URL)
      .then(response => response.json())
      .then(q => {
        setQuote(q);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching quote:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="section daily-inspo">
      {loading && <h1>Loading</h1>}
      {!loading && (
        <>
          <div id="lottie">
            <Lottie animationData={animation} loop autoPlay />
          </div>
          <div className="quote">
            <h1>Daily Inspiration</h1>
            <p>" {quote[Math.floor(Math.random() * quote.length)].text}"</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InspirationCard;
