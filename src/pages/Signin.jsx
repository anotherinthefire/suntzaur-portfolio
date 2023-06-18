import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Signin = () => {
    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user != null) {
            navigate('/account')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

  return (
    <div className="h-screen bg-neutral-900">
        <h1 className="text-white pt-40 pl-24 ml-96 font-bold text-3xl">Signin:</h1>
        <GoogleButton onClick={handleGoogleSignIn} className="mx-auto mt-10"/>
    </div>
  )
}
export default Signin