function fetchData() {
    return fetch("https://data.cityofnewyork.us/resource/rc75-m7u3.json")
    .then(response => response.json())
    .then(json => renderData(json)); 
}

function renderData(json) {
    const main = document.querySelector('main'); 
    json.filter(data => data.sex == 'F' && data.year == 2014).forEach(element => {
        const p = document.createElement('p');
        p.innerHTML = Cause: ${element.leading_cause} Number: ${element.deaths}; 
        main.appendChild(p);
    });
}
