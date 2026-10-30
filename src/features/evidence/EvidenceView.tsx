import React, { useState } from 'react';
import { Plus, ArrowUpDown, ChevronUp, ChevronDown } from 'lucide-react';
import { EvidenceArticle, BodyCamVideo } from '../../types/case';
import { BodyCamPlayer } from './BodyCamPlayer';
import { TranscriptionDrawer } from './TranscriptionDrawer';

interface EvidenceViewProps {
  articles: EvidenceArticle[];
  videos: BodyCamVideo[];
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({
  articles,
  videos,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<BodyCamVideo | null>(null);
  const [isTranscriptionOpen, setIsTranscriptionOpen] = useState(false);

  const handleOpenTranscription = (video: BodyCamVideo) => {
    setSelectedVideo(video);
    setIsTranscriptionOpen(true);
  };

  return (
    <main
      role="main"
      style={{
        flex: 1,
        backgroundColor: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Evidence Section Header with Topographic Contour Lines */}
      <div
        style={{
          position: 'relative',
          padding: '1rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Topographic Vector Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '120px',
            right: '180px',
            bottom: 0,
            pointerEvents: 'none',
            opacity: 0.18,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <svg width="100%" height="100%" viewBox="0 0 600 60" preserveAspectRatio="none">
            <path
              d="M0 30 Q 150 10, 300 35 T 600 25"
              fill="none"
              stroke="#e5a83b"
              strokeWidth="1.5"
            />
            <path
              d="M0 15 Q 120 45, 280 15 T 600 40"
              fill="none"
              stroke="#e5a83b"
              strokeWidth="1.2"
            />
            <path
              d="M0 45 Q 180 5, 340 45 T 600 15"
              fill="none"
              stroke="#e5a83b"
              strokeWidth="1.2"
            />
            <path
              d="M0 5 Q 90 25, 220 5 T 600 50"
              fill="none"
              stroke="#e5a83b"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Title and Count */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', zIndex: 1 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>
            Evidence
          </h2>
          <span
            style={{
              backgroundColor: 'var(--accent-gold)',
              color: 'var(--accent-gold-text)',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '0.1rem 0.5rem',
              borderRadius: '4px',
              lineHeight: '1.2',
            }}
          >
            {articles.length + (videos.length > 0 ? 2 : 0)}
          </span>
        </div>

        {/* Add Evidence Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontWeight: 500,
            padding: '0.45rem 1rem',
            borderRadius: '6px',
            zIndex: 1,
            transition: 'background-color 0.15s ease, border-color 0.15s ease',
          }}
        >
          <Plus size={16} />
          <span>Add Evidence</span>
        </button>
      </div>

      {/* Main Scrollable Content Canvas */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.75rem 2rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Section 1: Articles Table */}
        <section aria-labelledby="articles-heading">
          <h3
            id="articles-heading"
            style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Articles ({articles.length})
          </h3>

          <div
            style={{
              width: '100%',
              overflowX: 'auto',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.86rem',
              }}
            >
              <thead>
                <tr style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
                  <th style={{ padding: '0.65rem 1rem 0.65rem 0', fontWeight: 500, width: '90px' }}>
                    Thumbnail
                  </th>
                  <th style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Item #</span>
                      <ArrowUpDown size={14} color="var(--text-muted)" />
                    </div>
                  </th>
                  <th style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>Category</th>
                  <th style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>Type</th>
                  <th style={{ padding: '0.65rem 1rem', fontWeight: 500 }}>Location</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {/* Firearm Thumbnail */}
                    <td style={{ padding: '0.75rem 1rem 0.75rem 0' }}>
                      <div
                        style={{
                          width: '64px',
                          height: '42px',
                          backgroundColor: '#121317',
                          borderRadius: '4px',
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <svg viewBox="0 0 70 45" width="56" height="36">
                          {/* Pistol Slide */}
                          <rect x="14" y="11" width="44" height="11" fill="#475569" rx="1.5" />
                          <rect x="42" y="14" width="7" height="3" fill="#1e293b" />
                          {/* Barrel */}
                          <rect x="9" y="14" width="6" height="5" fill="#334155" />
                          {/* Grip */}
                          <polygon points="38,22 47,22 41,38 31,38" fill="#1e293b" />
                          <line x1="34" y1="26" x2="43" y2="26" stroke="#475569" strokeWidth="1" />
                          <line x1="33" y1="30" x2="41" y2="30" stroke="#475569" strokeWidth="1" />
                          {/* Trigger Guard */}
                          <path d="M26 22 L26 29 L33 29" fill="none" stroke="#475569" strokeWidth="1.5" />
                          <path d="M29 23 Q28 26 30 27" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </td>

                    {/* Item Number */}
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                      {item.itemNumber}
                    </td>

                    {/* Category */}
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)' }}>
                      {item.category}
                    </td>

                    {/* Status */}
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)' }}>
                      {item.status}
                    </td>

                    {/* Type */}
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)' }}>
                      {item.type}
                    </td>

                    {/* Location */}
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-primary)' }}>
                      {item.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Body Camera Videos */}
        <section aria-labelledby="videos-heading">
          <h3
            id="videos-heading"
            style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Body Camera Videos ({videos.length > 0 ? 2 : 0})
          </h3>

          {videos.map((video) => (
            <BodyCamPlayer
              key={video.id}
              video={video}
              onOpenTranscription={() => handleOpenTranscription(video)}
            />
          ))}
        </section>
      </div>

      {/* Right-edge Scroll Controls */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          right: '8px',
          bottom: '20px',
          width: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <button
          aria-label="Scroll Up"
          style={{
            pointerEvents: 'auto',
            color: 'var(--text-muted)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronUp size={20} />
        </button>

        <button
          aria-label="Scroll Down"
          style={{
            pointerEvents: 'auto',
            color: 'var(--text-muted)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Transcription & Telemetry Slide-out Drawer */}
      {selectedVideo && (
        <TranscriptionDrawer
          video={selectedVideo}
          isOpen={isTranscriptionOpen}
          onClose={() => setIsTranscriptionOpen(false)}
        />
      )}
    </main>
  );
};

