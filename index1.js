const refs = {
  days: document.querySelector("span[data-value='days']"),
  hours: document.querySelector("span[data-value='hours']"),
  mins: document.querySelector("span[data-value='mins']"),
  secs: document.querySelector("span[data-value='secs']"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = refs;

    this.start();
  }
  start() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      const pad = this.pad;

      if (time >= 0) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
      } else {
        alert('Пустите Женю на проект! =)');
        clearInterval(this.start);
      }
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
};

const newLife = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Nov 15, 2021"),
});