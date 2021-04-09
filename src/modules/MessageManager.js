//Comment out depending on local or hosted testing
const apiUrl = "http://localhost:8088"
// const apiUrl = "https://firstjsonserver.herokuapp.com"

let orderedResponse = [];
export const getMessages = () => {

    return fetch(`${apiUrl}/messages?_expand=user`)
    .then(response => response.json())
    .then(parsedResponse => {
        orderedResponse = parsedResponse.reverse();
        console.log(orderedResponse);
        return orderedResponse;
    })
}

export const createMessage = postObj => {
    return fetch(`${apiUrl}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
        
    })
        .then(response => response.json())
        .then(getMessages())
        
}

export const deleteMessage = (postId) => {
    return fetch(`${apiUrl}/messages/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getMessages)
}

export const getSingleMessage = (postId) => {
    return fetch(`${apiUrl}/messages/${postId}`)
        .then(response => response.json())
}

export const updateMessage = (postObj) => {
    return fetch(`${apiUrl}/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json())
        .then(getMessages)
}