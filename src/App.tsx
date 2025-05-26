import { Toolbar } from "@/components/Toolbar/Toolbar";
import { Canvas } from "@/components/Canvas";
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
      </main>
    </>
  );
}

export default App;
