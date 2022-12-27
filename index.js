//1. API url
const url = "https://jsonplaceholder.typicode.com/users";
//2.Fetch Users from the API URL.
function fetchusers(){

   //2.1  make use of the browser fetch API
   fetch(url)
   .then((response) => response.json())
   .then((data)=>{
 //2.2 passs the user data to the renderusers function
      renderUsers(data);
   })
}
//3. Render the user in the DOM
function renderUsers(usersData){
console.log(usersData);
const ul = document.getElementById("user-list-container");
console.log(ul);
// Render an li tg for each of the users
usersData.forEach((user ,index) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <span>${index + 1}.</span>
  <span>${user.name}</span>
  <span> -</span>
  <span class="username"> ${user.username}</span>
  `;
  //3.2 Append the current user li tag to the ul tag
  ul.appendChild(li);
});
}
//4.Add a search function in the DOM
function searchUsersByUsername(){
const input = document.getElementById("search");
const ul = document.getElementById("user-list-container");
const inputValue = input.value.toUpperCase();
const usersList = ul.querySelectorAll("li")//arra of all li tags []
// Loop through all the users and render the ones that match the search
for (let index=0 ;index<usersList.length;index++){
const usernameSpanTag=usersList[index].querySelector(".username");
const usernameSpanTagvalue = usernameSpanTag.innerText.toUpperCase();
const isMatch= usernameSpanTagvalue.indexOf(inputValue)>-1;
if (isMatch){
   usersList[index].style.display = "block";
}else{
   usersList[index].style.display = "none";
}
}
}
fetchusers();





