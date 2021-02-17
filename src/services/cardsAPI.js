const cards = `https://api.pokemontcg.io/v1/cards`;

const getPokemons = `https://api.pokemontcg.io/v1/cards?name=`;

function cardsAPI() {
  const fetchAPI = fetch(cards).then((resolve) => resolve.json());
  console.log(fetchAPI);
  return fetchAPI;
}

function getPokeAPI(filter = '') {
  const fetchAPI = fetch(`${getPokemons}${filter}`).then((resolve) => resolve.json());
  console.log(fetchAPI);
  return fetchAPI;
}

export {
  cardsAPI,
  getPokeAPI,
};
