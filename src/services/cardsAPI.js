const cards = `https://api.pokemontcg.io/v2/cards`;

function cardsAPI() {
  const fetchAPI = fetch(cards).then((resolve) => resolve.json());
  console.log(fetchAPI);
  return fetchAPI;
}

export default cardsAPI;