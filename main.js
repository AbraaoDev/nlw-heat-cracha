const LinksSocialMedia = {
  github: "abraaodev",
  youtube: "abraao",
  facebook: "abraaohomualdo",
  instagram: "abraaoho",
  twitter: "captcha",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGihubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
    });
}

getGihubProfileInfos();
