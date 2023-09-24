const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const pDesc = document.querySelector('#weather');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=imperial&appid=1ce02409f68cb2fb2a0f889799ee056a'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    let desc = data.weather[0].description
    let icon = data.weather[0].icon
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const foreImg = document.createElement('img');
    foreImg.setAttribute('src', iconsrc)
    foreImg.setAttribute('alt', '- clear sky')
    pDesc.textContent = `${desc}`

    weatherIcon.appendChild(foreImg)
}
