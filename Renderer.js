// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        const profilePic=$('#profile-pic')
        // const 
    }

    _renderFriends(users) {
    }

    _renderQuote(quoteInfo) {
        const quoteElement=$('#quote')
        quoteElement.text(quoteInfo);
        
    }

    _renderPokemon(pokemonInfo) {

    }

    _renderMeat(meatText) {
        const meatTextElement=$('.meat-text')
        meatTextElement.text(meatText);
    }

    render(data){
        // this._renderUsers(data.users)
        this._renderQuote(data.quote)
        // this._renderFriends(data.users)
        // this._renderPokemon(pokemonInfo)
        this._renderMeat(data.meatText)
        //invokes all the individual _render methods
    }
}

