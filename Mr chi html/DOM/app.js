// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)

// const bookTitles = document.getElementsByClassName("name");
// console.log(bookTitles)

// console.log(Array.isArray(bookTitles))

// console.log(Array.isArray(Array.from(bookTitles)));
// const arrayResult= Array.from(bookTitles);
// arrayResult.forEach((element ) =>{
//     console.log(element)
// })

// console.log (arrayResult)
// bookTitles.array.array.forEach(element => {
//     console.log(element)
    
// });

// const lis = document.getElementsByTagName("li")
// console.log(lis)

// const pageBanner =  document.querySelector("#page-banner");
// console.log(pageBanner.parentNode)

// const pageBanner =  document.querySelector("#page-banner");
// console.log(pageBanner.childElementCount)



// const bookToRead = document.querySelector(".title");
// console.log(bookToRead)

// const title= document.querySelectorAll(".title");
// console.log(title)

// title.forEach(element =>{
//     console.log(element.textContent)
// })

// const bookTitle =  document.querySelectorAll(".name");
// bookTitle.forEach(element => {
//     console.log(element.textContent)
//     element.textContent += " (test) ";
    
// });

// const bookList = document.querySelector("#book-list ul");
// console.log(bookList) 

// bookList.addEventListener('click',(event)=>{
//     console.log(event)
// })

// bookList.addEventListener('click',(event)=>{
//     const deleteButton = event.target.textContent
//     console.log(deleteButton)
// })




const addBook = document.querySelector("#addBook");
const addBtn = document.querySelector("#add-book button");
const bookList = document.querySelector("#book-list ul"); 
const input = document.querySelector("#add-book input")



bookList.addEventListener('click',(event)=>{
        const deleteBtn = event.target.className
        if(deleteBtn == "delete"){
            const liTag =  event.target.parentNode;
            bookList.removeChild(liTag)
        
    
        }
    })



addBtn.addEventListener('click',(event) =>{
    
    event.preventDefault();
    const another = input.value .trim();
    if(another != ""){
    const li = document.createElement("li");
    li.innerHTML = `<span class="name">${another}</span>
	    			<span class="delete">delete</span>`
    bookList.appendChild(li);
    input.value = ""
    
}})
const searchInput = document.querySelector(["s#earch-books"])
searchInput.addEventListener("input", (event) => {
    const value = event.target.value;
    

});

