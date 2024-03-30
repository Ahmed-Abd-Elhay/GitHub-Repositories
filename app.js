//  Create Variables 
let getReposInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let showData = document.querySelector(".show-data");


// Button Click function
getButton.onclick = function () {
    getRepos();
}

// Get Repos Function 
function getRepos() {
    if (getReposInput.value !== "") {

        fetch(`https://api.github.com/users/${getReposInput.value}/repos`).then((repos) => {

            return repos.json();

        }).then((repositres) => {

            // Empty the Show Data
            showData.innerHTML = '';

            // Loop On Repositres
            repositres.forEach(repo => {

                // Create Main Div 
                let mainDiv = document.createElement("div");

                // Create Text Node 
                let mainDivText = document.createTextNode(repo.name);

                // Apeend Text in Main Div
                mainDiv.appendChild(mainDivText);

                // Create Url anchor Tag
                let url = document.createElement("a");

                // Create Url Text 
                let urlText = document.createTextNode("Visit");

                // Add urlText to url Tag
                url.appendChild(urlText);

                // Add the Href Hyper Text Referance
                url.href = `https://github.com/${getReposInput.value}/${repo.name}`;

                // Create Target Atrribute to be Blank
                url.setAttribute("target", "_blank");

                // Add Url In Main Div
                mainDiv.appendChild(url);

                // Create Stars Span 
                let starsSpan = document.createElement('span');

                // Create Stars Span TextNode
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add stars TextNode to Stars Spn
                starsSpan.appendChild(starsText);

                // Append Stars Span to Main Div
                mainDiv.appendChild(starsSpan);

                // Add ClassName To Main Div
                mainDiv.className = "repo-box";

                // Append Main Div to Container
                showData.appendChild(mainDiv);
            });

        });

    } else {
        showData.innerHTML = "<span> Pleace Write Github UserName. </span>";
    }
}