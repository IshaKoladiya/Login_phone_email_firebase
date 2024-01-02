import { useState } from 'react';

const AgeCalc = () => {

    const [birthDate, setBirthDate] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [age, setAge] = useState({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    const calculateAge = () => {
        const birthDateObject = new Date(birthDate);
        const currentDateObject = new Date();
    
        const timeDifference:number = currentDateObject.getTime() - birthDateObject.getTime();
    
        const millisecondsInSecond = 1000;
        const secondsInMinute = 60;
        const minutesInHour = 60;
        const hoursInDay = 24;
        const daysInMonth = 30; // Assuming an average month length
        const monthsInYear = 12;
    
        const seconds = Math.floor(timeDifference / millisecondsInSecond) % secondsInMinute;
        const minutes = Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute)) % minutesInHour;
        const hours = Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute * minutesInHour)) % hoursInDay;
        const days = Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)) % daysInMonth;
        const months = Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay * daysInMonth)) % monthsInYear;
        const years = Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay * daysInMonth * monthsInYear));
    
        setAge({
          years,
          months,
          days,
          hours,
          minutes,
          seconds,
        });
      };
      const curr = () =>{
        const current = new Date().toDateString;
        setCurrentDate(current)
      }


  return (
    <>
        <h1>Age Calculater</h1>

        <div>
        <label>Birth Date:</label>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      </div>
      <div>
        <label>Current Date:</label>
        <p onClick={curr}>{currentDate}</p>
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      <div>
        <h2>Age:</h2>
        <p>Years: {age.years}</p>
        <p>Months: {age.months}</p>
        <p>Days: {age.days}</p>
        <p>Hours: {age.hours}</p>
        <p>Minutes: {age.minutes}</p>
        <p>Seconds: {age.seconds}</p>
      </div>
      
    </>
  )
}

export default AgeCalc
