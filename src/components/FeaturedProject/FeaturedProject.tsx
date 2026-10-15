import "./FeaturedProject.css"

export const Category = {
    Development: "Development",
    Creative: "Creative"
}

type Props = {
    category: string,
    title: string,
    description: string,
    skillsUsed: string[],
    showcaseImagePath: string,
    url?: string
}

export default function FeaturedProject(
    {category, title, description, skillsUsed, showcaseImagePath, url}: Props
) {
    const categoryTagStyle = {
        backgroundColor: `${category === Category.Development ? "var(--web-primary)" : "var(--design-primary)"}`
    }

    return <div className="featured-project appear-animation">
        <a href={url}><img src={showcaseImagePath}/></a>
        <div className="featured-project-info">
            <span
                className="category-tag"
                style={categoryTagStyle}
                >{category}</span>
                <h3 className="featured-project-title">{title}</h3>
                <p className="featured-project-description">{description}</p>
                <p className="featured-project-skills">{skillsUsed.join(" · ")}</p>
                <a href={url} className="featured-project-view-more">Bekijk meer</a>
        </div>
    </div>
}
