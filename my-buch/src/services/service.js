export async function getAllBatches() {
    // return await fetch('http://localhost:5000/batches')
    return await fetch('https://tranquil-dawn-28713.herokuapp.com/batches')
    .then(res => res.json())
}