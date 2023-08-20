// let form = document.querySelector('form').id
// let button = document.querySelector('button')
// const userName = 'admin'
// const userPassword = 'qwerty'
// const userEmail = '123@gmail.com'

// button.addEventListener('click', function () {
//     if(form==='autorization') {
//         let inputs = document.querySelectorAll('input')

//         if(inputs[0].value===userName
//         && inputs[1].value===userPassword){
//             alert('Авторизация прошла успешно')
//         } else {
//             alert('Неверный логин или пароль')
//         }
//         document.getElementById("registration").style.visibility = "hidden";
//     } else if(form==='registration') {
//         let inputs = document.querySelectorAll('input')
//         let users = []
//         for(input in inputs) {
//             users.push(input)
//         }
//         alert(users)
//         document.getElementById("registration").style.visibility = "hidden";
//     }
// })

let btn = document.querySelector('.view-map')

btn.addEventListener('click', function() {
navigator.geolocation.getCurrentPosition(function(position) {
        coords = position.coords
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let path = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
        let link = document.querySelector('.link')
        link.innerHTML = `<a href="${path}">Посмотреть местоположение</a>`
        btn.style.visibility = 'hidden'
        
        let tile = new ol.layer.Tile({
            source: new ol.source.OSM()
        })
        let view1 = new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 15
        })

        let map = new ol.Map({
            target: 'map',
            layers: [tile],
            view: view1
        })
    })
})