package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func enableCORS(w *http.ResponseWriter, req *http.Request){
    (*w).Header().Set("Access-Control-Allow-Origin", "*")
    (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    (*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

type Response struct {
	OK bool `json:"ok"`
}


func handleConvert(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	response := Response{OK: true}

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
}

func handleHealth(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{"status": "healthy"}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/api/convert", handleConvert)
	http.HandleFunc("/api/health", handleHealth)

	port := ":8080"
	fmt.Printf("Servidor rodando na porta %s\n", port)
	fmt.Println("Endpoints disponíveis:")
	fmt.Println("  POST /api/convert - Endpoint principal")
	fmt.Println("  GET  /api/health  - Health check")
	
	log.Fatal(http.ListenAndServe(port, nil))
}
