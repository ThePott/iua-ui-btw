import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/container/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/container/"!</div>
}
