//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = { "users": [] }
    }

    loadData() {
        //you should make all your API requests here
        //each request should update the `data` object accordingly
        this._loadUsers()
        this._loadQuote()
        this._loadPokemon()
        this._loadText()
    }

    _loadUsers() {
        const NUM_OF_USERS = 7;
        for (let i = 0; i < NUM_OF_USERS; i++)
            $.ajax({
                method: "GET",
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: data => {
                    const rawData = data.results[0];
                    const userObject = { "first name": rawData.name.first, "last name": rawData.name.last, "picture": rawData.picture }
                    this.data.users.push(userObject);
                }
            });
    }

    _loadQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest?format=text',
            success: data => { this.data.quote = data; }
        })
    }

    _loadPokemon() {
        const NUM_OF_POKEMONS = 800
        const id = Math.floor(Math.random() * NUM_OF_POKEMONS)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: data => { this.data.pokemon = { "name": data.name, "sprites": data.sprites } }
        })
    }

    _loadText(){
        const type="all-meat"
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=${type}`,
            success: data => { this.data.meatText = data[0] }
        })
    }
}