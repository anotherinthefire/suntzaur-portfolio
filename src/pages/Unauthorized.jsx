import logo from '/images/theprof-nobg.png'

const Unauthorized = () => {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
                    <div className="flex-1 max-w-lg">
                        <img src={logo} className="shadow-2xl" />
                    </div>
                    <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
                        <h3 className="text-red-600 font-semibold">
                            401 Error
                        </h3>
                        <p className="text-white text-4xl font-semibold sm:text-5xl">
                            Access Denied
                        </p>
                        <p className="text-white">
                            You are not authorized to view the requested page or resource. Please ensure you have the necessary permissions or provide valid authentication credentials to access this content.
                        </p>
                        <a href="/signin" className="text-red-600 duration-150 hover:text-red-400 font-medium inline-flex items-center gap-x-1">
                            log in to your account
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Unauthorized