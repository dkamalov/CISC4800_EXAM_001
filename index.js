function fetchData() {

    return fetch('https://data.cityofnewyork.us/resource/rc75-m7u3.json').then(response -> response.json())
                 
}

function renderDatas(json) {
    
    const h2 = document.querySelector('h2');
    json.forEach(data => { 
        const p = document.createElement('p')
        p.innerHTML = Hospitilizations: ${data.hospitalized_count}
        h2.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function () { fetchData() })
