import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({})

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) =>setUser(response.data))
    }, [id])
    return (
        <>
            <h1>User Detail</h1>
            <code>{JSON.stringify(user)}</code>
        </>
    )
}

export default User