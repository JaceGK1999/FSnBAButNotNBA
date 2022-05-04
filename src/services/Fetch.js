export async function fetchRnM(setLife) {
  const status = new URLSearchParams();
  status.set('status', setLife);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${status.toString()}`
  );
  const rAndMData = await response.json();
  console.log(rAndMData, 'R&M data');
  return rAndMData.results;
}
