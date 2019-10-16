// Create instances of your classes
const apiManager = new APIManager()
const renderer = new Renderer()
// Create the loadData and renderData functions - these should use the relevant instance

$('#load-data').on('click', () => {
    apiManager.loadData()
})

$('#display-user').on('click', () => {
    renderer.render(apiManager.data)
})

$('#save-user').on('click', () => {
    const data = apiManager.data
    const savedUsers = JSON.parse(localStorage["savedUsers"] ||"[]")
    savedUsers.push(data)
    console.log(savedUsers)
    localStorage.setItem("savedUsers" , JSON.stringify(savedUsers))
})


$('.dropdown').on('mouseenter',function(){
    renderer.renderDropdown()}) 
.on('mouseenter','.dropdown-content',()=>{}).on('click','.user',function(){
    const savedUsers = JSON.parse(localStorage["savedUsers"])
    const fullName=$(this).text()
    const firstName=fullName.split(" ")[0]
    const index=savedUsers.findIndex(u=>u.users[0].firstName===firstName)
    renderer.render(savedUsers[index])
})

$('.dropdown').on('mouseenter',function(){
    renderer.renderDropdown()}) 
.on('mouseenter','.dropdown-content',()=>{}).on('click','.remove',function(){
    const savedUsers = JSON.parse(localStorage["savedUsers"])
    const fullName=$(this).next('span').text()
    const firstName=fullName.split(" ")[0]
    const index=savedUsers.findIndex(u=>u.users[0].firstName===firstName)
    savedUsers.splice(index,1)
    localStorage.setItem("savedUsers",JSON.stringify(savedUsers))
    renderer.renderDropdown()
})    

