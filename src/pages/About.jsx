import { currently, aboutMe } from "../contents/about-content";

const About = () => {
  return (
    <div className="h-fit bg-neutral-900 font-mono grid grid-cols-2 pt-20 pb-20 text-white px-10">
      <div>
        <ul className="list-disc">
          <p className="font-bold text-xl mb-3">{aboutMe.title}</p>
          {aboutMe.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="list-disc pl-10">
          <p className="font-bold text-xl mb-3">{currently.title}</p>
          {currently.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
