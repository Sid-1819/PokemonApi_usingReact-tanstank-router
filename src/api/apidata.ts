type PokemonDetail = {
    name:string;
    id:number,
    height:number,
    weight:number,
    sprites: {
        front_default:string;
    };
}




export async function getApi(id:string):Promise<PokemonDetail> {
    const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
    
}