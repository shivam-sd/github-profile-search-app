const APIURL = "https://api.github.com/users/";


const getuser = async (username) => {
    const responce = await fetch(APIURL + username);
    const data = await responce.json();
    console.log(data);

    const information = `<div class="profile1">

    <div class="pro">
        <img src="${data.avatar_url}" width="60px" alt="">
    </div>

    <div class="pro-name" style="border: 1px solid black;">
        <h3 class="name">${data.name}</h3>

        <div class="bio">
        <h5>bio:- &nbsp;<span>${data.bio}</span></h5>
        </div>

        <div class="fam">
            <h6>${data.followers}  <strong>Followers</strong></h6>
            <h6>${data.following}  <strong>Folowing</strong></h6>
        </div>

    </div>
    </div>

    <div class="repos1">
    
    </div>
    
    `;

    document.querySelector(".profile").innerHTML = information;
    getrepos(username)

}

getuser("shivam-sd");

const a = document.querySelector("a");

const getrepos = async (username) => {
    const repos = document.querySelector(".repos1"); 
    
    let responce = await fetch(APIURL + username + "/repos");
    let data = await responce.json();
    console.log(data);
    data.forEach(elem => {
        const item = document.createElement("a");
        // item.classList.add("repos");
        item.href = elem.html_url;
        item.innerText = elem.full_name;
        item.target = "_blank";
        repos.appendChild(item);
    });
}
let form = document.querySelector("form");

let input = document.querySelector("#serach");
const formsubmit= () => {
   if(input.value != ""){
    getuser(input.value);
   }
   else{
    return false;
   }
}


input.addEventListener("focusout",() =>{
    formsubmit();
})


// </div>

// <div class="repos">
// <a href="#">repo1</a>
// <a href="#">repo2</a>
// <a href="#">rep03</a>
// </div>