import data from "../contents/resume-content"
function Resume() {
  return (
    // add flex if going to add an image
    <div className="bg-neutral-900 h-fit text-white px-10 font-mono pb-10">
      <div className=" pt-20">
        {/* <img src="../../public/images/profilev4.png" className="w-60 h-60"/> */}
        <p className="text-6xl font-thin">Ron Godfrey P. Ultra</p>
        <p className="text-xl font-thin pt-2">Quezon City, National Capital Region, Philippines</p>
      </div>

      <h1 className="text-3xl pt-10 font-medium">{data.volunteering.title}</h1>
      <div className="flex pt-5">
        <img src={data.volunteering.image} className="w-8 h-8" alt="Logo" />
        <h3 className="text-2xl ml-5">{data.volunteering.name}</h3>
      </div>
      <p className="mt-5">{data.volunteering.description}</p>
      <div className="m-0 w-full pt-5 pl-5">
        <ul className="m-0 grid grid-cols-2 gap-4 list-disc">
          {data.volunteering.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h1 className="text-3xl pt-10 font-medium">{data.education.title}</h1>
      {data.education.schools.map((school, index) => (
        <div key={index}>
          <div className="flex pt-5">
            <img src={school.image} className="w-8 h-8" alt="Logo" />
            <h3 className="text-2xl ml-5">{school.name}</h3>
          </div>
          <p className="mt-5">{school.duration}</p>
          <div className="m-0 w-full pt-5 pl-5">
          <p>{school.activitiesAndSocieties}</p>
            <ul className="m-0 grid grid-cols-2 gap-4">
              {school.listItems.map((item, index) => (
                <li key={index}>
                  <strong>{item.item}</strong>
                  <br />
                  {item.itemDescription}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <h1 className="text-3xl pt-10 font-medium">{data.skills.title}</h1>
      <div className="m-0 w-full pt-5 pl-5">
        <ul className="m-0 grid grid-cols-2 gap-4 list-disc">
          {data.skills.generalSkills.map((skill, index) => (
            <li key={index}>
              <strong>{skill}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-0 w-full pt-5 pl-5">
        <ul className="m-0 grid grid-cols-2 gap-4">
          {data.skills.programmingLanguages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Resume