import { Link } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Skills from "../../components/Skills/Skills"
import "./Home.css"
import AboutMe from "../../components/AboutMe/AboutMe"

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
            <Skills>
            </Skills>
            <AboutMe></AboutMe>
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
