"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LivePreview } from "react-live";
import { getComponentName } from "@/utils";

interface Props {
  code: string;
  render?: string;
}

const Playground = ({ code: defaultCode, render }: Props) => {
  const [code, setCode] = useState(defaultCode);

  function handleOnChange(value?: string) {
    console.log("value", value);
    setCode(value || "");
  }

  const renderComponent = render ?? getComponentName(code);

  return (
    <div className="bg-white h-screen grid grid-cols-2">
      <div className="bg-[#1e1e1e] py-6">
        <Editor
          className="h-screen"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            contextmenu: false,
          }}
          onChange={handleOnChange}
        />
      </div>

      <div>
        <LiveProvider
          code={`${code} render(<${renderComponent} />)`}
          noInline={true}
        >
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default Playground;
