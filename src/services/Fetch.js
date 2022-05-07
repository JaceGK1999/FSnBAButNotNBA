export async function fetchRnM(setLife) {
  const status = new URLSearchParams();
  status.set('status', setLife);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${status.toString()}`
  );
  const rAndMData = await response.json();
  return rAndMData.results;
}
