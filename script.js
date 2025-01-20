async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'cb6538f8a8fc4df1be492634250201';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }

        const data = await response.json();
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;

        document.getElementById('weatherResult').innerHTML = `
            <p>Temperature: ${temperature}&deg;C</p>
            <p>Condition: ${condition}</p>
        `;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        console.error(error);
    }
}
