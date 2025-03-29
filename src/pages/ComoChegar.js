// src/pages/ComoChegar.js
import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';

// Nós para a rota Carro/Moto (lado esquerdo)
const carroMotoNodes = [
  {
    id: '1',
    data: { label: 'Saia de Belém ou Castanhal\n(Carros/Motos)' },
    position: { x: 100, y: 0 },
    style: {
      background: '#FFF3E0', // tom de areia clara
      border: '2px solid #FF9800', // laranja vibrante
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '2',
    data: { label: 'Chegue em Igarapé Acu' },
    position: { x: 100, y: 100 },
    style: {
      background: '#FFF3E0',
      border: '2px solid #FF9800',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '3',
    data: { label: "Defina '40 do Mocoóca' no GPS" },
    position: { x: 100, y: 200 },
    style: {
      background: '#FFF3E0',
      border: '2px solid #FF9800',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '4',
    data: { label: 'Estacione em Mocoóca\n(estacionamento disponível)' },
    position: { x: 100, y: 300 },
    style: {
      background: '#FFF3E0',
      border: '2px solid #FF9800',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '5',
    data: { label: 'Atravessa de barco por 3 min\npara a vila de Fortalezinha' },
    position: { x: 100, y: 400 },
    style: {
      background: '#FFF3E0',
      border: '2px solid #FF9800',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
];

// Nós para a rota Van (lado direito)
const vanNodes = [
  {
    id: '7',
    data: { label: 'Em Belém, utilize van na BR 316\n(saídas às 7h e 10h)' },
    position: { x: 400, y: 0 },
    style: {
      background: '#E3F2FD', // tom de azul claro
      border: '2px solid #2196F3', // azul vibrante
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '8',
    data: { label: "Chegue diretamente ao '40 do Mocoóca'" },
    position: { x: 400, y: 100 },
    style: {
      background: '#E3F2FD',
      border: '2px solid #2196F3',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
  {
    id: '9',
    data: { label: 'Atravessa de barco para a vila de Fortalezinha' },
    position: { x: 400, y: 200 },
    style: {
      background: '#E3F2FD',
      border: '2px solid #2196F3',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
];

// Nó de destino comum
const destinoNode = [
  {
    id: '11',
    data: { label: 'Chegue ao hotel, seja feliz!' },
    position: { x: 250, y: 600 },
    style: {
      background: '#C8E6C9', // tom de verde pastel
      border: '2px solid #4CAF50',
      borderRadius: 10,
      fontSize: 14,
      padding: 12,
      textAlign: 'center',
    },
  },
];

// Combinando todos os nós
const initialNodes = [
  ...carroMotoNodes,
  ...vanNodes,
  ...destinoNode,
];

// Definindo as conexões com estilo moderno
const initialEdges = [
  // Rota Carro/Moto
  { id: 'e1', source: '1', target: '2', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e2', source: '2', target: '3', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e3', source: '3', target: '4', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e4', source: '4', target: '5', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e5', source: '5', target: '11', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  // Rota Van
  { id: 'e6', source: '7', target: '8', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
  { id: 'e7', source: '8', target: '9', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
  { id: 'e8', source: '9', target: '11', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
];

function ComoChegar() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    // Fundo com gradiente pra dar um clima praiano
    <div style={{ width: '100%', height: '800px', background: 'linear-gradient(135deg, #80DEEA, #B2EBF2)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        zoomOnScroll={true}
        zoomOnDoubleClick={true}
        zoomOnPinch={true}
        panOnDrag={true} // Permite arrastar o canvas, mas os nós permanecem fixos
        panOnScroll={false}
      >
        <Controls />
        <Background color="#B3E5FC" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default ComoChegar;
