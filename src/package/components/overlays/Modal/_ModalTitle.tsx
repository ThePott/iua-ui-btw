import Title from "../Title/Title"

const ModalTitle = ({ children }: { children: string }) => {
    return <Title as="h1">{children}</Title>
}

export default ModalTitle
