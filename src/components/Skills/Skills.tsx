import "./Skills.css"
import SkillCell from "../SkillCell/SkillCell"

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skill-lists">
                <div className="web-skills">
                    <h3 className="skill-heading web-skills-heading">Development</h3>
                    <ul className="skill-category-list">
                        <SkillCell skillName="Html" color="white" backgroundColor="#E34F26"></SkillCell>
                        <SkillCell skillName="Css" color="white" backgroundColor="#1572B6"></SkillCell>
                        <SkillCell skillName="Javascript" color="#111111" backgroundColor="#F7DF1E"></SkillCell>
                        <SkillCell skillName="Typescript" color="white" backgroundColor="#2F74C0"></SkillCell>
                        <SkillCell skillName="React" color="#61DAFB" backgroundColor="#20232A"></SkillCell>
                    </ul>
                </div>
                <div className="design-skills">
                    <h3 className="skill-heading design-skills-heading">Creatief</h3>
                    <ul className="skill-category-list">
                        <SkillCell skillName="Photoshop" color="#31A8FF" backgroundColor="#001E36" appearRight></SkillCell>
                        <SkillCell skillName="Illustrator" color="white" backgroundColor="#FF9A00" appearRight></SkillCell>
                        <SkillCell skillName="InDesign" color="#F73163" backgroundColor="#47021E" appearRight></SkillCell>
                        <SkillCell skillName="Figma" color="white" backgroundColor="#1E1E1E" appearRight></SkillCell>
                        <SkillCell skillName="Blender" color="white" backgroundColor="#E37200" appearRight></SkillCell>
                    </ul>
                </div>
            </div>
        </section>
    )
}