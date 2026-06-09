import type { ValueLabel } from "@/package/shared/types"
import { flip, offset, shift, useFloating } from "@floating-ui/react"
import { getRegExp } from "korean-regexp"
import { useEffect, useRef } from "react"
import Input from "../Input"
import LocalAutoCompleteContent from "./LocalAutoCompleteContent"
import { LocalAutoCompleteProvider, useLocalAutoCompleteStore } from "./localAutoCompleteStore"

const WrappedLocalAutoComplete = () => {
    const inputValue = useLocalAutoCompleteStore((state) => state.inputValue)
    const setInputValue = useLocalAutoCompleteStore((state) => state.setInputValue)
    const inputRef = useLocalAutoCompleteStore((state) => state.inputRef)
    const setIsContentOn = useLocalAutoCompleteStore((state) => state.setIsContentOn)
    const placeholder = useLocalAutoCompleteStore((state) => state.placeholder)
    const optionArray = useLocalAutoCompleteStore((state) => state.optionArray)
    const setFloatingReturns = useLocalAutoCompleteStore((state) => state.setFloatingReturns)
    const defaultValue = useLocalAutoCompleteStore((state) => state.defaultValue)
    const disabled = useLocalAutoCompleteStore((state) => state.disabled)
    const isRed = useLocalAutoCompleteStore((state) => state.isRed)

    const floatingReturns = useFloating({
        middleware: [flip(), shift(), offset(4)],
        placement: "bottom-start",
    })

    useEffect(() => {
        setFloatingReturns(floatingReturns)
    }, [floatingReturns])
    useEffect(() => {
        if (!defaultValue) return
        if (inputValue) return
        const defaultOption = optionArray.find((option) => option.value === defaultValue)
        if (!defaultOption) return
        setInputValue(defaultOption.label)
    }, [defaultValue])

    const refCallback = (node: HTMLInputElement | null) => {
        inputRef.current = node
        floatingReturns.refs.setReference(node)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            inputRef.current?.blur()
        }

        if (event.key !== "Enter") return

        const filteredOptionArray = optionArray.filter(({ label }) => label.match(getRegExp(inputValue)))
        if (filteredOptionArray.length === 0) return

        setInputValue(filteredOptionArray[0]?.label ?? "")
        inputRef.current?.blur()
        inputRef.current?.closest("form")?.requestSubmit()
    }
    return (
        <div className="relative grow">
            <Input
                ref={refCallback}
                isRed={isRed}
                value={inputValue}
                onChange={handleChange}
                onFocus={() => setIsContentOn(true)}
                onBlur={() => setIsContentOn(false)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
            />
            <LocalAutoCompleteContent />
        </div>
    )
}

export type LocalAutoCompletePassedProps = {
    placeholder?: string
    optionArray: ValueLabel[]
    isRed?: boolean
    onChange: (inputValue: string) => void
    defaultValue?: string
    disabled?: boolean
    isWidthMatching?: boolean
}
const LocalAutoComplete = (props: LocalAutoCompletePassedProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <LocalAutoCompleteProvider key={JSON.stringify(props)} passedProps={{ ...props, inputRef }}>
            <WrappedLocalAutoComplete />
        </LocalAutoCompleteProvider>
    )
}

export default LocalAutoComplete
