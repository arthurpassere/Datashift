import Background from "./components/Background";
import Header from "./components/Header";
import JsonEditor from "./components/JsonEditor/JsonEditor";
import "./styles.css";

export default function DataShift() {
  return (
    <div className='DataShift'>
      <Background />
      <Header />
      <div className='hero-section'>
        <div className='headline'>
          No more guessing. Simply paste, validate, and transform your content
        </div>
      </div>
      <div className='editor'>
        <JsonEditor />
      </div>
    </div>
  );
}
