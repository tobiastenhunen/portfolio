import { Link } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Skills from "../../components/Skills/Skills"
import "./Home.css"
import AboutMe from "../../components/AboutMe/AboutMe"
import FeaturedProject from "../../components/FeaturedProject/FeaturedProject"
import { Category } from "../../components/FeaturedProject/FeaturedProject"

export default function Home() {
    return (
        <>
            <div className="hero">
                <p className="greeting-message">{_getGreetingMessage()}, ik ben</p>
                <Banner text="Tobias Tenhunen" verticalMargin="min(64px, 2em)">
                    <p>Front-End Developer</p>
                </Banner>
                <Link to="/mijn-werk" className="view-work">Bekijk mijn werk</Link>
            </div>
            <Skills />
            <AboutMe />
            <FeaturedProject
                category={Category.Development}
                title="Bakkie Bewust"
                description="Lorem ipsum blah blah"
                skillsUsed={["html", "css"]}
                showcaseImagePath="src\assets\project-showcases\bakkie-bewust.webp"
                url="https://bakkiebewust.tobiastenhunen.com/"
            />
            <FeaturedProject
                category={Category.Development}
                title="Bakkie Bewust"
                description="Lorem ipsum blah blah"
                skillsUsed={["html", "css"]}
                showcaseImagePath="src\assets\project-showcases\bakkie-bewust.webp"
                url="https://bakkiebewust.tobiastenhunen.com/"
            />
        </>
    )
}

function _getGreetingMessage(): String {
    let date = new Date()
    let currentTime: String = date.toLocaleTimeString("nl", {hour12: false})
    let currentHour = Number(currentTime.split(":")[0])

    if (isNaN(currentHour)) {
        console.warn("Couldn't retrieve current hour: ", currentHour)
        return ""
    }

    if (currentHour < 6) return "Hallo"
    if (currentHour < 12) return "Goedemorgen"
    if (currentHour < 18) return "Goedemiddag"
    return "Goedenavond"
}
