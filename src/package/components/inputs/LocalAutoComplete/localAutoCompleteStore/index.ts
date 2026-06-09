import createLocalStore from "@/package/components/wrappers/createLocalStore"
import type { useFloating } from "@floating-ui/react"
import type { RefObject } from "react"
import type { LocalAutoCompletePassedProps } from ".."

type FloatingReturns = ReturnType<typeof useFloating>

type LocalAutoCompleteDefaultProps = {
    isContentOn: boolean
    setIsContentOn: (isFocused: boolean) => void

    inputValue: string
    setInputValue: (inputValue: string) => void

    floatingReturns: FloatingReturns | null
    setFloatingReturns: (floatingReturns: FloatingReturns | null) => void
}
const { LocalStoreProvider: LocalAutoCompleteProvider, useLocalStore: useLocalAutoCompleteStore } = createLocalStore<
    LocalAutoCompletePassedProps & { inputRef: RefObject<HTMLInputElement | null> },
    LocalAutoCompleteDefaultProps
>((set, get) => {
    return {
        isContentOn: false,
        setIsContentOn: (isContentOn) => set({ isContentOn }),
        inputValue: "",
        setInputValue: (inputValue) => {
            set({ inputValue })
            get().onChange(inputValue)
        },

        floatingReturns: null,
        setFloatingReturns: (floatingReturns) => set({ floatingReturns }),
    }
})

export { LocalAutoCompleteProvider, useLocalAutoCompleteStore }
