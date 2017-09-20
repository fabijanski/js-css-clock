const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
}

const setDate = function(h) {
  const now = new Date().addHours(h);
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  if ( secondsDegrees == 90 ) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60 + seconds / 60 / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 + minutes / 60 / 12 + seconds / 60 / 60 / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const day = now.getDate();
  document.querySelector('.day').innerHTML = day;
}

const setDateWarsaw = setDate.bind(undefined, 0);
const setDateBangkok = setDate.bind(undefined, 4);

let interval = setInterval(setDateWarsaw, 1000);

warsaw.addEventListener("click", function() {
  clearInterval(interval);
  setDateWarsaw();
  interval = setInterval(setDateWarsaw, 1000);
  document.body.style.backgroundImage = "url('http://i1.trekearth.com/photos/76332/zzdsc00053.jpg')";
});

bangkok.addEventListener("click", function() {
  clearInterval(interval);
  setDateBangkok();
  interval = setInterval(setDateBangkok, 1000);
  document.body.style.backgroundImage = "url('http://img07.deviantart.net/aba0/i/2012/312/6/c/bangkok_night_by_rawangtak-d5j71rx.jpg')";
});
