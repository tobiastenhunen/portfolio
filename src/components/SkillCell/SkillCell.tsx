import "./SkillCell.css"

type Props = {
    skillName: string,
    color: string,
    backgroundColor: string,
    appearRight?: boolean
}

export default function SkillCell({skillName, color, backgroundColor, appearRight = false}: Props) {
    const classList = "skill-cell appear-animation " + (appearRight ? "appear-right" : "")
    return <li>
        <div className={classList} style={{color, backgroundColor}}>
            <p>{skillName}</p>
        </div>
    </li>
}