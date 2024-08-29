const inputValue = document.querySelector("input");
const searchButton = document.getElementById("searchUser");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const logo = document.getElementById("logo");
const body = document.querySelector("body");
const lightDark = document.getElementById("lightDark");
const search = document.querySelector(".search");
const main = document.querySelector("main");
const followersContainer = document.getElementById("followers-container");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const twitter = document.getElementById("twitter");
const twitterLight = document.getElementById("twitter-light");
const link = document.getElementById("link");
const linkLight = document.getElementById("link-light");
const locations = document.getElementById("location");
const locationsLight = document.getElementById("location-light");
const home = document.getElementById("home");
const homeLight = document.getElementById("home-light");
const locationLink = document.querySelector(".locationLink");
const linkLink = document.querySelector(".linkLink");
const twitterLink = document.querySelector(".twitterLink");
const homeLink = document.querySelector(".homeLink");

searchButton.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${inputValue.value}`)
    .then((data) => data.json())
    .then((req) => {

      const year = req.created_at.slice(0, 4);
      const month = req.created_at.slice(5, 7);
      const date = req.created_at.slice(8, 10);

      if (req.message === "Not Found") {
        document.querySelector(".noResult").style.display = "block";
      } else {
        document.getElementById("userImg").src = `${req.avatar_url}`;
        document.getElementById("userName").textContent = req.name
          ? `${req.name}`
          : "Unknown!";
        document.getElementById(
          "createDate"
        ).textContent = `Joined ${date}.${month}.${year}`;
        document.getElementById("userLink").textContent = `@${req.login}`;
        document.getElementById("userLink").href = `${req.html_url}`;
        if (req.bio) {
          document.getElementById("userBio").textContent = `${req.bio}`;
        } else {
          document.getElementById("userBio").textContent =
            "This profile has no bio";
        }
        document.getElementById("userInfo").style.justifyContent =
          "space-between";

        repos.textContent = `${req.public_repos}`;
        followers.textContent = `${req.followers}`;
        following.textContent = `${req.following}`;

        locationLink.textContent = req.location
          ? `${req.location}`
          : "Not available";
        locationLink.href = req.location ? `${req.location}` : "#";
        linkLink.textContent = req.blog ? `${req.blog}` : "Not available";
        linkLink.href = req.blog ? `${req.blog}` : "#";

        twitterLink.textContent = req.twitter_username
          ? `${req.twitter_username}`
          : "Not available";
        twitterLink.href = req.twitter_username
          ? `${req.twitter_username}`
          : "#";
        homeLink.textContent = req.company ? `${req.company}` : "Not available";
        homeLink.href = req.company ? `${req.company}` : "#";
      }
      inputValue.value = "";
    })
    .catch((error) => {
      console.log(error.message);
    });
});

inputValue.addEventListener("click", () => {
  document.querySelector(".noResult").style.display = "none";
});

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  logo.src = "./images/devfinder-light-logo.png";
  body.style.backgroundColor = "#F6F8FF";
  lightDark.textContent = "DARK";
  lightDark.style.color = "var(--color-quaternary-light)";
  search.style.backgroundColor = "var(--color-secondary-dark)";
  inputValue.style.color = "#222731";
  main.style.backgroundColor = "var(--color-secondary-dark)";
  main.style.color = "var(--color-quaternary-light)";
  followersContainer.style.backgroundColor = "#F6F8FF";
  locations.style.display = "none";
  locationsLight.style.display = "block";
  link.style.display = "none";
  linkLight.style.display = "block";
  twitter.style.display = "none";
  twitterLight.style.display = "block";
  home.style.display = "none";
  homeLight.style.display = "block";
  locationLink.style.color = "#4B6A9B";
  linkLink.style.color = "#4B6A9B";
  twitterLink.style.color = "#4B6A9B";
  homeLink.style.color = "#4B6A9B";
});

moon.addEventListener("click", () => {
  sun.style.display = "block";
  moon.style.display = "none";
  logo.src = "./images/devfinder-dark-logo.png";
  body.style.backgroundColor = "var(--color-tertiary-dark)";
  lightDark.textContent = "LIGHT";
  lightDark.style.color = " var(--color-secondary-dark)";
  search.style.backgroundColor = "var(--color-quaternary-light)";
  inputValue.style.color = " var(--color-secondary-dark)";
  main.style.backgroundColor = "var(--color-quaternary-dark)";
  main.style.color = "var(--color-secondary-dark)";
  followersContainer.style.backgroundColor = "var(--color-tertiary-dark)";
  locations.style.display = "block";
  locationsLight.style.display = "none";
  link.style.display = "block";
  linkLight.style.display = "none";
  twitter.style.display = "block";
  twitterLight.style.display = "none";
  home.style.display = "block";
  homeLight.style.display = "none";
  locationLink.style.color = "#FFFFFF";
  linkLink.style.color = "#FFFFFF";
  twitterLink.style.color = "#FFFFFF";
  homeLink.style.color = "#FFFFFF";
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    fetch(`https://api.github.com/users/${inputValue.value}`)
      .then((data) => data.json())
      .then((req) => {
        console.log(req);

        const year = req.created_at.slice(0, 4);
        const month = req.created_at.slice(5, 7);
        const date = req.created_at.slice(8, 10);

        if (req.message === "Not Found") {
          document.querySelector(".noResult").style.display = "block";
        } else {
          document.getElementById("userImg").src = `${req.avatar_url}`;
          document.getElementById("userName").textContent = req.name
            ? `${req.name}`
            : "Unknown!";
          document.getElementById(
            "createDate"
          ).textContent = `Joined ${date}.${month}.${year}`;
          document.getElementById("userLink").textContent = `@${req.login}`;
          document.getElementById("userLink").href = `${req.html_url}`;
          if (req.bio) {
            document.getElementById("userBio").textContent = `${req.bio}`;
          } else {
            document.getElementById("userBio").textContent =
              "This profile has no bio";
          }
          document.getElementById("userInfo").style.justifyContent =
            "space-between";

          repos.textContent = `${req.public_repos}`;
          followers.textContent = `${req.followers}`;
          following.textContent = `${req.following}`;

          locationLink.textContent = req.location
            ? `${req.location}`
            : "Not available";
          locationLink.href = req.location ? `${req.location}` : "#";
          linkLink.textContent = req.blog ? `${req.blog}` : "Not available";
          linkLink.href = req.blog ? `${req.blog}` : "#";

          twitterLink.textContent = req.twitter_username
            ? `${req.twitter_username}`
            : "Not available";
          twitterLink.href = req.twitter_username
            ? `${req.twitter_username}`
            : "#";
          homeLink.textContent = req.company
            ? `${req.company}`
            : "Not available";
          homeLink.href = req.company ? `${req.company}` : "#";
        }
        inputValue.value = "";
      })
      .catch((error) => {
        document.querySelector(".noResult").style.display = "block";
        console.log(error.message);
      });
  }
});
