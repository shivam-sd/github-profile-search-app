const APIURL = "https://api.github.com/users/";

const getuser = async(username) => {
    let responce = await fetch(APIURL + username);
    console.log(responce);
    let data = await responce.json();
    console.log(data);

    data = `<div class="profile">
         <img src="${data.avatar_url}" width="120px" alt="">
     </div>
     <div class="details">
         <h3 id="name"><strong>Name :- &nbsp;</strong>${data.name}</h3>
         <br>
         <h3 id="name"><strong>Login I'd :- &nbsp;</strong>${data.login}</h3>
         <div class="follower">
             <h3><strong>${data.followers}&nbsp;</strong>Followers</h3>
             <h3><strong>${data.following} &nbsp;</strong>Following</h3>
             <h3><strong>${data.public_repos} &nbsp;</strong>Repo</h3>
         </div>
     </div>`;
     
     document.querySelector(".profle-details").innerHTML = data;
     getrepos(username);

}
// getuser("shivam-sd")

let repos = document.querySelector(".repos");

const getrepos = async(username) => {
  let responce = await fetch(APIURL + username + "/repos");
  console.log(responce);
  let data = await responce.json();
  console.log(data);
  data.forEach(elem => {
    console.log(elem);
    let item = document.createElement("a");
    item.classList.add("repo");
    item.href = elem.html_url;
    item.innerText = elem.name;
    item.target = "_blank";
    repos.appendChild(item);   
    // repos.appendChild(); 
  });
}

let input = document.querySelector("#input");
let form = document.querySelector("form");

const searchdata = () => {
   form.addEventListener("submit" , (ev) => {
    console.log(input.value);
    getuser(input.value);
    ev.preventDefault();
   })
}
searchdata();


























// let search = document.querySelector("#input");
// let repos = document.querySelector(".repos");

// const getuser = async (username) => {
//     let responce = await fetch(APIURL + username);
//     console.log(responce);
//     let data = await responce.json();
//     console.log(data);
     
//     data = `<div class="profile">
//         <img src="${data.avatar_url}" width="120px" alt="">
//     </div>
//     <div class="details">
//         <h3 id="name"><strong>Name :- &nbsp;</strong>${data.name}</h3>
//         <br>
//         <h3 id="name"><strong>Login I'd :- &nbsp;</strong>${data.login}</h3>
//         <div class="follower">
//             <h3><strong>${data.followers}&nbsp;</strong>Followers</h3>
//             <h3><strong>${data.following} &nbsp;</strong>Following</h3>
//             <h3><strong>${data.public_repos} &nbsp;</strong>Repo</h3>
//         </div>
//     </div>`;
    
//     document.querySelector(".profle-details").innerHTML = data;
    
//     getrepos(username);
// }
// getuser("shivam-sd");


// const getrepos = async(username) => {
    
//     let responce = await fetch(APIURL + username + "/repos");
//     console.log(responce);
//     let data = await responce.json();
//     console.log(data);
//     data.forEach((elem) => {
//         console.log(elem);
//         let item = document.createElement("a");
//         item.classList.add("repo");
//         item.href = elem.html_url;
//         item.innerText = elem.name;
//         item.target = "_blank";
//         repos.appendChild(item); 
//     });
// };

// let form = document.querySelector("form");

// // const searchdata = () => {
// //     form.addEventListener("submit", (ev) => {
// //         ev.preventDefault();
// //         if(input.value != ""){
// //         getuser(input.value);
// //         input.value = "";
// //         }
// //         return false;
    
// // });
// // };
// // searchdata();