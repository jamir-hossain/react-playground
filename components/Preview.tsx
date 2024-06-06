import React from "react";
import { LiveProvider, LivePreview } from "react-live";

const Preview = () => {
  return (
    <div>
      <div className="flex max-w-3xl m-auto align-center items-center justify-center p-6">
        <LiveProvider
          code={`
const FirstElement = () => {
  return (
    <div>
      <h1 className="text-7xl">Hello world</h1>
    </div>
  );
};

render(<FirstElement />)`}
          noInline={true}
        >
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default Preview;
