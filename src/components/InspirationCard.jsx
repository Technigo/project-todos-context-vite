import { useState, useEffect } from 'react'
import '../styling/InspirationCard.css'

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
        <h1>Daily Inspiration</h1>
        <p>" {quote[Math.floor(Math.random() * quote.length)].text} "</p>
        </div>
        )}
    </>
)}

export default InspirationCard
