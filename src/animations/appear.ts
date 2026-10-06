import "./appear.css"

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("appear", entry.isIntersecting)
        }
    )
}, {threshold: 0.5, rootMargin: "0px 100%"})

function observeAppearElements() {
    const appearElements = document.querySelectorAll(".appear-animation")
    appearElements.forEach((element) => {observer.observe(element)})
}

const mutationObserver = new MutationObserver(observeAppearElements)
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"], /* Classes which are applied on runtime also work */
})
observeAppearElements()
