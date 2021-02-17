const cards = `https://api.pokemontcg.io/v1/cards`;

function cardsAPI() {
  const fetchAPI = fetch(cards).then((resolve) => resolve.json());
  console.log(fetchAPI);
  return fetchAPI;
}

export default cardsAPI;
