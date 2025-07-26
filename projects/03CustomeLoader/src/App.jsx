import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  // ✅ Stable version of the counter update logic
  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementCount, 500);

    const timeout = setTimeout(() => {
      setData('Fetched Data');
      setIsLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [incrementCount]); // ✅ useCallback prevents unnecessary effect re-triggers

  return (
    <div>
      {isLoading ? (
        <h1>Loading... {count}</h1>
      ) : (
        <h1>{data}</h1>
      )}
    </div>
  );
}

export default App;
