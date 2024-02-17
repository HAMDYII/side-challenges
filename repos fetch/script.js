const input = document.querySelector(".repo-name");
const getButton = document.querySelector(".get-btn");
const username = document.querySelector("h3");
const reposBox = document.querySelector(".repos");

getButton.onclick = () => {
  getRepos();
};

const getRepos = () => {
  if (input.value === "") {
    username.innerHTML = `<span>You must enter a Github user</span>`;
  } else {
    username.innerHTML = `${input.value}'s Repositories`;
    reposBox.innerHTML = "";
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => {
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          username.innerHTML = "";
          reposBox.innerHTML = `There was an error while fetching ${input.value}'s Repositories ,Please recheck the username`;
        }
      })
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          reposBox.innerHTML += `<div class="repo">
          <span class="name">${response[i].name}</span>
          <span class="stars">Stars "${response[i].stargazers_count}"</span>
          <a class="visit-btn" target="_blank" href=${response[i].svn_url}>visit</a> 
          </div>`;
        }
      });
  }
};
