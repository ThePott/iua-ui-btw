import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/flex-one-container/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/flex-one-container/"!</div>
}
