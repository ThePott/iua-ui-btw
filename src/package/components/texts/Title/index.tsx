import type { HeadingProps } from "@/package/shared/types"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const titleVariants = tv({
    base: "font-semibold",
    variants: {
        size: {
            md: "",
            lg: "text-iua-lg",
            xl: "text-iua-xl",
        },
        isMuted: {
            false: "",
            true: "text-iua-fg-muted",
        },
    },
})

interface WithTitleProps {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    size?: "md" | "lg" | "xl"
    isMuted?: boolean
}

const Title = ({ as: Component = "h2", size = "md", isMuted, ...props }: HeadingProps & WithTitleProps) => {
    const { className, children, ...rest } = props

    return (
        <Component {...rest} className={clsx(titleVariants({ size, isMuted }), className)}>
            <p className="inline-block text-left">{children}</p>
        </Component>
    )
}

export default Title
