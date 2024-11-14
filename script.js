fetch ("https://api.spacexdata.com/v3/launches")
.then ((response) => {
    if (!response.ok) {
        throw new Error ("Network response wasn't OK")
        
    } return response.json()
}) .then ((data) => {

    const launchesList = document.getElementById("launches-list")

    data.forEach(launch => {
        const card = document.createElement("div")
        card.classList.add ("col-md-4" , "mb-4")


        card.innerHTML = `
        
        <img src="${launch.links.mission_patch}" class = "card-img-top">
        <h5 class="card-title">${launch.rocket.rocket_name}</h5>
        <p  class="card-text">${launch.details || "Not available"}</p>
        
        
        `
        
        launchesList.appendChild(card)
    });


}) .catch ((error => {
    console.error ("Fetching error" , error.message)
}))