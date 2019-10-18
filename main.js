// Create instances of your classes
const apiManager = new APIManager()
const renderer = new Renderer()
const LSManager = new LocalStorageManager()
// Create the loadData and renderData functions - these should use the relevant instance

$('#load-data').on('click', () => {
    apiManager.loadData()
})

$('#display-user').on('click', () => {
    renderer.render(apiManager.data)
})

$('#save-user').on('click', () => { LSManager.saveUser(apiManager.data) })

$('.dropdown').on('mouseenter', function () {
    renderer.renderDropdown()
})
    .on('mouseenter', '.dropdown-content', () => { }).on('click', '.user', function () {
        const userData = LSManager.loadUser($(this))
        renderer.render(userData)
    })

$('.dropdown').on('mouseenter', ()=>renderer.renderDropdown())
    .on('mouseenter', '.dropdown-content', () => { })
    .on('click', '.remove', function () {
        LSManager.deleteUser($(this))
        renderer.renderDropdown()
    })

