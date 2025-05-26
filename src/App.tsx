import { Toolbar } from "@/components/Toolbar/Toolbar";
import { Canvas } from "@/components/Canvas";
import { Debug } from "@/components/Debug";
import { ResizableCanvasWrapper } from "@/components/ResizableCanvasWrapper";

function App() {
  return (
    <>
      <header>
        <h1>// MDPVSS</h1>
      </header>
      <main>
        <Toolbar />
        <ResizableCanvasWrapper>
          <Canvas />
        </ResizableCanvasWrapper>
        {/* <Debug /> */}
      </main>
    </>
  );
}

export default App;
