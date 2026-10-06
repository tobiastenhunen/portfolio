import "./Footer.css"
import { BsGithub } from "react-icons/bs"

export default function Footer() {
    const mailUser = "mail"
    const domain = "tobiastenhunen.com"
    const mailAddress = `${mailUser}@${domain}`

    return (
        <footer id="footer">
            <a href="https://github.com/tobiastenhunen" aria-label="GitHub profiel"><BsGithub className="footer-logo"></BsGithub></a>
            <hr></hr>
            <div className="footer-contact-info">
                <a href={`mailto:${mailAddress}`}>{mailAddress}</a>
            </div>
        </footer>
    )
}
