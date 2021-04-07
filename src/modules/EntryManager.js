//Comment out depending on local or hosted testing
//const apiUrl = "http://localhost:8088"
const apiUrl = "https://firstjsonserver.herokuapp.com"

let orderedResponse = [];
export const getJournalEntries = () => {
    return fetch(`${apiUrl}/entries?_expand=user`)
    .then(response => response.json())
    .then(parsedResponse => {
        orderedResponse = parsedResponse.reverse();
        return orderedResponse;
    })
}

export const createPost = postObj => {
    return fetch(`${apiUrl}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
        
    })
        .then(response => response.json())
        .then(getJournalEntries())
        
}

export const deletePost = (postId) => {
    return fetch(`${apiUrl}/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(getJournalEntries())
}

export const getSingleEntry = (postId) => {
    return fetch(`${apiUrl}/entries/${postId}`)
        .then(response => response.json())
}

export const updateEntry = (postObj) => {
    return fetch(`${apiUrl}/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })
        .then(response => response.json())
        .then(getJournalEntries)
}