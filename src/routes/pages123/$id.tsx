import { createFileRoute } from '@tanstack/react-router'
import { getApi } from '../../api/apidata';

export const Route = createFileRoute("/pages123/$id")({
  component: Services,
  loader: async ({params})=> await getApi(params.id),
});


export default function Services(){
  const {id} = Route.useParams();
 const pokemon =  Route.useLoaderData();
 console.log(pokemon);
 
  return <div>
    <h2>
      ({id}) {pokemon.name}
    </h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>Height</h2>
    <h4>{pokemon.height}</h4>
    <h2>Weight</h2>
    <h4>{pokemon.weight}</h4>

  </div>
}