import animation from '../assets/animations/Animation-multi.json'
import Lottie from 'lottie-react'

const GreetUser = () => {

const greeting = [
    [22, "Nice to see you here, you're up late!"],
    [18, 'Good evening!'],
    [12, 'Good afternoon!'],
    [5,  'Good morning!'],
    [0,  'Whoa, early bird!']
],
hr = new Date().getHours();

for (var i = 0; i < greeting.length; i++) {
    if (hr >= greeting[i][0]) {
        return(
            <div className="greeting">
                <Lottie
            animationData={animation}
            loop
            autoPlay
            style={{ width: 250 }}
          />
          <div className="greet-text">
                <h1>{greeting[i][1]}</h1>
                <h3>What do you need to do today? Manage your time in an efficient way</h3>
            </div>
        </div>
        )
    }
}}

export default GreetUser