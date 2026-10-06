import { useEffect } from "react"
import "./Skills.css"

export default function Skills() {
    useEffect(() => {
        addAppearAnimations()
    }, [])    

    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skill-lists">
                <div className="web-skills">
                    <h3 className="skill-heading web-skills-heading">Web</h3>
                    <ul className="skill-category-list">
                        <li className="skill-html web-skill skill">Html</li>
                        <li className="skill-css web-skill skill">Css</li>
                        <li className="skill-javascript web-skill skill">Javascript</li>
                        <li className="skill-typescript web-skill skill">Typescript</li>
                        <li className="skill-react web-skill skill">React</li>
                    </ul>
                </div>
                <div className="design-skills">
                    <h3 className="skill-heading design-skills-heading">Design</h3>
                    <ul className="skill-category-list">
                        <li className="skill-photoshop design-skill skill">Photoshop</li>
                        <li className="skill-illustrator design-skill skill">Illustrator</li>
                        <li className="skill-indesign design-skill skill">InDesign</li>
                        <li className="skill-figma design-skill skill">Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

function addAppearAnimations() {
    const skills = document.querySelectorAll(".skill")
    skills.forEach((skill) => {
        if (skill.classList.contains("design-skill")) {skill.classList.add("appear-right")}
        skill.classList.add("appear-animation")
    })
}
