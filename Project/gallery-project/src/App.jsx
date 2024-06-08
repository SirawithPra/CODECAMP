import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageFilter from "./components/ImageFilter";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 2) {
      console.log("Hello world! count is 2");
    }
  }, [count]);

  return (
    // <>
    //   <h1
    //     className="text-3xl font-bold underline"
    //     onClick={() => setCount((count) => count + 1)}
    //   >
    //     Hello world! : count is {count}
    //   </h1>
    // </>
      <div className="w-full min-h-screen bg-gray-900">
        <ImageFilter/>
      </div>
    
  );
}

export default App;
