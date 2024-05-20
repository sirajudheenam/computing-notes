import React, { useEffect, useState, useTransition } from 'react'

const UseTransitionDemo = () => {
  const [input, setInput] = useState('')
  const [pokemon, setPokemon] = useState([])

  /* useTransition */
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [isPending, startTransition] = useTransition()
  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      setPokemon(data.results)
    }
    getPokemon()
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase())
    /* set filteredPokemon here */
    startTransition(() => {
      setFilteredPokemon(pokemon.filter((poke) => poke.name.includes(input)))
    })
  }
  /* This could be an expensive operation */
  // const filterPokemon = pokemon.filter((poke) => poke.name.includes(input));

  /* useTransition could mark the render as non-urgent operation 
  hence performance hit won't happen */

  return (
    <>
      <div className="App">
        <input onChange={handleChange} type="text" value={input} />
        {/* {filterPokemon.map((poke) => (
					<div key={poke.name}>
						<h1>{poke.name}</h1>
					</div>
				))} */}
        {isPending && 'Loading...'}
        {filteredPokemon.map((poke) => (
          <div key={poke.name}>
            <h1>{poke.name}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default UseTransitionDemo
