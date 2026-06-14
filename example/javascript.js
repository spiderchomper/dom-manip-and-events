const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPar = document.createElement("p");
redPar.textContent = "hey I'm red!";
redPar.style.color = "red";
container.appendChild(redPar);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const borderDiv = document.createElement("div");
borderDiv.style.borderStyle = "solid";
borderDiv.style.backgroundColor = "pink";

const insideH1 = document.createElement("h1");
insideH1.textContent = "I'm in a div";

const insideP = document.createElement("p");
insideP.textContent = "ME TOO!";

borderDiv.appendChild(insideH1, insideP);

content.appendChild(borderDiv);
