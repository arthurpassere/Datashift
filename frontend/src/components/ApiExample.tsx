import { useApi, API_ENDPOINTS } from "../hooks/useApi";

export const ApiExample = () => {
  const { data, error, loading, post, get } = useApi();

  const handleConvert = async () => {
    try {
      await post(API_ENDPOINTS.CONVERT, { data: "test" });
    } catch (err) {
      console.error("Erro na conversão:", err);
    }
  };

  const handleHealthCheck = async () => {
    try {
      await get(API_ENDPOINTS.HEALTH);
    } catch (err) {
      console.error("Erro no health check:", err);
    }
  };

  return (
    <div>
      <h2>Exemplo de uso da API</h2>

      <div>
        <button onClick={handleConvert} disabled={loading}>
          {loading ? "Carregando..." : "Testar Convert"}
        </button>

        <button onClick={handleHealthCheck} disabled={loading}>
          {loading ? "Carregando..." : "Testar Health"}
        </button>
      </div>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>Erro: {error}</div>
      )}

      {data !== null && (
        <div
          style={{
            background: "#f4f4f4",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <strong>Resposta:</strong>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
