// import React, { useContext } from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import AccessContext from '../context/AccesProvider'

// const Login = () => {
//     const { accessToken, setAccesToken } = useContext(AccessContext)
//     const [email, setEmail] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [password, setPassword] = useState("")
//     const [passwordError, setPasswordError] = useState("")
//     const navigate = useNavigate()
//     const handleLogin = async (e) => {
//         e.preventDefault()
//         await axios ({
//             method:'POST',
//             url: 'https://61601920faa03600179fb8d2.mockapi.io/pegawai'

//         })
//     }
//     return (
//         <>
//             <h1>
//                 halloworld
//             </h1>
//         </>
//     )
// }

// export default Login