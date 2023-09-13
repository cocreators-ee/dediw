import { Tldraw, useFileSystem } from "@tldraw/tldraw"

function App() {
  const fileSystemEvents = useFileSystem()

  return (
    <div className="tldraw">
      <Tldraw {...fileSystemEvents} />
    </div>
  )
}

export default App
