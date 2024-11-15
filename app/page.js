import styles from "../css/home.module.css";
import hero from "../css/hero.module.css";
import divider from "../css/divider.module.css";
import about from "../css/about.module.css";
import projects from "../css/projects.module.css";
import experience from "../css/experience.module.css";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Marquee from "@/components/Marquee";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

import Image from "next/image";

function Hero() {
  return (
    <div className={hero.Hero} id="hero">
      <h1>
        <code>
          &gt; <span className={hero.console}>console</span>
          <span className={hero.log}>.log</span>
          <span className={hero.bracket}>(</span>
          <span className={hero.content}>&apos;Hello World&apos;</span>
          <span className={hero.bracket}>)</span>
        </code>
        <div className={hero.heroContent}>
          I’m <span className={hero.name}>Adrian</span>. A freelance{" "}
          <span className={hero.job}>web developer</span> and{" "}
          <Image src="/next.svg" width={180} height={37} alt="Nextjs Logo" />{" "}
          enthusiast.
        </div>
      </h1>
      {/* <div className={hero.project}>
          <Image
            src='/adriansPortfolio.jpg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }} // optional
            alt="adrian.td Logo"
          />
        </div> */}
    </div>
  );
}

function Divider() {
  return (
    <div className={divider.Divider}>
      <div className={divider.top} />
      <Marquee content="ADRIAN.TOBI" />
      <div className={divider.bottom} />
    </div>
  );
}

function About() {
  return (
    <div className={about.About} id="about-me">
      <SectionTitle
        desc="Let’s get to know each other a bit better. Here is a little bit about me."
        title="About"
      />
      <div className={about.aboutContent}>
        <p>
          I love building reactive software that goes live on the internet and
          this interest in web development was sparked back in 2016 when I first
          saw a web development project. Fast forward to right now I have
          started my degree in Computer Science at Queen Mary University of
          London and I have explored many different languages, tools, libraries
          and APIs. I live on the internet and aim to learn as many of the
          things that it has to offer.
        </p>
        <div class="aboutFooter">
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/react-5645899-4695757.png?f=webp"
            width={40}
            height={40}
            alt="React Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png?f=webp"
            width={40}
            height={40}
            alt="HTML Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/java-script-5645832-4695690.png?f=webp"
            width={40}
            height={40}
            alt="JavaScript Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/flutter-5562357-4642761.png?f=webp"
            width={40}
            height={40}
            alt="Flutter Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/premium/thumb/python-6815592-5602757.png"
            width={40}
            height={40}
            alt="Python Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/vuejs-4387636-3640297.png"
            width={40}
            height={40}
            alt="Vue Icon"
          />
          <Image
            src="https://cdn3d.iconscout.com/3d/free/thumb/css3-1-5645890-4695748.png"
            width={40}
            height={40}
            alt="CSS Icon"
          />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className={projects.Projects} id="projects">
      <SectionTitle
        desc="I’m an aspiring software engineer specializing in building and designing astonishing digital experiences for users. Currently, I’m focused on building some projects of my own."
        title="Projects"
      />
      <div className={projects.Collection}>
        <ProjectCard
          link="https://epsomandewellhub.com"
          image="/epsomAndEwellHub.png"
          name="Epsom And Ewell Hub"
          desc="Careers Service built with Wix"
        />
        <ProjectCard
          link="https://ce-wallington.vercel.app"
          image="/christEmbassyWallington.png"
          name="Christ Embassy Wallington"
          desc="Website for church built with Nextjs"
        />
        <ProjectCard
          link="https://lofiat.github.io/"
          image="/darkUx.jpg"
          name="DarkUx"
          desc="Clone of a study space website"
        />
        <ProjectCard
          link="https://photos.adriantd.com"
          image="/photographyPortfolio.jpg"
          name="Photography Portfolio"
          desc="Porfolio built to display film images"
        />
        <ProjectCard
          link="https://v0.adriantd.com"
          image="/adriansPortfoliov0.jpg"
          name="adriantd.com (v0)"
          desc="An old portfolio site built with HTML"
        />
        <ProjectCard
          link="https://v1.adriantd.com"
          image="/adriansPortfoliov1.png"
          name="adriantd.com (v1)"
          desc="An old portfolio site built with HTML"
        />
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className={experience.Experience} id="experience">
      <SectionTitle
        desc="My experience is much more than traditional jobs but also Internships, volunteer work, that I believe make me a better developer."
        title="Experience"
      />
      <div className={experience.Collection}>
        <ExperienceCard
          image="https://media.licdn.com/dms/image/v2/D560BAQHkiLWOxOvJ_g/company-logo_200_200/company-logo_200_200/0/1690172518168/moreton_bay_regional_council_logo?e=1740009600&v=beta&t=psiHW57v2eCll9mp3Lyb3JxpnXYj7YzwIm6jzSA_oFc"
          link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_u2pPtAhxvS8oQHQfT_1681464876569_completion_certificate.pdf"
          start="MAR 2023"
          end="APR 2023"
          role="Web Developer"
          type="Virtual Experience"
          company="Moreton Bay"
          desc="From planning the website to creating a form section for user input. Explore UI/UX design for end users and further polished my web development skills."
          tech={["Figma", "CSS", "HTML", "JavaScript"]}
        />
        <ExperienceCard
          image="https://media.licdn.com/dms/image/v2/C4D0BAQGOMVo5-P5IHg/company-logo_200_200/company-logo_200_200/0/1674468940363/wedancevip_logo?e=1740009600&v=beta&t=FQU4c-X8YqQ6BdZKSUFh-jDMBlu3RqGn2VtCD1iiXts"
          link="https://www.wedance.vip"
          start="JULY 2022"
          end="SEP 2022"
          role="Front-end Developer"
          type="Internship"
          company="WeDance"
          desc="Used Vue.js to fix bugs given by various tickets on the github codebase. Helped in designing and building the new WeDance version."
          tech={["Vue.js", "CSS", "TypeScript"]}
        />
        <ExperienceCard
          image="https://media.licdn.com/dms/image/v2/D4E0BAQG9L7InIQVZrQ/company-logo_200_200/company-logo_200_200/0/1722506756452/goldman_sachs_logo?e=1738800000&v=beta&t=lIJnZUeWG3ayCmC5JSYeu0h4VVXlfa6tufcdlKz_yqs"
          link="https://insidesherpa.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_u2pPtAhxvS8oQHQfT_1629113234515_completion_certificate.pdf"
          start="AUG 2021"
          end="AUG 2021"
          role="Software Engineer"
          type="Virtual Experience"
          company="Goldman Sachs"
          desc="Cracked leaked password database that had different hashing types like SHA-256, MD5 etc. Using services like hashcat to run the passwords through different hashing algorithms and crack them using methods such as brute force."
          tech={["Hashcat", "Cryptography"]}
        />
        <ExperienceCard
          image="https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_400_400/0/1656681489601/jpmorganchase_logo?e=2147483647&v=beta&t=Cri68t3YNEgTwG2_BhKNbNhutV5x8Te9OWg2G31m5Es"
          link="https://insidesherpa.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_u2pPtAhxvS8oQHQfT_1629460325328_completion_certificate.pdf"
          start="JULY 2021"
          end="AUG 2021"
          role="Software Engineer"
          type="Virtual Work Experience"
          company="JPMorgan"
          desc="Created and interface with a stock price data feed. Used JPMorgan Chase frameworks and tools. Displayed data visually for traders."
          tech={["Typescript", "React", "Python", "JavaScript", "Git"]}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <Hero />
        <Divider />
        <About />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
