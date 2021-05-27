// Declare variables
const characterList = document.querySelector(".character-list");
const characterInfo = document.querySelector(".character-info");
const modal = document.querySelector(".modal");
const input = document.querySelector(".search-term");

// Fetch data and save as a variable
let characters;
fetch("https://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((data) => (characters = data.results))
  .then(() => {
    getCharacters();
  });

// Get the names of the characters from the fetched data and add them to DOM
function getCharacters() {
  for (let i = 0; i < characters.length; i++) {
    const characterName = characters[i].name;
    const character = document.createElement("li");
    character.classList.add("character");
    character.textContent = characterName;
    characterList.appendChild(character);

    // Show modal with the character's info after clicking on character's name
    character.addEventListener("click", function () {
      getCharacterInfo(i);
      showModal();
    });

    // Filter characters by the search box
    input.addEventListener("input", function (event) {
      character.style.display = "none";

      if (
        character.textContent.includes(event.target.value) ||
        character.textContent.toUpperCase().includes(event.target.value) ||
        character.textContent.toLowerCase().includes(event.target.value)
      ) {
        character.style.display = "";
      } else {
        character.style.display = "none";
      }
    });
  }
}

// Get needed characters info from the fetched data and display them on the modal
function getCharacterInfo(character) {
  const characterKeys = Object.keys(characters[character]).slice(0, 8);
  const characterValues = Object.values(characters[character]).slice(0, 8);

  for (let i = 0; i < characterKeys.length; i++) {
    const characterKey = document.createElement("p");
    const characterValue = document.createElement("p");

    characterKey.classList.add("character-key");
    characterValue.classList.add("character-value");

    characterKey.textContent = characterKeys[i].replace("_", " ");
    characterValue.textContent = characterValues[i];

    characterInfo.appendChild(characterKey);
    characterInfo.appendChild(characterValue);
  }
}

// Show and hide the modal
function showModal() {
  modal.classList.add("modal--active");

  modal.addEventListener("click", function () {
    modal.classList.remove("modal--active");
    removeAllChildNodes(characterInfo);
  });
}

// Remove the character's info from the modal after hiding it to avoid a bug
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
