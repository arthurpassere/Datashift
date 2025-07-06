import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [apiResponse, setApiResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

  const testApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/convert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setApiResponse(
        `Erro: ${error instanceof Error ? error.message : "Erro desconhecido"}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const testHealth = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/health`);
      const data = await response.json();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setApiResponse(
        `Erro: ${error instanceof Error ? error.message : "Erro desconhecido"}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Datashift - Full-Stack</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className='card'>
        <h2>API Test</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button onClick={testApi} disabled={isLoading}>
            {isLoading ? "Carregando..." : "Testar POST /api/convert"}
          </button>
          <button onClick={testHealth} disabled={isLoading}>
            {isLoading ? "Carregando..." : "Testar GET /api/health"}
          </button>
        </div>

        {apiResponse && (
          <div
            style={{
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "left",
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
            }}
          >
            <strong>Resposta da API:</strong>
            <br />
            {apiResponse}
          </div>
        )}
      </div>

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
