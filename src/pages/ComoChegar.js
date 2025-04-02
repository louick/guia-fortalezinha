// src/pages/ComoChegar.js
import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';
import { useTranslation } from 'react-i18next';

// Conexões permanecem fixas
const initialEdges = [
  { id: 'e1', source: '1', target: '2', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e2', source: '2', target: '3', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e3', source: '3', target: '4', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e4', source: '4', target: '5', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e5', source: '5', target: '11', animated: true, style: { stroke: '#FF9800', strokeWidth: 3 } },
  { id: 'e6', source: '7', target: '8', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
  { id: 'e7', source: '8', target: '9', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
  { id: 'e8', source: '9', target: '11', animated: true, style: { stroke: '#2196F3', strokeWidth: 3 } },
];

function ComoChegar() {
  const { t } = useTranslation();

  // Função para gerar os nós dinamicamente com base na tradução atual
  const generateNodes = () => {
    // Nós para a rota Carro/Moto (lado esquerdo)
    const carroMotoNodes = [
      {
        id: '1',
        data: { label: t('carroMoto_label1') },
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
        data: { label: t('carroMoto_label2') },
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
        data: { label: t('carroMoto_label3') },
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
        data: { label: t('carroMoto_label4') },
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
        data: { label: t('carroMoto_label5') },
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
        data: { label: t('van_label1') },
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
        data: { label: t('van_label2') },
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
        data: { label: t('van_label3') },
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
        data: { label: t('destino_label') },
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

    return [...carroMotoNodes, ...vanNodes, ...destinoNode];
  };

  // Cria os nós com base na tradução atual
  const [nodes, setNodes, onNodesChange] = useNodesState(generateNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Atualiza os nós sempre que a tradução (t) mudar
  useEffect(() => {
    setNodes(generateNodes());
  }, [t, setNodes]);

  return (
    <div style={{ width: '100%', height: '800px', background: 'linear-gradient(135deg, #80DEEA, #B2EBF2)' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        zoomOnScroll={false}
        zoomOnDoubleClick={true}
        zoomOnPinch={true}
        panOnDrag={true}
        panOnScroll={false}
      >
        <Controls />
        <Background color="#B3E5FC" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default ComoChegar;
