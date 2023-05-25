import axios from "axios";

export const getAllPokemon = async (pagination: any) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${pagination}&limit=20`
  );
  console.log("data", data);

  return data;
};
