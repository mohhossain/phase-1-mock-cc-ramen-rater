// write your code here

let menu = document.getElementById('ramen-menu');


// let img = document.createElement('img');
// img.src = "./assets/ramen/shoyu.jpg"

// menu.append(img)


fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then( ramens => {
    console.log(ramens, 'Fetching from the server')

    ramens.forEach(ramen => {
        renderramens(ramen)
    })

})

const renderramens = (ramen) => {
    let img = document.createElement('img');
    img.src = ramen.image

    menu.append(img)


    img.addEventListener('click', () => {
        console.log(ramen)
        let ramenImage = document.querySelector('.detail-image')
        ramenImage.src = ramen.image

        let name = document.querySelector('.name')
        name.innerHTML = ramen.name

        let restaurant = document.querySelector('.restaurant')
        restaurant.innerHTML = ramen.restaurant

        let rating = document.getElementById('rating-display')
        rating.innerHTML = ramen.rating

        let comment = document.getElementById('comment-display')
        comment.textContent  = ramen.comment
    })
} 


let form = document.getElementById('new-ramen')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let comment = document.getElementById('new-comment')
    console.log(e.target.name.value, e.target.restaurant.value, e.target.image.value, e.target.rating.value, comment.value)

    renderramens({
        name: e.target.name.value,
        restaurant:  e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: comment.value
    })


    fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: e.target.name.value,
        restaurant:  e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: comment.value
         })
    })
})


// renderramens({
    
//         "id": 4,
//         "name": "Gyukotsu Ramen",
//         "restaurant": "Za-Ya Ramen",
//         "image": "./assets/ramen/gyukotsu.jpg",
//         "rating": 8,
//         "comment": "Good to the last drop."
      
// })

// renderramens( 
//     {
//         id: 5,
//         name: "Kojiro Red Ramen",
//         restaurant: "Flatiron restaurant",
//         image: "https://assets.bonappetit.com/photos/5e3c7a3c866b940008106763/5:7/w_2485,h_3479,c_limit/HLY-Veggie-Ramen-16x9.jpg",
//         rating: 10,
//         comment: "It's really delicious"
//     }
// )