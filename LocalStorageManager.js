class LocalStorageManager {

    constructor() {
    }

    saveUser(data) {
        const savedUsers = JSON.parse(localStorage["savedUsers"] || "[]")
        savedUsers.push(data)
        localStorage.setItem("savedUsers", JSON.stringify(savedUsers))
    }

    loadUser(userTab) {
        const savedUsers = JSON.parse(localStorage["savedUsers"])
        const fullName = userTab.text()
        const firstName = fullName.split(" ")[0]
        const index = savedUsers.findIndex(u => u.users[0].firstName === firstName)
        return savedUsers[index]
    }

    deleteUser(usersDeleteBtn) {
        const savedUsers = JSON.parse(localStorage["savedUsers"])
        const fullName = usersDeleteBtn.next('span').text()
        const firstName = fullName.split(" ")[0]
        const index = savedUsers.findIndex(u => u.users[0].firstName === firstName)
        savedUsers.splice(index, 1)
        localStorage.setItem("savedUsers", JSON.stringify(savedUsers))
        
    }
}