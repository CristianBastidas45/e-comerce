import axios from "axios"

const useAuth = () => {

    const registerUser = (user) =>{
        const url ="https://e-commerce-api-v2.academlo.tech/api/V1/users"
        axios.post(url, user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = (user) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/V1/users/login'
        axios.post(url,user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', res.data.user.firstName +' '+ res.data.user.lastName )
            })
            .catch(err => console.log(err))
    }

    return { registerUser, loginUser }
}

export default useAuth