import replace from 'lodash/replace'

//TODO: create CONFIG for api key
// http://www.omdbapi.com/?apikey=f4bbe276&

export const searchOmdb = (title, type) => {

    let parsedTitle = replace(title, ' ', '+')
    const url = `http://www.omdbapi.com/?apikey=f4bbe276&t=${parsedTitle}&${type}`;

    let request = fetch(url)
    .then(data => {return data.json()})
    .then(res => {return res})

    return request;
}