import { Title } from "@mantine/core";
import DndList from "./DndList";
function App() {
    return (
        <>
            <Title order={1}>Sanity check</Title>
            <h1 className="text-4xl font-bold">Tailwind</h1>
            <DndList />
        </>
    );
}

export default App;
