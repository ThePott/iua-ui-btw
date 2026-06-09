import { Button } from "@/package/components/inputs"
import { Hstack, Vstack } from "@/package/components/layouts"
import { Outlet } from "@tanstack/react-router"

type Colorscheme = "ghostty" | "tokyo-night" | "ic-orange-ppl" | "gruvbox"

const RootLayout = () => {
    const html = window.document.documentElement
    const changeColorscheme = (colorscheme: Colorscheme) => {
        html.setAttribute("data-schema", colorscheme)
    }
    return (
        <Vstack>
            <Hstack className="p-iua-md border-b-iua-fg-dim border-b">
                <Button border="always" onClick={() => changeColorscheme("ghostty")}>
                    ghostty
                </Button>
                <Button border="always" onClick={() => changeColorscheme("tokyo-night")}>
                    tokyo night
                </Button>
                <Button border="always" onClick={() => changeColorscheme("gruvbox")}>
                    gruvbox
                </Button>
                <Button border="always" onClick={() => changeColorscheme("ic-orange-ppl")}>
                    ic orange ppl
                </Button>
            </Hstack>
            <Outlet />
        </Vstack>
    )
}

export default RootLayout
