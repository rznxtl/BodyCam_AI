import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'standby' | 'offline' | 'high' | 'medium' | 'low';
  text?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, text }) => {
  const getBadgeClass = () => {
    switch (status) {
      case 'active':
      case 'low':
        return 'badge-success';
      case 'standby':
      case 'medium':
        return 'badge-warning';
      case 'offline':
      case 'high':
        return 'badge-danger';
      default:
        return 'badge-warning';
    }
  };

  const getLabel = () => {
    if (text) return text;
    switch (status) {
      case 'active':
        return 'Online / Ativo';
      case 'standby':
        return 'Standby';
      case 'offline':
        return 'Offline';
      case 'high':
        return 'Crítico';
      case 'medium':
        return 'Médio';
      case 'low':
        return 'Baixo';
      default:
        return status;
    }
  };

  return <span className={`badge ${getBadgeClass()}`}>{getLabel()}</span>;
};

