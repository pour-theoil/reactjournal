//Comment out depending on local or hosted testing
//const apiUrl = "http://localhost:8088"
const apiUrl = "https://firstjsonserver.herokuapp.com"

export const getMoods = () => {

    return fetch(`${apiUrl}/moods`)
    .then(response => response.json())
}