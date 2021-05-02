const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        
        const filterData = data.filter(item => item.name === params)
        banderillas(filterData)
        
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {

    let elementos = ''

    data.forEach(item => {
            
            elementos += `
            <div class="card">
            <img src="${item.flag}" alt="Bandera ${item.name}" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>
                        <b>Población: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                </div>
            </div>
            `
    });

    banderas.innerHTML = elementos

}

