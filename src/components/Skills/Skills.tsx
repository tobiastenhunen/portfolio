import "./Skills.css"

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skill-lists">
                <div className="web-skills">
                    <h3 className="skill-heading web-skills-heading">Web</h3>
                    <ul className="skill-category-list">
                        <li className="skill-html skill">Html</li>
                        <li className="skill-css skill">Css</li>
                        <li className="skill-javascript skill">Javascript</li>
                        <li className="skill-typescript skill">Typescript</li>
                        <li className="skill-react skill">React</li>
                    </ul>
                </div>
                <div className="design-skills">
                    <h3 className="skill-heading design-skills-heading">Design</h3>
                    <ul className="skill-category-list">
                        <li className="skill-photoshop skill">Photoshop</li>
                        <li className="skill-illustrator skill">Illustrator</li>
                        <li className="skill-indesign skill">InDesign</li>
                        <li className="skill-figma skill">Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}