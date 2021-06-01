const API_GET="https://api.tvmaze.com"

export async function apiGet(inputValue){
    const response = await fetch(`${API_GET}${inputValue}`)
    .then(res=>res.json())

    return response;
}