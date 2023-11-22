const container = document.getElementById('container')

const template = (item) => {
    return `<div id='item-list'>
    <img src=${item.images}>
    <a href='./pages/detailNews/detail.html?id=${item.id}'><h1>${item.title}</h1></a>
    <p>${item.headline}</p>
    </div>`
}

const fetchData = () => {
    fetch('http://localhost:3001')
        .then(data => data.json())
        .then(item => {
            console.log(item)
            let content = ''
            item.data.map(bio => {
                content += template(bio)
            })
            container.innerHTML = content
            // const title = document.createElement('p')
            // title.textContent = item.data[0].name
            // container.appendChild(title)
            // const titleIntan = document.createElement('p')
            // titleIntan.textContent = item.data[1].name
            // container.appendChild(titleIntan)
            // const titleNasya = document.createElement('p')
            // titleNasya.textContent = item.data[2].name
            // container.appendChild(titleNasya)
            // const titleReni = document.createElement('p')
            // titleReni.textContent = item.data[3].name
            // container.appendChild(titleReni)
        })
}

fetchData()