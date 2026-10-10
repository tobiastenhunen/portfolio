import { useEffect, useState, useRef } from "react"
import "./Banner.css"

type Props = {
    text: String,
    verticalMargin?: String,
    children?: React.ReactNode,
}

export default function Banner({text, verticalMargin = "4em", children}: Props) {
    let sectionRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
        if (verticalMargin && sectionRef.current) {
            sectionRef.current.style.margin = `${verticalMargin} clamp(2rem, 5vw, 4rem)`
        }

    }, [])

    return (
            <section ref={sectionRef} className="banner">
                <h1 className={active ? "heading active" : "heading"}>{text}</h1>
                {children}
            </section>
    )

}
