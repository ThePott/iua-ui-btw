import { LocalAutoComplete } from "@/package/components/inputs"
import { Container, RoundBox, Vstack } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import type { ValueLabel } from "@/package/shared/types"

const optionArray: ValueLabel[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "kiwi", label: "Kiwi" },
    { value: "lemon", label: "Lemon" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "peach", label: "Peach" },
    { value: "pear", label: "Pear" },
    { value: "pineapple", label: "Pineapple" },
    { value: "strawberry", label: "Strawberry" },
    { value: "watermelon", label: "Watermelon" },
]

const LocalAutoCompletePage = () => {
    return (
        <Container isPadded>
            <RoundBox padding="xl" isShadowed color="bg0" radius="lg">
                <Vstack gap="xl">
                    <Title as="h1">Local Auto Complete</Title>
                    <LocalAutoComplete
                        onChange={() => {}}
                        optionArray={optionArray}
                        isWidthMatching
                        placeholder="type here and find matching results"
                    />
                    <Vstack gap="lg">
                        <RoundBox>
                            <Title as="h2">is matching width</Title>
                            <Vstack>
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    isWidthMatching
                                    placeholder="is width matching"
                                />
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    placeholder="not is width matching"
                                />
                            </Vstack>
                        </RoundBox>
                        <RoundBox>
                            <Title as="h2">is red</Title>
                            <Vstack>
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    isRed
                                    placeholder="is red"
                                />
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    isRed={false}
                                    placeholder="not is red"
                                />
                            </Vstack>
                        </RoundBox>
                        <RoundBox>
                            <Title as="h2">disabled</Title>
                            <Vstack>
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    disabled
                                    placeholder="disabled"
                                />
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    placeholder="not disabled"
                                />
                            </Vstack>
                        </RoundBox>
                        <RoundBox>
                            <Title as="h2">placeholder vs default value</Title>
                            <Vstack>
                                <LocalAutoComplete
                                    onChange={() => {}}
                                    optionArray={optionArray}
                                    placeholder="placeholder"
                                />
                                <LocalAutoComplete onChange={() => {}} optionArray={optionArray} defaultValue="apple" />
                            </Vstack>
                        </RoundBox>
                    </Vstack>
                </Vstack>
            </RoundBox>
        </Container>
    )
}

export default LocalAutoCompletePage
