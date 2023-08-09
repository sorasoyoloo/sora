const body = document.getElementsByTagName("body")[0];
const button = document.createElement("button");
const buttonText = "Hi";
button.innerHTML = buttonText;
body.appendChild(button);

button.addEventListener("click", () => {
  const text = "IM CENTER";
  const textElement = document.createElement("p");
  textElement.innerHTML = text;

  const divElement = document.createElement("div");
  divElement.appendChild(textElement);
  body.appendChild(divElement);
  divElement.style.height = "100vh";
  divElement.style.display = "flex";
  divElement.style.justifyContent = "center";
  divElement.style.alignItems = "center";
});


button.addEventListener("click", () => {
  const text = "IM CENTER";
  const textElement = document.createElement("p");
  textElement.innerHTML = text;

  const divElement = document.createElement("div");
  divElement.appendChild(textElement);
  body.appendChild(divElement);
  divElement.style.height = "100vh";
  divElement.style.display = "flex";
  divElement.style.justifyContent = "center";
  divElement.style.alignItems = "center";
});

