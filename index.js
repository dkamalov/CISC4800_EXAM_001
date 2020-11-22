function fetchData() {
    return fetch("https://data.cityofnewyork.us/resource/rc75-m7u3.json")
    .then(response => response.json())
    .then(json => renderData(json)); 
}

function renderData(json) {
    const main = document.querySelector('main'); 
    json.filter(data => data.date_of_interest > 0).forEach(element => {
        const e = document.createElement('e');
        e.innerHTML = COVID COUNT: ${element.case_count} HOSPITALIZATIONS: ${element.hospitalized_count}; 
        main.appendChild(p);
    });
}
