import './timerScreen.css'

function TimerScreen({timer, setTimer}) {

    function toggleTimer() {
        document.getElementById("timer-counter").style.animation = "timer-animation 1s infinite"
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
          }, 1000);
      
          return () => {
            clearInterval(interval);
          };
    }


    return(
        <div className='timer-counter-wrapper'>
            <div className='timer-counter' id="timer-counter">{timer}</div>
            <div className='menu-button' onClick={toggleTimer}>GO !</div>
        </div>
    )
}

export default TimerScreen