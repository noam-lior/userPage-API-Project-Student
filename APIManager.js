//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = { "users": [] }
    }

    loadData() {
        this._loadUsers()
        this._loadQuote()
        this._loadPokemon()
        this._loadText()
    }

    _loadUsers() {
        const NUM_OF_USERS = 7;
        this.data.users = []

        $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=${NUM_OF_USERS}`,
            dataType: 'json',
            success: data => {
                const results = data.results
                for (let result of results) {
                    const userObject = {

                        "firstName": result.name.first, "lastName": result.name.last, "picture": result.picture.medium,
                        "city": result.location.city, "state": result.location.state, "country": result.location.country
                    }
                    this.data.users.push(userObject);
                }
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
            success: data => { this.data.pokemon = { "name": data.name, "sprite": data.sprites.front_default } }
        })
    }

    _loadText() {
        const type = "all-meat"
        $.ajax({
            method: "GET",
            url: `https://baconipsum.com/api/?type=${type}`,
            success: data => { this.data.meatText = data[0] }
        })
    }
}