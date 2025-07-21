import Background from "./components/Background";
import Header from "./components/Header";
import JsonEditor from "./components/JsonEditor/JsonEditor";
import { Button } from "./components/ui/button";
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
      <div className='buttons'>
        <Button className='text-lg cursor-pointer' variant='secondary'>
          Beautify
        </Button>
        <Button className='text-lg cursor-pointer' variant='secondary'>
          Validate
        </Button>
        <Button className='text-lg cursor-pointer' variant='secondary'>
          Convert to
        </Button>
      </div>
    </div>
  );
}
