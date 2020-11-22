// JavaScript source code
function fetchData() {

    return fetch('https://data.cityofnewyork.us/resource/rc75-m7u3.json') // call on the api or place to pull data
        .then(response => response.json()) // turn data retrieved into json once u get something back
        .then(json => renderDatas(json)) // do something with the json

}

function renderDatas(json) {
    const h2 = document.querySelector('h2')
    json.forEach(data => {
        const p = document.createElement('p') // not inserting the element to browser yet 
        // bringing an element to existence
        p.innerHTML = `<strong>Cases:</strong> ${data.case_count}
        h2.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchData()
})

