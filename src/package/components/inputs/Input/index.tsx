import type { InputProps } from "@/package/shared/types"
import clsx from "clsx"
import type { JSX } from "react"
import { tv } from "tailwind-variants/lite"
import { Hstack } from "../../layouts"

const inputVariants = tv({
    base: "rounded-iua-sm iua-transition items-center outline ",
    variants: {
        isRed: {
            false: "focus-within:outline-iua-fg-muted outline-transparent",
            true: "focus-within:outline-2 outline-iua-red-0",
        },
        variant: {
            contained: "bg-bg-2 shadow-inward-iua-sm",
            ghost: "",
        },
        colorChangeIn: {
            line: "",
            fill: "rounded-none",
        },
    },
    compoundVariants: [
        {
            variant: "ghost",
            colorChangeIn: "fill",
            isRed: true,
            className: "bg-dark-red",
        },
    ],
})

interface WithInputProps {
    isRed?: boolean
    trailingIcon?: JSX.Element
    variant?: "contained" | "ghost"
    colorChangeIn?: "line" | "fill"
}

const Input = ({
    isRed = false,
    trailingIcon,
    variant = "contained",
    colorChangeIn,
    ...props
}: InputProps & WithInputProps) => {
    const { style, className, ...rest } = props

    return (
        <Hstack style={style} className={clsx(inputVariants({ isRed, variant, colorChangeIn }), className)}>
            <input
                {...rest}
                className="placeholder:text-iua-fg-muted disabled:text-iua-fg-dim disabled:placeholder:text-iua-fg-dim w-full border-0 px-3 py-2 outline-0"
            />
            {trailingIcon}
        </Hstack>
    )
}

export default Input
