export const addBook = (resolve, reject = () => {}) => {
    fetch('http://localhost:5000/api/book/add', {
        method: 'POST'
    })
        .then(data=>data.json(), reject)
        .then(resolve);
}

export const allBooks = (resolve, reject = () => {}) => {
    fetch('http://localhost:5000/api/book/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}