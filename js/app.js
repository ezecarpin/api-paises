const banderas = document.querySelector('#banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioReal(data)
        filtrarDatos(data)

        
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
                    <p>
                        <a href="pais.html?name=${item.name}">Más info...</a>
                    </p>
                </div>
            </div>
            `
    });

    banderas.innerHTML = elementos

}