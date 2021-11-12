class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate
    this.selector = selector

    this.container = document.querySelector(this.selector)
    this.days = this.container.querySelector('[data-value="days"]')
    this.hours = this.container.querySelector('[data-value="hours"]')
    this.mins = this.container.querySelector('[data-value="mins"]')
    this.secs = this.container.querySelector('[data-value="secs"]')
  }
  getRefs() {
    const days = this.days
    const hours = this.hours
    const mins = this.mins
    const secs = this.secs
    return { days, hours, mins, secs }
  }

  setTime = ({ days, hours, mins, secs }) => {
    const time = this.targetDate - Date.now()
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    this.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )
    this.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    )
    this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000))
  }

  pad(value) {
    return String(value).padStart(2, '0')
  }
  start = () => {
    setInterval(() => {
      this.setTime(this.getRefs())
    })
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
})

timer.start()

