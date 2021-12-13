export const fetchApiData = (type) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${type}`)
    .then((response) => 
    response.json())
    .catch(error => console.log('fetch error', error))
};