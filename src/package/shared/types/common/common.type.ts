export type None = "none"
export type SmToLg = "sm" | "md" | "lg"
export type XsToXl = "xs" | SmToLg | "xl"

export type Color = "red" | "yellow" | "blue" | "green" | "bgNeg1" | "bg0" | "bg1" | "bg2" | "transparent"

export type ValueLabel = {
    value: string
    label: string
}

// NOTE: this is for editor to detect pattern by regex and allow tailwindcss autocomplete
/** EXAMPLE
vim.lsp.config.tailwindcss = {
	settings = {
		tailwindCSS = {
			experimental = {
				classRegex = {
					{ "Record<[\\w\\s|,]+,\\s*TailwindCSS>\\s*=\\s*\\{([\\s\\S]*?)\\}", "[\"'`]([^\"'`]*).*?[\"'`]" },
				},
			},
		},
	},
}
*/
export type TailwindCSS = string
