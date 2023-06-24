import contactMethods from "../contents/contact-content"
const Contact = () => {

  return (
    <main className="py-14 bg-neutral-900">
      <div className="z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            Let’s work together!
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form action="https://formsubmit.co/77d285889d737dd43996fbdef1659d78" method="POST" className="space-y-5">
            <div>
            </div>
            <div>
              <label className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>

            </div>
            <div>
              <label className="font-medium">
                Message
              </label>
              <textarea 
              required 
              name="message"
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
            </div>
            <button
            type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 text-white gap-12 md:px-8 lg:flex mt-20">
        <div className="max-w-md">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Let’s connect
          </h3>
          <p className="mt-3">
            Im excited to connect with professionals in the industry, fellow software engineers, and individuals who share similar aspirations. Lets exchange ideas, collaborate on projects, and grow together in the world of software engineering.
          </p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {
              contactMethods.map((item, idx) => (
                <li key={idx} className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                  <h4 className="text-white text-lg font-medium xl:text-xl">
                    {item.title}
                  </h4>
                  <p>
                    {item.desc}
                  </p>
                  <a href={item.link.href} rel="noreferrer" target="_blank" className="flex items-center gap-1 text-sm text-red-600 duration-150 hover:text-red-400 font-medium">
                    {item.link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Contact