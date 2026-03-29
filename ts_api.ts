async function getPokemonInfo() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const response = await fetch(url);
  const data = await response.json();

  console.log(`ポケモンの名前: ${data.name}`);
  console.log(`重さ: ${data.weight / 10} kg`);
}

getPokemonInfo();
