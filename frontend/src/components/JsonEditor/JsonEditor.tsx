// src/components/JsonEditor.tsx
import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function JsonEditor() {
  const [jsonValue, setJsonValue] = useState('{\n  "name": "Datashift"\n}');

  const handleEditorChange = (value: string | undefined) => {
    setJsonValue(value || "");
  };

  return (
    <div className='h-96 w-full max-w-2xl rounded-2xl overflow-hidden bg-gray-900'>
      <Editor
        height='100%'
        defaultLanguage='json'
        defaultValue={jsonValue}
        onChange={handleEditorChange}
        theme='vs-dark'
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          contextmenu: false,
          scrollbar: { vertical: "hidden", horizontal: "auto" },
          "semanticHighlighting.enabled": false,
          quickSuggestions: false,
          renderValidationDecorations: "off",
          overviewRulerLanes: 0,
        }}
      />
    </div>
  );
}
