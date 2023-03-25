const fajrTime = document.getElementById('fajr-time');
const dhuhrTime = document.getElementById('dhuhr-time');
const asrTime = document.getElementById('asr-time');
const maghribTime = document.getElementById('maghrib-time');
const ishaTime = document.getElementById('isha-time');


function getPrayerTimes(city) {
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=8`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const timings = data.data.timings;
      fajrTime.innerHTML = timings.Fajr;
      dhuhrTime.innerHTML = timings.Dhuhr;
      asrTime.innerHTML = timings.Asr;
      maghribTime.innerHTML = timings.Maghrib;
      ishaTime.innerHTML = timings.Isha;
    })
    .catch(error => console.error(error));
}


const governorates = document.getElementById('governorates');
governorates.addEventListener('change', () => {
  const selectedCity = governorates.value;
  getPrayerTimes(selectedCity);
});


getPrayerTimes('cairo');