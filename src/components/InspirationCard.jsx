import { useState, useEffect } from 'react'
import '../styling/InspirationCard.css'
import animation from '../assets/animations/Animation-planning.json'
import Lottie from 'lottie-react'

const InspirationCard = () => {

    const [quote, setQuote] = useState([])
    const [loading, setLoading] = useState(true)
    const URL = "https://type.fit/api/quotes"

    const fetchQuote = () => {
        fetch(URL)
            .then((response) => response.json())
            .then((q) => {
            setQuote(q);
            console.log(q);
            setLoading(false);
      })
        .catch((error) => {
            console.error("Error fetching quote:", error);
            setLoading(false);
      });
    }
    useEffect(() => {
          fetchQuote();
      }, []);
    
    


  return (
    <>
       {loading && (<h1>Loading</h1>
    )}
    {!loading && (
        <div className="section daily-inspo">
        <div className="quote"><h1>Daily Inspiration</h1>
        <p>" {quote[Math.floor(Math.random() * quote.length)].text}"</p>
        </div>
        <div id="lottie">
        <Lottie
        animationData={animation}
        loop
        autoPlay
    />
    </div>
  </div>
        )}
    </>
)}

export default InspirationCard
