package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/szriru/realtime-chatapp-golang-reactjs/backend/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)
	})
}

func main() {
	port := os.Getenv("PORT")
	fmt.Println("Reatime Chat App v0.01")
	log.Println("Listening for " + port)
	setupRoutes()
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
