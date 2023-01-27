async function search(limit = 0, offset = 0) {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      method: "get",
    }
  );
  const { results } = await data.json();
  console.log(results);
  const container = document.getElementById("containerpoke");
  results.forEach(async (element) => {
    const data = await fetch(element.url,{
      method: "get"
    });
    const { sprites } = await data.json();
    const {front_shiny} = sprites.other["official-artwork"];
    container.innerHTML += `<div id="card1" class="bg-red-600 rounded-md border-4 shadow-black shadow-lg border-solid border-[#ffffff]">
    <div class="p-4">
    <img class="w-[250px] h-[250px]" src="${front_shiny}" alt="imagen1">
    </div>
    <div>
    <p class="font-bold italic text-center p-2 text-2xl text-[#ffffff]">${element.name}</p>
    </div>
    </div>`;
  });
}

search(9);
