import data from "../contents/resume-content"
function Resume() {
  return (
    // add flex if going to add an image
    <div className="h-full text-white px-10 font-mono pb-10">
      <div className=" pt-20">
        {/* <img src="../../public/images/profilev4.png" className="w-60 h-60"/> */}
        <p className="text-6xl font-thin">Ron Godfrey P. Ultra</p>
        <p className="text-xl font-thin pt-2">Quezon City, National Capital Region, Philippines</p>
      </div>

      <h1 className="text-2xl sm:text-3xl pt-5 sm:pt-10 font-medium">{data.volunteering.title}</h1>
      <div className="flex flex-col sm:flex-row pt-3 sm:pt-5">
        <img src={data.volunteering.image} className="w-8 h-8 sm:w-10 sm:h-10" alt="Logo" />
        <h3 className="text-lg sm:text-2xl ml-3 sm:ml-5">{data.volunteering.name}</h3>
      </div>
      <p className="mt-3 sm:mt-5">{data.volunteering.description}</p>
      <div className="mt-3 sm:mt-5">
        <ul className="m-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 list-disc">
          {data.volunteering.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>


      <h1 className="text-2xl sm:text-3xl pt-5 sm:pt-10 font-medium">{data.education.title}</h1>
{data.education.schools.map((school, index) => (
  <div key={index}>
    <div className="flex flex-col sm:flex-row pt-3 sm:pt-5">
      <img src={school.image} className="w-8 h-8 sm:w-10 sm:h-10" alt="Logo" />
      <h3 className="text-lg sm:text-2xl ml-3 sm:ml-5">{school.name}</h3>
    </div>
    <p className="mt-3 sm:mt-5">{school.duration}</p>
    <div className="mt-3 sm:mt-5">
      <p>{school.activitiesAndSocieties}</p>
      <ul className="m-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
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


<h1 className="text-2xl sm:text-3xl pt-5 sm:pt-10 font-medium">{data.skills.title}</h1>
<div className="mt-3 sm:mt-5">
  <ul className="m-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 list-disc">
    {data.skills.generalSkills.map((skill, index) => (
      <li key={index}>
        <strong>{skill}</strong>
      </li>
    ))}
  </ul>
</div>
<div className="mt-3 sm:mt-5">
  <ul className="m-0 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
    {data.skills.programmingLanguages.map((language, index) => (
      <li key={index}>{language}</li>
    ))}
  </ul>
</div>


    </div>
  )
}

export default Resume