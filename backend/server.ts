import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'ws';
import { getInitialPatients, updatePatientData } from './src/utils';
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/patients', async (req, res) => {
  try {
    const patients = await getInitialPatients();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

const server = http.createServer(app);

const wss = new Server({ server, path: '/ws' });

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  ws.send(JSON.stringify({ message: 'Connected to WebSocket server' }));

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected from WebSocket');
  });
});

setInterval(() => {
  const updatedPatient = updatePatientData();
  if (updatedPatient) {
    const message = JSON.stringify(updatedPatient);
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  }
}, 5000);

server.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
  console.log(`WebSocket server is running on ws://localhost:${port}/ws`);
});
