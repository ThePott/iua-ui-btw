import type { Color } from "@/package/shared/types"
import { bgVariants } from "@/package/shared/utils/styles"
import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"
import { tv } from "tailwind-variants/lite"
import { Hstack } from "../../layouts"
import { Loader } from "../../pending/"

const buttonVariants = tv({
    base: "rounded-iua-sm iua-transition",
    variants: {
        color: bgVariants,
        status: {
            enabled: "cursor-pointer",
            disabled: "",
            pending: "",
        },
        padding: {
            normal: "py-iua-sm px-iua-md",
            wide: "py-iua-xs px-iua-md w-full",
            tight: "p-iua-xs",
            none: "",
        },
        isShadowed: {
            false: "",
            true: "shadow-iua-sm",
        },
        border: {
            always: "",
            onHover: "",
            none: "",
        },
    },
    compoundVariants: [
        // NOTE: text colors
        {
            color: ["bg0", "bg1", "bg2", "transparent"],
            className: "disabled:text-fg-muted",
        },
        {
            color: ["red", "yellow", "green", "blue"],
            className: "text-iua-fg-inverted-vivid disabled:text-iua-fg-inverted-muted",
        },

        // NOTE: background colors
        { color: "bg0", status: "enabled", className: "hover:bg-iua-bg-1 active:bg-iua-bg-2" },
        { color: "bg1", status: "enabled", className: "hover:bg-iua-bg-2 active:bg-iua-bg-3" },
        { color: "bg2", status: "enabled", className: "hover:bg-iua-bg-3 active:bg-iua-bg-4" },
        {
            color: "red",
            className: "hover:bg-iua-red-1 active:bg-iua-red-2 disabled:bg-iua-red-neg-1",
        },
        {
            color: "yellow",
            className: "hover:bg-iua-yellow-1 active:bg-iua-yellow-2 disabled:bg-iua-yellow-neg-1",
        },
        {
            color: "green",
            className: "hover:bg-iua-green-1 active:bg-iua-green-2 disabled:bg-iua-green-neg-1",
        },
        {
            color: "blue",
            className: "hover:bg-iua-blue-1 active:bg-iua-blue-2 disabled:bg-iua-blue-neg-1",
        },

        {
            border: "onHover",
            status: "enabled",
            className: "border border-transparent hover:border-iua-fg-muted",
        },
        {
            border: "always",
            status: "enabled",
            className: "border border-iua-fg-dim hover:border-iua-fg-muted",
        },
    ],
})

interface WithButtonProps<T extends ElementType = "button"> {
    as?: T
    color?: Color
    status?: "enabled" | "disabled" | "pending"
    border?: "onHover" | "always" | "none"
    padding?: "wide" | "tight" | "normal" | "none"
    isShadowed?: boolean
    isOnLeft?: boolean
}
type ButtonProps<T extends ElementType> = WithButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof WithButtonProps<T>>

const Button = <T extends ElementType>({
    as,
    color = "transparent",
    status = "enabled",
    border = "none",
    padding = "normal",
    isShadowed = false,
    isOnLeft = false,
    ...props
}: ButtonProps<T>) => {
    const { className, children, ...rest } = props

    const isBgDark = color.includes("bg") || color === "transparent"

    const Component: ElementType = as ?? "button"
    return (
        <Component
            {...rest}
            disabled={status !== "enabled"}
            className={clsx(buttonVariants({ color, status, padding, border, isShadowed }), className)}
        >
            <Hstack className={clsx("items-center", isOnLeft ? "text-left" : "justify-center")}>
                {status === "pending" && <Loader isDark={!isBgDark} />}
                {children}
            </Hstack>
        </Component>
    )
}

export default Button
