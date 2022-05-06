export async function fetchID(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  console.log(id);
  const RnM = await response.json();
  return RnM;
}
