// Create instances of your classes
const apiManager = new APIManager()
const renderer= new Renderer()
// Create the loadData and renderData functions - these should use the relevant instance

$('#load-data').on('click', () => {
    apiManager.loadData()

})

$('#display-user').on('click', () => {
    renderer.render(apiManager.data)

})