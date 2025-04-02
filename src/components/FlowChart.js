// src/components/FlowChart.js
import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';

// Definindo os nós iniciais
const initialNodes = [
  { id: '1', data: { label: 'Saia de Belém ou Castanhal' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Chegue em Igarapé-açu' }, position: { x: 250, y: 100 } },
  { id: '3', data: { label: 'Defina Mocoóca no GPS' }, position: { x: 250, y: 200 } },
  { id: '4', data: { label: 'Opção 1: Carro/Moto' }, position: { x: 50, y: 300 } },
  { id: '5', data: { label: 'Estacione em Mocoóca (diárias populares)' }, position: { x: 50, y: 400 } },
  { id: '6', data: { label: 'Travessia de barco (3 min)' }, position: { x: 50, y: 500 } },
  { id: '7', data: { label: 'Fortalezinha: hospedagem e restaurantes\n(alguns aceitam cartão/PIX; leve dinheiro vivo)' }, position: { x: 50, y: 600 } },
  { id: '8', data: { label: 'Opção 2: Micro-ônibus/Van' }, position: { x: 450, y: 300 } },
  { id: '9', data: { label: 'Saídas de Belém: 5h, 6h, 7h\nou van até Igarapé-açu' }, position: { x: 450, y: 400 } },
  { id: '10', data: { label: 'Ponto exclusivo para Mocoóca em Igarapé-açu' }, position: { x: 450, y: 500 } },
  { id: '11', data: { label: 'Lembrete: Respeite moradores, animais e preserve o meio ambiente' }, position: { x: 250, y: 700 } },
];

// Definindo as arestas iniciais
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e3-8', source: '3', target: '8', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },
  { id: 'e8-9', source: '8', target: '9', animated: true },
  { id: 'e9-10', source: '9', target: '10', animated: true },
  { id: 'e7-11', source: '7', target: '11', animated: true },
  { id: 'e10-11', source: '10', target: '11', animated: true },
];

function FlowChart() {
  // Estados controlados para nós e arestas
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Callback para novas conexões (edges)
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: '800px', background: '#f0f0f0' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default FlowChart;
