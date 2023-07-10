import { currently, aboutMe } from "../contents/about-content";

const About = () => {
  return (
    <div className="h-auto sm:h-screen font-mono grid grid-cols-1 sm:grid-cols-2 pt-16 sm:pt-20 pb-10 sm:pb-20 text-white px-5 sm:px-10">
  <div>
    <ul className="list-disc">
      <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{aboutMe.title}</p>
      {aboutMe.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
  <div>
    <ul className="list-disc pl-4 sm:pl-10">
      <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{currently.title}</p>
      {currently.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
</div>

  );
}

export default About;
