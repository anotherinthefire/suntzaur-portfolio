import { UserAuth } from "../context/AuthContext"

const Account = () => {
    const { logOut, user } = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-neutral-900 h-screen text-white">
            <h1 className="ml-96 pt-80 font-bold text-3xl">Welcome, {user?.displayName}</h1>
            <button className="ml-96 bg-transparent hover:bg-white text-white hover:text-neutral-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10" onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default Account