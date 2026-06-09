import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/modal/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/modal/"!</div>
}
