import { Button } from "@/package/components/inputs"
import { Hstack, Vstack } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import PageContainer from "@/shared/components/PageContainer"

const ButtonPage = () => {
    return (
        <PageContainer>
            <Title as="h1">Button</Title>
            <Vstack>
                <Title as="h2">color</Title>
                <Hstack className="flex-wrap">
                    <Button color="bg0">bg-0</Button>
                    <Button color="bg1">bg-1</Button>
                    <Button color="bg2">bg-2</Button>
                    <Button color="red">red</Button>
                    <Button color="yellow">yellow</Button>
                    <Button color="green">green</Button>
                    <Button color="blue">blue</Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">status: pending</Title>
                <Hstack className="flex-wrap">
                    <Button status="pending" color="bg0">
                        bg-0
                    </Button>
                    <Button status="pending" color="bg1">
                        bg-1
                    </Button>
                    <Button status="pending" color="bg2">
                        bg-2
                    </Button>
                    <Button status="pending" color="red">
                        red
                    </Button>
                    <Button status="pending" color="yellow">
                        yellow
                    </Button>
                    <Button status="pending" color="green">
                        green
                    </Button>
                    <Button status="pending" color="blue">
                        blue
                    </Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">disabled</Title>
                <Hstack className="flex-wrap">
                    <Button status="disabled" color="bg0">
                        bg-0
                    </Button>
                    <Button status="disabled" color="bg1">
                        bg-1
                    </Button>
                    <Button status="disabled" color="bg2">
                        bg-2
                    </Button>
                    <Button status="disabled" color="red">
                        red
                    </Button>
                    <Button status="disabled" color="yellow">
                        yellow
                    </Button>
                    <Button status="disabled" color="green">
                        green
                    </Button>
                    <Button status="disabled" color="blue">
                        blue
                    </Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">is shadowed</Title>
                <Hstack className="flex-wrap">
                    <Button isShadowed color="bg0">
                        bg-0
                    </Button>
                    <Button isShadowed color="bg1">
                        bg-1
                    </Button>
                    <Button isShadowed color="bg2">
                        bg-2
                    </Button>
                    <Button isShadowed color="red">
                        red
                    </Button>
                    <Button isShadowed color="yellow">
                        yellow
                    </Button>
                    <Button isShadowed color="green">
                        green
                    </Button>
                    <Button isShadowed color="blue">
                        blue
                    </Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">border</Title>
                <Hstack className="flex-wrap">
                    <Button border="none">none</Button>
                    <Button border="onHover">on hover</Button>
                    <Button border="always">always</Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">padding</Title>
                <Vstack className="items-start">
                    <Button border="always" padding="none">
                        none
                    </Button>
                    <Button border="always" padding="tight">
                        tight
                    </Button>
                    <Button border="always" padding="normal">
                        normal
                    </Button>
                    <Button border="always" padding="wide">
                        wide
                    </Button>
                </Vstack>
            </Vstack>
            <Vstack>
                <Title as="h2">is on left</Title>
                <Button isOnLeft border="always">
                    is on left
                </Button>
                <Button border="always">not is on left</Button>
            </Vstack>
        </PageContainer>
    )
}

export default ButtonPage
