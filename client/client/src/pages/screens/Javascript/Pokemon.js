import React, { useState } from 'react';
import Container from "../../components/Container"


const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const getPokemon = async () => {
        try {
        const response = await fetch(
            `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm.toLowerCase()}`
        );
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        setPokemonData(data);
        setError(null);
        } catch (err) {
        setPokemonData(null);
        setError('Pokémon not found');
        }
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
        getPokemon();
        } else {
        alert('Please enter a Pokémon name or ID');
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const resetDisplay = () => {
        setPokemonData(null);
        setError(null);
    };

    return (
        <Container title="Pokemon Wikipedia" subtitle="">
            <input
                id="search-input"
                type="text"
                value={searchTerm}
                placeholder="name / id"
                onChange={handleChange}
                required
            />
            <button id="search-button" onClick={handleSearch}>
                Search
            </button>
            <div>
                {error && <p>{error}</p>}
                {pokemonData && (
                <>
                    <p id="pokemon-name">{pokemonData.name.toUpperCase()}</p>
                    <p id="pokemon-id">#{pokemonData.id}</p>
                    <p id="weight">Weight: {pokemonData.weight}</p>
                    <p id="height">Height: {pokemonData.height}</p>
                    <p id="types">Types: {
                        pokemonData.types
                        .map((obj) => (
                        <span key={obj.type.name} className={`type ${obj.type.name}`}>
                            {obj.type.name}
                        </span>
                        ))
                        .reduce((prev, curr) => [prev, ' ', curr])}
                    </p>
                    <p id="hp">HP: {pokemonData.stats[0].base_stat}</p>
                    <p id="attack">Attack: {pokemonData.stats[1].base_stat}</p>
                    <p id="defense">Defense: {pokemonData.stats[2].base_stat}</p>
                    <p id="special-attack">Special Attack: {pokemonData.stats[3].base_stat}</p>
                    <p id="special-defense">Special Defense: {pokemonData.stats[4].base_stat}</p>
                    <p id="speed">Speed: {pokemonData.stats[5].base_stat}</p>
                    <p id="spriteContainer">
                    <img
                        id="sprite"
                        src={pokemonData.sprites.front_default}
                        alt={`${pokemonData.name} front default sprite`}
                    />
                    </p>
                </>
                )}
            </div>
        </Container>
    )
}

export default Pokemon