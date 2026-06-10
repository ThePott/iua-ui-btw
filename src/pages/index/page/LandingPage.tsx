import { Hstack, Vstack } from "@/package/components/layouts"

const LandingPage = () => {
    type Colorscheme = "ghostty" | "tokyo-night" | "ic-orange-ppl" | "gruvbox"
    const html = window.document.documentElement
    const changeColorscheme = (colorscheme: Colorscheme) => {
        html.setAttribute("data-schema", colorscheme)
    }
    return (
        <Vstack>
            <p>this is app page</p>
            <Hstack className="p-iua-md border-b-iua-fg-dim border-b">
                <button onClick={() => changeColorscheme("ghostty")}>ghostty</button>
                <button onClick={() => changeColorscheme("tokyo-night")}>tokyo night</button>
                <button onClick={() => changeColorscheme("gruvbox")}>gruvbox</button>
                <button onClick={() => changeColorscheme("ic-orange-ppl")}>ic orange ppl</button>
            </Hstack>
        </Vstack>
    )
}

export default LandingPage
