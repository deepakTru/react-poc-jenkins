// useStream.js
import { useEffect, useState } from "react";

const useStream = (url, listen) => {
  const [data, setData] = useState(null);

  function onMessage(event) {
    if (event) {
      setData(JSON.parse(event.data));
    }
  }

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.addEventListener("put", onMessage);

    return () => {
      eventSource.close();
    };
  }, [url, listen]);

  return data;
};

export default useStream;
