import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons-list';

@Component({// Component decorator
  selector: 'app-root',
  templateUrl: './templates/app.component.html',// Template file
})
export class AppComponent implements OnInit  {
  listePokemons: Pokemon[] = POKEMONS;// Variable to store the selected pokemon
  titre = 'Pokédex';
  pokemonSelected: Pokemon | undefined;// Function to deselect a pokemon

  
  ngOnInit(): void {
    console.table(this.listePokemons);
  }

  selectPokemon(pokemonId: String): void {// Function to select a pokemon
    const pokemon : Pokemon|undefined = this.listePokemons.find(pokemon => pokemon.id === +pokemonId); // Find the pokemon in the list with the id passed in parameter and assign it to the variable pokemon of type Pokemon .
    // Le signe + permet de convertir la chaine de caractère en nombre.
    
    if (pokemon) {// If the pokemon is found
      this.pokemonSelected = pokemon; // Assign it to the variable pokemonSelected
      console.log(`Vous avez cliqué sur ${this.pokemonSelected}`);// Log the name of the pokemon in the console
    }else  {
      console.log('Pokemon introuvable');// Log an error message in the console
      this.pokemonSelected = undefined;// Assign undefined to the variable pokemonSelected
    }
  }
}

   

