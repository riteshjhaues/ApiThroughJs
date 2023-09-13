// API endpoint URLs
const globalStatsURL = 'https://disease.sh/v3/covid-19/all';
const countryStatsURL = 'https://disease.sh/v3/covid-19/countries/';

// DOM elements
const totalCasesElement = document.getElementById('total-cases');
const totalDeathsElement = document.getElementById('total-deaths');
const totalRecoveredElement = document.getElementById('total-recovered');
const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('search-button');
const countryCasesElement = document.getElementById('country-cases');
const countryDeathsElement = document.getElementById('country-deaths');
const countryRecoveredElement = document.getElementById('country-recovered');

// Fetch global COVID-19 statistics
fetch(globalStatsURL)
    .then((response) => response.json())
    .then((data) => {
        totalCasesElement.textContent = data.cases;
        totalDeathsElement.textContent = data.deaths;
        totalRecoveredElement.textContent = data.recovered;
    });

// Fetch country-specific COVID-19 statistics
searchButton.addEventListener('click', () => {
    const country = countryInput.value.trim();

    if (country === '') {
        alert('Please enter a country name.');
        return;
    }

    fetch(`${countryStatsURL}${country}`)
        .then((response) => response.json())
        .then((data) => {
            countryCasesElement.textContent = data.cases;
            countryDeathsElement.textContent = data.deaths;
            countryRecoveredElement.textContent = data.recovered;
        })
        .catch((error) => {
            alert('Country not found or API request failed.');
        });
});
