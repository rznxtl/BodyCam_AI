import React from 'react';
import { X, FileText, ShieldAlert, CheckCircle, Volume2 } from 'lucide-react';
import { BodyCamVideo } from '../../types/case';

interface TranscriptionDrawerProps {
  video: BodyCamVideo;
  isOpen: boolean;
  onClose: () => void;
}

export const TranscriptionDrawer: React.FC<TranscriptionDrawerProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="transcription-title"
      style={{
        position: 'fixed',
        top: 0,
        right: '76px', // Outside the AppDock
        bottom: 0,
        width: '440px',
        backgroundColor: '#16171d',
        borderLeft: '1px solid var(--border-medium)',
        boxShadow: '-8px 0 24px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 50,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1b1c22',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <FileText size={20} color="var(--accent-cyan)" />
          <div>
            <h2 id="transcription-title" style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>
              Audio Transcription & AI Telemetry
            </h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
              Camera {video.cameraNumber} • {video.officerName}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Transcription"
          style={{
            color: 'var(--text-muted)',
            padding: '0.35rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* AI Intelligence Detections Banner */}
      <div
        style={{
          padding: '1rem 1.5rem',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderBottom: '1px solid rgba(239, 68, 68, 0.25)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ShieldAlert size={16} color="var(--accent-red)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fca5a5', textTransform: 'uppercase' }}>
            Eventos Críticos Detectados por IA
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {video.aiDetections.map((detection, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: '0.35rem 0.6rem',
                borderRadius: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
                  {detection.time}
                </span>
                <span>{detection.label}</span>
              </div>
              <span style={{ color: '#10b981', fontWeight: 600 }}>
                {(detection.confidence * 100).toFixed(0)}% precisão
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Dialogue / Transcription */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Transcrição Sincronizada (STT Whispers / Axon Diarization)
        </div>

        {video.transcription.map((entry, idx) => {
          const isOfficer = entry.speaker.includes('Officer');

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                padding: '0.75rem',
                borderRadius: '6px',
                backgroundColor: entry.isFlagged
                  ? 'rgba(245, 158, 11, 0.1)'
                  : isOfficer
                  ? 'rgba(59, 130, 246, 0.08)'
                  : 'rgba(255, 255, 255, 0.03)',
                borderLeft: entry.isFlagged
                  ? '3px solid var(--accent-gold)'
                  : isOfficer
                  ? '3px solid var(--accent-cyan)'
                  : '3px solid var(--border-medium)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Volume2 size={13} color="var(--text-muted)" />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isOfficer ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    }}
                  >
                    {entry.speaker}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {entry.timestamp}
                </span>
              </div>

              <p style={{ fontSize: '0.82rem', lineHeight: '1.4', color: 'var(--text-primary)', margin: 0 }}>
                {entry.text}
              </p>

              {entry.isFlagged && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.25rem', fontSize: '0.7rem', color: 'var(--accent-gold)' }}>
                  <CheckCircle size={12} />
                  <span>Sinalizado como evidência verbal para narrativa</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: '#1b1c22',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Duração Total: {video.fullClipTime}
        </span>
        <button
          onClick={onClose}
          style={{
            padding: '0.4rem 0.9rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
