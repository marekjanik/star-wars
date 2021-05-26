const characterList = document.querySelector(".character-list");
const characterInfo = document.querySelector(".character-info");
const modal = document.querySelector(".modal");
const searchTerm = document.querySelector(".search-term");
const searchIcon = document.querySelector(".fa-search");

function getCharacters() {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < response.results.length; i++) {
        const characterName = response.results[i].name;
        const character = document.createElement("li");
        character.classList.add("character");
        character.textContent = characterName;
        characterList.appendChild(character);

        character.addEventListener("click", function () {
          getCharacterInfo(i);
          showModal();
        });
      }
    });
}

function getCharacterInfo(character) {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((response) => {
      const characterKeys = Object.keys(response.results[character]).slice(
        0,
        8
      );
      const characterValues = Object.values(response.results[character]).slice(
        0,
        8
      );

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
    });
}

function showModal() {
  modal.classList.add("modal--active");
  modal.addEventListener("click", function () {
    modal.classList.remove("modal--active");
    removeAllChildNodes(characterInfo);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

getCharacters();
