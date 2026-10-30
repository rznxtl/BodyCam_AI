import React from 'react';
import { Video, AlertTriangle, Cpu, Settings, FileText, Radio } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    { label: 'Feed ao Vivo', icon: Video, active: true },
    { label: 'Alertas de IA', icon: AlertTriangle, count: 3 },
    { label: 'Câmeras Conectadas', icon: Radio, count: 12 },
    { label: 'Modelos de Visão', icon: Cpu },
    { label: 'Relatórios & Logs', icon: FileText },
    { label: 'Configurações', icon: Settings },
  ];

  return (
    <aside
      style={{
        width: '240px',
        backgroundColor: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border-color)',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', padding: '0 0.75rem 0.5rem', textTransform: 'uppercase' }}>
        Navegação Principal
      </div>

      {menuItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <button
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              borderRadius: '8px',
              backgroundColor: item.active ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              color: item.active ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: item.active ? 600 : 500,
              fontSize: '0.9rem',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Icon size={18} />
              <span>{item.label}</span>
            </div>
            {item.count !== undefined && (
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '10px',
                  backgroundColor: item.active ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  color: item.active ? '#ffffff' : 'var(--text-secondary)',
                }}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}

      <div style={{ marginTop: 'auto', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          Serviço de IA Online
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
          YOLOv8 & ResNet ativos a 42ms
        </p>
      </div>
    </aside>
  );
};
