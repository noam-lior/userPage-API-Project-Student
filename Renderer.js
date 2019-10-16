// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(users) {
        $('.user-container').empty()
        const source = $('#user-info-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(users[0])
        $('.user-container').append(newHTML)
    }

    _renderFriends(users) {
        const friend = users.slice(1)
        this._handlebarTemplate($('ul'),$('#friends-template'),{ "friend": friend })
    }

    _renderQuote(quoteInfo) {
        const quoteElement = $('#quote')
        quoteElement.text(quoteInfo);
    }

    _renderPokemon(pokemonInfo) {
        this._handlebarTemplate($('.pokemon-container'),$('#pokemon-template'),pokemonInfo)
    }

    _renderMeat(meatText) {
        const meatTextElement = $('.meat-text')
        meatTextElement.text(meatText);
    }

    _handlebarTemplate(targetObject,templateObject,data){
        targetObject.empty()
        const source = $(templateObject).html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        $(targetObject).append(newHTML)
    }
    render(data) {
        this._renderUsers(data.users)
        this._renderQuote(data.quote)
        this._renderFriends(data.users)
        this._renderPokemon(data.pokemon)
        this._renderMeat(data.meatText)
    }
}

