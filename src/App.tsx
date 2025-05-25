import { Toolbar } from "@/components/Toolbar/Toolbar";
import { Canvas } from "@/components/Canvas";
import { Debug } from "@/components/Debug";

function App() {
  return (
    <>
      <header>
        <h1>// MDPVSS</h1>
      </header>
      <main>
        <Toolbar />
        <Canvas />
        {/* <Debug /> */}
      </main>
    </>
  );
}

export default App;
