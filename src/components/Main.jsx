import profile from "../assets/profile.png";
import coder from "../assets/coder.png";
import coder2 from "../assets/coder2.png";
import coder3 from "../assets/coder3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faTowerBroadcast,
  faMicrochip,
  faArrowTrendUp,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Main = ({ name, post }) => {
  return (
    <>
      <main>
        {/* </div> */}
        <div className="bg-slate-600 m-1">
          <div className="w-full h-auto bg-transparent flex items-center flex-col gap-y-5 mb-4 mt-1">
            {/* //profile status */}
            <div className="w-full bg-transparent p-1 sm:p-3 flex flex-col md:flex-row space-x-1">
              <div
                className="size-40  md:size-50 rounded-full bg-cover bg-center ring-1 ring-offset-blue-950"
                style={{ backgroundImage: `url(${profile})` }}></div>
              <div className="w-3/5 sm:w-1/6  bg-transparent flex  flex-col justify-center space-y-2 overflow-hidden">
                <h1 className="profile-heading">{name}</h1>
                <h1 className="profile-heading">{post}...</h1>
              </div>
              <div className="w-4/6 bg-transparent p-5">
                <p className="first-letter:text-3xl first-letter:font-bold text-white">
                  Hi, I’m Dilip Rai, a 19-year-old web developer who’s deeply
                  dedicated to building modern, user-friendly web experiences. I
                  have an extreme interest in programming and the tech world,
                  and I’m always eager to learn new technologies, improve my
                  skills, and turn ideas into impactful digital solutions.
                </p>
              </div>
            </div>
            {/* //some links */}
            <div className="w-full h-2/3 p-5 bg-sky-500">
              <h1 className="font-extrabold text-center text-1xl sm:text-3xl capitalize">
                explore more, learn new and move with latest
              </h1>
            </div>
            <div
              className="w-9/10 h-2/3 bg-transparent grid grid-rows-2 gap-y-8
          ">
              <div className="w-full flex justify-items-start gap-x-10 sm:gap-x-40 shadow-style">
                <div className="image-box">
                  <h1 className="heading-style">World of coding</h1>
                  <div
                    className="w-40 h-40 bg-center bg-cover"
                    style={{ backgroundImage: `url(${coder})` }}></div>
                  <div className="w-full p-5 pl-0">
                    <p className="text-white font-bold">
                      The World of Coding in the Modern Technology Era Coding
                      has become one of the most powerful skills in today’s
                      digital world.
                    </p>
                  </div>
                </div>

                <div className="scrollbar-style no-scrollbar">
                  <p>
                    The World of Coding is the foundation behind websites,
                    mobile apps, software systems, artificial intelligence, and
                    almost every modern technology we use daily. From simple
                    scripts to complex applications, coding allows humans to
                    communicate instructions to machines and turn ideas into
                    reality. The Importance of Coding Today In the current
                    tech-driven era, coding is not limited to software engineers
                    alone. Businesses, startups, and even non-technical fields
                    rely on coding to automate processes, analyze data, and
                    build digital platforms. As technology grows, coding skills
                    increase efficiency, creativity, and problem-solving
                    ability. Popular Programming Languages Different programming
                    languages serve different purposes: HTML, CSS, and
                    JavaScript are essential for web development. Python is
                    widely used for automation, data science, and artificial
                    intelligence. Java and C++ power enterprise software and
                    system-level applications. PHP, Node.js, and frameworks help
                    build dynamic and scalable web applications. Each language
                    contributes to building fast, secure, and user-friendly
                    systems. Coding and Problem Solving Coding is not just about
                    writing syntax—it is about logical thinking. Programmers
                    break down real-world problems into smaller steps and solve
                    them using algorithms and data structures. This mindset
                    improves analytical skills and encourages innovation. The
                    Future of Coding With the rise of AI, cloud computing, and
                    automation, coding is evolving rapidly. Developers now focus
                    more on writing efficient logic, integrating APIs, and using
                    modern frameworks rather than building everything from
                    scratch. Coding will continue to be a core skill for future
                    technologies like robotics, virtual reality, and smart
                    systems. Conclusion Coding is the backbone of the digital
                    world. It empowers individuals to create, innovate, and
                    shape the future of technology. For anyone passionate about
                    programming and the tech world, learning to code is not just
                    a skill—it’s a gateway to endless possibilities.
                  </p>
                </div>
              </div>
              <div className="flex justify-items-start gap-x-10 sm:gap-x-40">
                <div className="scrollbar-style no-scrollbar shadow-style">
                  <p>
                    As technology continues to grow rapidly, coding is becoming
                    more powerful, intelligent, and accessible. Future
                    programmers will not only write code but also design systems
                    that think, learn, and adapt. Smarter Programming with AI
                    Artificial intelligence is changing how coding is done. AI
                    tools now help developers write, debug, and optimize code
                    faster. In the future, programmers will work alongside AI
                    assistants, focusing more on logic, creativity, and
                    problem-solving rather than repetitive tasks. Low-Code and
                    No-Code Platforms Low-code and no-code platforms are making
                    programming easier for beginners and non-technical users.
                    While these tools simplify development, skilled programmers
                    will still be needed to build complex systems, customize
                    solutions, and ensure performance and security. Growing
                    Demand for Coders As businesses move online and automation
                    increases, the demand for skilled programmers will continue
                    to rise. Fields like web development, mobile apps,
                    cybersecurity, data science, and AI will require strong
                    coding skills. Future Skills for Programmers Future coders
                    must go beyond learning one language.
                  </p>
                </div>
                <div className="image-box">
                  <h1 className="heading-style">Future Coding</h1>
                  <div
                    className="w-40 h-40 bg-center bg-cover"
                    style={{ backgroundImage: `url(${coder2})` }}></div>
                  <div className="w-full p-5 pl-0">
                    <p className="text-white font-bold">
                      The Future of Coding and Programming The future of coding
                      and programming is bright and full of innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-120 h-[60vh] bg-red-800 mt-30 shadow-style bg-center bg-contain">
            <img src={coder3} alt=""/>
            </div>
          </div>

          <div className="w-full h-2/3 mt-40 sm:mt-50 bg-sky-400 border-t-2 border-b-2 p-15 px-2 border-slate-800 shadow-style">
            <ul className="list-none flex flex-col items-center space-y-2 p-5">
              <li className="big-anchor-style">
                <FontAwesomeIcon icon={faEarthAsia} />
                <a href="/">Global</a>
              </li>
              <li className="big-anchor-style">
                <FontAwesomeIcon icon={faTowerBroadcast} />
                <a href="/">AI</a>
              </li>
              <li className="big-anchor-style">
                <FontAwesomeIcon icon={faMicrochip} />
                <a href="/">Technology</a>
              </li>
              <li className="big-anchor-style">
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <a href="/">Trends</a>
              </li>
              <li className="big-anchor-style">
                <FontAwesomeIcon icon={faBookOpen} />
                <a href="/">Learn</a>
              </li>
            </ul>
          </div>

          <div />
        </div>
      </main>
    </>
  );
};

export default Main;
