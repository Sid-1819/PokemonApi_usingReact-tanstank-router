import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';

import * as v from "valibot"


const Category = v.union([
  v.literal("electronics"),
  v.literal("clothing"),
  v.literal("books"),
  v.literal("toys")

])

const Itemfilters = v.object({
  query: v.optional(v.string()),
  hasDiscount: v.optional(v.boolean()),
  categories: v.optional(v.array(Category)),

});

type Itemfilters= v.Output<typeof Itemfilters>;

type Category = "electronics" | "clothing" | "books" | "toys";


export const Route = createFileRoute('/search')({

  validateSearch: (search) => v.parse(Itemfilters,search),

  component: Search,
});


function Search(){

const {query, categories,hasDiscount} = Route.useSearch()

const navigate = useNavigate({from: Route.fullPath})
  return(
    <div>
      <input type="text" value={query} onChange={(e) =>{
       navigate({search: (prev) =>({...prev,query:e.target.value})})
      }}/>
      <h1>Search</h1>
      <p>{JSON.stringify({query, hasDiscount, categories},null ,2)}</p>
    </div>
  )
}