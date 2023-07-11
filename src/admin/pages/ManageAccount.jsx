import { UserAuth } from "../context/AuthContext"

const ManageAccount = () => {
    const { logOut, user } = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="hero min-h-screen bg-neutral-900 text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={user?.photoURL || '<default_image_url>'}
                    alt="User"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold mt-24">Welcome, {user?.displayName}</h1>
                    <p className="py-6">Thank you for logging in! More updates will come soon :&gt;</p>
                    <button
                        className="bg-transparent hover:bg-white text-white hover:text-neutral-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10"
                        onClick={handleSignOut}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManageAccount