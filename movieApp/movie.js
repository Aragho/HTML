const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394"
const BASE_URL = "https://api.themoviedb.org/3/"
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

const movieMainContainer = document.querySelector(".movieMainContainer")
console.log(movieMainContainer)


const getMovies = async(url)=>{
        try {
            const response = await fetch(url)
            const data = await response.json();
            console.log(data.results);
            showMovie(data.results)
    
            // if(!response.ok){
            //     //if error is coming from javascript
            //     throw new Error("");
            // }
            
        } catch (error) {
            //if the error is coming from the back-end
            console.log(error)
        }
}

getMovies(API_URL)

function showMovie(movies){
        movieMainContainer.innerHTML = ``;

        movies.forEach(movie => {
            const{overview, title, vote_average, poster_path}= movie;
            const movieElement = document.createElement("div")
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
            
            <div>
                <img src = "${IMAGE_URL}${poster_path}" alt "image">
            </div>    
            <div class = "tittleRating">
                <span>${title}</span>
                <span>${vote_average}</span>
            </div>
            <div class = "overview">
                 <h2>Overview</h2>
                <p>${overview}</p>
            </div>
            `
            movieMainContainer.appendChild(movieElement);
        });
    }

    const searchMovieForm = document.querySelector(".search")
    console.log(searchMovieForm)

searchMovieForm.addEventListener(`keyup`,(event)=>{
        event.preventDefault();
        const inputValue = event.target.value
        console.log(inputValue)
        if(inputValue){
            const searchUrl = SEARCHMOVIEURL + "&query=" + inputValue
            console.log(searchUrl)
            getMovies(searchUrl) 
        }
        else{
            getMovies(API_URL)
        }
    })




// console.log(API_URL)

// // const getMovies = (url)=>{
// //     fetch(url)
// //     .then((response)=> response.json())
// //     .then((data)=>{console.log(data)})
// //     .catch((error)=>console.log(error))
// // }

// const getMovies = async(url)=>{
//     try {
//         const response = await fetch(url)
//         const data = await response.json();
//         console.log(data.result );

//         // if(!response.ok){
//         //     //if error is coming from javascript
//         //     throw new Error("");
//         // }
        
//     } catch (error) {
//         //if the error is coming from the back-end
//         console.log(error)
//     }

// }
// getMovies(API_URL)



