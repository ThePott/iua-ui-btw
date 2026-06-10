import type { Color, None, TailwindCSS, XsToXl } from "../types"

export const gapVariants: Record<None | XsToXl, TailwindCSS> = {
    none: "",
    xs: "gap-iua-xs",
    sm: "gap-iua-sm",
    md: "gap-iua-md",
    lg: "gap-iua-lg",
    xl: "gap-iua-xl",
}

export const paddingVariants: Record<None | XsToXl, TailwindCSS> = {
    none: "",
    xs: "p-iua-xs",
    sm: "p-iua-sm",
    md: "p-iua-md",
    lg: "p-iua-lg",
    xl: "p-iua-xl",
}

export const bgVariants: Record<Color, TailwindCSS> = {
    bgNeg1: "bg-iua-bg-neg-1",
    bg0: "bg-iua-bg-0",
    bg1: "bg-iua-bg-1",
    bg2: "bg-iua-bg-2",
    red: "bg-iua-red-0",
    yellow: "bg-iua-yellow-0",
    blue: "bg-iua-blue-0",
    green: "bg-iua-green-0",
    transparent: "",
}

export const fgFromBgVariants: Record<Color, TailwindCSS> = {
    bgNeg1: "",
    bg0: "",
    bg1: "",
    bg2: "",
    red: "",
    yellow: "text-iua-inverted-vivid",
    blue: "text-iua-inverted-vivid",
    green: "text-iua-inverted-vivid",
    transparent: "",
}

export const wideWidthVariants: Record<XsToXl, TailwindCSS> = {
    xs: "max-w-50 w-full",
    sm: "max-w-100 w-full",
    md: "max-w-150 w-full",
    lg: "max-w-200 w-full",
    xl: "max-w-250 w-full",
}

export const narrowWidthVariants: Record<XsToXl, TailwindCSS> = {
    xs: "w-25",
    sm: "w-50",
    md: "w-75",
    lg: "w-100",
    xl: "w-125",
}
