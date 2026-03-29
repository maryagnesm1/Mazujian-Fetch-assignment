// Step 1: Verify fetch with console.log()
async function loadData() {
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const dataContainer = document.getElementById("dataContainer");

loadingMessage.style.display = "block";
errorMessage.textContent = "";
dataContainer.innerHTML = "";

//ChatGPT assistance removed search since doing Cat facts that will not give the option for searching//
try {
const response = await fetch("https://catfact.ninja/fact");

if (!response.ok) {
throw new Error("Failed to fetch data.");
}

const data = await response.json();

// Step 1
console.log(data);

// Step 2
//ChatGPT assistance with understanding code for title change//
const item = document.createElement("div");
item.innerHTML = `
  <h3>Mary Shares Interesting Cat Facts</h3>
  <p>${data.fact}</p>
`;
dataContainer.appendChild(item);



} catch (error) {
// Step 4
errorMessage.textContent = "Something went wrong. Please try again.";
console.log(error);
} finally {
loadingMessage.style.display = "none";
}
}

// Step 5
document.getElementById("loadBtn").addEventListener("click", loadData);


