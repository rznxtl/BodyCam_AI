import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import { BodyCamDevice, DetectionAlert, SystemStats } from '../types';
import { StatusBadge } from '../components/common/StatusBadge';
import { Video, ShieldAlert, Battery, Wifi, Activity, CheckCircle, Clock } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [devices, setDevices] = useState<BodyCamDevice[]>([]);
  const [alerts, setAlerts] = useState<DetectionAlert[]>([]);
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [devs, alrts, st] = await Promise.all([
          apiService.getDevices(),
          apiService.getAlerts(),
          apiService.getStats(),
        ]);
        setDevices(devs);
        setAlerts(alrts);
        setStats(st);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Carregando dados das câmeras e telemetria de IA...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Cards de Métricas Principais */}
      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem' }}>Câmeras em Operação</span>
              <Video size={18} color="#3b82f6" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.activeCameras}</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>● Transmissão ativa</div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem' }}>Detecções de Risco Hoje</span>
              <ShieldAlert size={18} color="#ef4444" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.totalAlertsToday}</div>
            <div style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }}>+3 nos últimos 15 min</div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem' }}>Horas de Vídeo Analisadas</span>
              <Clock size={18} color="#f59e0b" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.processedHours} h</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Taxa de compressão H.265</div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem' }}>Latência Média da IA</span>
              <Activity size={18} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{stats.aiLatencyMs} ms</div>
            <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>Inferência em tempo real</div>
          </div>
        </div>
      )}

      {/* Grid Principal: Transmissões e Alertas */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Painel de Feeds de Câmeras */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Transmissões Ativas (BodyCams)</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{devices.length} dispositivos cadastrados</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {devices.map((cam) => (
              <div key={cam.id} className="card" style={{ padding: '1rem' }}>
                {/* Janela de Simulação de Vídeo */}
                <div
                  style={{
                    height: '160px',
                    backgroundColor: '#020617',
                    borderRadius: '8px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid #1e293b',
                  }}
                >
                  {cam.isStreaming ? (
                    <>
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          color: '#fff',
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                        REC ● LIVE
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '10px',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          color: '#fff',
                        }}
                      >
                        1080p @ 30fps
                      </div>
                      <Video size={40} color="#334155" />
                    </>
                  ) : (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                      Transmissão Indisponível ({cam.status})
                    </div>
                  )}
                </div>

                {/* Detalhes do Dispositivo */}
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600 }}>{cam.officerName}</span>
                    <StatusBadge status={cam.status} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {cam.badgeNumber} • {cam.location}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Battery size={14} color={cam.batteryLevel > 20 ? '#10b981' : '#ef4444'} />
                      <span>{cam.batteryLevel}%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Wifi size={14} color="#3b82f6" />
                      <span>{cam.lastSync}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painel de Alertas de IA em Tempo Real */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Alertas de Detecção</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-danger)' }}>IA Ativa</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="card"
                style={{
                  padding: '1rem',
                  borderLeft: alert.severity === 'high' ? '4px solid #ef4444' : '4px solid #f59e0b',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      {alert.type === 'weapon_detected' && '⚠️ Objeto Suspeito / Arma'}
                      {alert.type === 'license_plate' && '🚗 Placa Reconhecida'}
                      {alert.type === 'unusual_motion' && '🏃 Movimento Suspeito'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      Origem: {alert.officerName} ({alert.deviceId})
                    </div>
                  </div>
                  <StatusBadge status={alert.severity} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Precisão da IA: {(alert.confidence * 100).toFixed(0)}%</span>
                  <span style={{ color: 'var(--text-muted)' }}>{alert.timestamp}</span>
                </div>

                {!alert.resolved ? (
                  <button
                    onClick={() => {
                      setAlerts((prev) =>
                        prev.map((a) => (a.id === alert.id ? { ...a, resolved: true } : a))
                      );
                    }}
                    style={{
                      marginTop: '0.75rem',
                      width: '100%',
                      padding: '0.4rem',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    <CheckCircle size={14} color="#10b981" />
                    Confirmar Análise
                  </button>
                ) : (
                  <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    <CheckCircle size={14} color="#10b981" />
                    Ocorrência revisada pelo operador
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
