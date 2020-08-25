function timer() {
    
    const deadline = '2020-08-19';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / 1000 / 60 / 60) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const t = document.querySelector(selector),
              days = t.querySelector('#days'),
              hours = t.querySelector('#hours'),
              minutes = t.querySelector('#minutes'),
              seconds = t.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            
            days.textContent = t.days < 10 ? `0${t.days}` : t.days <= 0 ? '00' : t.days;
            hours.textContent = t.hours < 10 ? `0${t.hours}` : t.hours <= 0 ? '00' : t.hours;
            minutes.textContent = t.minutes < 10 ? `0${t.minutes}` : t.minutes <= 0 ? '00' : t.minutes;
            seconds.textContent = t.seconds < 10 ? `0${t.seconds}` : t.seconds <= 0 ? '00' : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('.timer', deadline);
}

export default timer;