import axios from 'axios'

const baseUrl = "http://localhost:5001"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) =>{
        console.log('data --->', data);
        setToDo(data)
    })
}

export {getAllToDo}