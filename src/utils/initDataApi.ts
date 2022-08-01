import axios from "axios";

const requestAcion = async () => {
    return await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users').then(r => r.data.items)
}

export default requestAcion

