// Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un
//array de pokemons y muestre por consola el nombre de cada pokemon.
var pokemons = [
	{
		nombre: "Charmander",
		tipoDePokemon: "Fuego",
	},
	{
		nombre: "Pikachu",
		tipoDePokemon: "Electrico",
	},
	{
		nombre: "Bulbasaur",
		tipoDePokemon: "Veneno",
	},
];

function listaPokemon(lista) {
	for (var i = 0; i < pokemons.length; i++) {
		console.log(lista[i]);
	}
}

listaPokemon(pokemons);

//También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego

function tipoPokemon(tipo) {
	let fuego = [];

	for (let i = 0; i < tipo.length; i++) {
		if (tipo[i].tipoDePokemon === "Fuego") {
			fuego.push(tipo[i]);
		}
	}
	return fuego;
}

console.log(tipoPokemon(pokemons));
