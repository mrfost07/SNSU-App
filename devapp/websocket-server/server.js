// server.js
const WebSocket = require('ws');

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });
console.log('✅ WebSocket server is running at ws://localhost:8080');

wss.on('connection', (ws) => {
  console.log('🔌 A client connected');

  // ✅ Send welcome message right away
  ws.send('👋 Hello from WebSocket server!');

  // ✅ Handle incoming messages from client
  ws.on('message', (message) => {
    console.log('📨 Received:', message.toString());

    // Echo message back to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Echo: ${message}`);
      }
    });
  });

  // ✅ Handle client disconnect
  ws.on('close', () => {
    console.log('❌ Client disconnected');
  });
});
