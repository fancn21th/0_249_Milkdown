import { MilkdownProvider } from "@milkdown/react";
import { MilkdownEditor } from "./components/Editor";

export default function App() {
  return (
    <MilkdownProvider>
      <MilkdownEditor />
    </MilkdownProvider>
  );
}
