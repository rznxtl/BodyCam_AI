import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { BodyCamVideo } from '../../types/case';

interface BodyCamPlayerProps {
  video: BodyCamVideo;
  onOpenTranscription: () => void;
}

export const BodyCamPlayer: React.FC<BodyCamPlayerProps> = ({
  video,
  onOpenTranscription,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'flex-start',
        marginTop: '0.75rem',
      }}
    >
      {/* Left Column: Metadata */}
      <div
        style={{
          width: '160px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
          flexShrink: 0,
        }}
      >
        <div>
          <h4
            style={{
              fontSize: '0.98rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '0.01em',
            }}
          >
            Camera {video.cameraNumber}
          </h4>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Officer</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            {video.officerName}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Date</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500 }}>
            {video.date}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pre-Record</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
            {video.preRecordTime}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Incident Clip</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
            {video.incidentClipTime}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Full Clip</div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>
            {video.fullClipTime}
          </div>
        </div>
      </div>

      {/* Right Column: Video Canvas & Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {/* Video Viewport */}
        <div
          role="region"
          aria-label={`Body camera footage from ${video.officerName}`}
          style={{
            width: '450px',
            height: '255px',
            backgroundColor: '#0a0b0e',
            borderRadius: '6px',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Authentic Bodycam Scene Artwork matching the Reference Photo */}
          <svg
            viewBox="0 0 450 255"
            width="100%"
            height="100%"
            style={{ display: 'block', objectFit: 'cover' }}
          >
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87ceeb" />
                <stop offset="60%" stopColor="#b0e0e6" />
                <stop offset="100%" stopColor="#e0f2f7" />
              </linearGradient>
              <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8c7355" />
                <stop offset="100%" stopColor="#6e5a42" />
              </linearGradient>
              <linearGradient id="truckGrad" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect x="0" y="0" width="450" height="120" fill="url(#skyGrad)" />

            {/* Hotel / Commercial Building in background */}
            <rect x="180" y="30" width="270" height="130" fill="url(#buildingGrad)" />
            {/* Windows */}
            <rect x="230" y="45" width="45" height="40" fill="#2d2822" />
            <rect x="240" y="55" width="25" height="25" fill="#1b1712" />
            <rect x="340" y="45" width="45" height="40" fill="#2d2822" />
            <rect x="350" y="55" width="25" height="25" fill="#1b1712" />
            {/* Entrance Door */}
            <rect x="235" y="105" width="55" height="55" fill="#1e1a15" />
            <rect x="240" y="110" width="20" height="45" fill="#443b32" />
            <rect x="265" y="110" width="20" height="45" fill="#443b32" />

            {/* Bushes & Landscaping */}
            <path d="M160 145 Q190 125 220 145 Q250 130 280 145" fill="#2d4a2d" />
            <path d="M360 145 Q390 120 420 145 Q440 135 450 145" fill="#283d28" />

            {/* Sidewalk Concrete */}
            <polygon points="120,150 450,150 450,175 90,175" fill="#a8a29e" />
            {/* Grass strip */}
            <polygon points="135,150 220,150 200,165 125,165" fill="#4ade80" opacity="0.6" />

            {/* Asphalt Parking Lot */}
            <polygon points="0,165 450,165 450,255 0,255" fill="#262626" />
            {/* White Parking Stall Lines */}
            <line x1="280" y1="175" x2="350" y2="255" stroke="#f1f5f9" strokeWidth="4" />
            <line x1="170" y1="175" x2="190" y2="255" stroke="#f1f5f9" strokeWidth="4" />

            {/* Silver Pickup Truck / SUV */}
            <path
              d="M100 170 Q130 115 170 115 L225 120 L230 180 L80 180 Z"
              fill="url(#truckGrad)"
            />
            {/* Truck Windshield / Window */}
            <path d="M125 160 Q145 125 170 125 L210 127 L210 160 Z" fill="#1e293b" opacity="0.85" />
            {/* Truck Rear & Wheel */}
            <circle cx="115" cy="180" r="18" fill="#18181b" />
            <circle cx="115" cy="180" r="10" fill="#71717a" />
            <circle cx="195" cy="180" r="18" fill="#18181b" />
            <circle cx="195" cy="180" r="10" fill="#71717a" />

            {/* Subject (Suspect) walking toward building */}
            {/* Black Cap */}
            <ellipse cx="320" cy="98" rx="8" ry="4" fill="#09090b" />
            {/* Head */}
            <circle cx="320" cy="104" r="6" fill="#d4a373" />
            {/* Dark Jacket / Torso */}
            <path d="M312 110 L328 110 L331 142 L309 142 Z" fill="#18181b" />
            {/* Dark Shorts */}
            <rect x="312" y="142" width="16" height="15" fill="#27272a" />
            {/* Legs */}
            <line x1="316" y1="157" x2="314" y2="182" stroke="#d4a373" strokeWidth="3.5" />
            <line x1="324" y1="157" x2="328" y2="180" stroke="#d4a373" strokeWidth="3.5" />
            {/* Shoes */}
            <ellipse cx="313" cy="183" rx="4" ry="2" fill="#000" />
            <ellipse cx="329" cy="181" rx="4" ry="2" fill="#000" />

            {/* Officer in Foreground (Axon Viewpoint) */}
            {/* Police Dark Blue Uniform Shoulder & Arm */}
            <path d="M0 255 L0 165 Q40 170 65 195 L65 255 Z" fill="#0f172a" />
            {/* Police Shoulder Patch / Badge */}
            <polygon points="18,185 30,180 42,185 30,205" fill="#f59e0b" />
            <circle cx="30" cy="192" r="4" fill="#0f172a" />
            {/* Duty Belt / Equipment */}
            <rect x="0" y="240" width="70" height="15" fill="#18181b" />
            <rect x="35" y="235" width="12" height="15" fill="#27272a" />
          </svg>

          {/* Bodycam HUD Overlay */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              textShadow: '0 1px 3px rgba(0,0,0,0.9)',
              letterSpacing: '0.04em',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: isPlaying ? 'var(--accent-red)' : '#10b981',
                boxShadow: isPlaying ? '0 0 6px #ef4444' : 'none',
              }}
            />
            <span>{isPlaying ? 'LIVE STREAM' : 'AXON BODY 3'}</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>| CAM #{video.cameraNumber.replace('#', '')}</span>
          </div>

          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '10px',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              textShadow: '0 1px 3px rgba(0,0,0,0.9)',
            }}
          >
            2021-04-12 14:32:08 UTC
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '10px',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              textShadow: '0 1px 3px rgba(0,0,0,0.9)',
              opacity: 0.85,
            }}
          >
            LAT 33.4484 N • LON 112.0740 W
          </div>

          {/* Centered Circular Play Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause bodycam footage' : 'Play bodycam footage'}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              backdropFilter: 'blur(4px)',
              border: '2px solid rgba(255, 255, 255, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
          >
            {isPlaying ? (
              <Pause size={24} fill="#ffffff" />
            ) : (
              <Play size={24} fill="#ffffff" style={{ marginLeft: '3px' }} />
            )}
          </button>
        </div>

        {/* View Transcription Link underneath video */}
        <div>
          <button
            onClick={onOpenTranscription}
            aria-label="Open Transcription Dialog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 500,
              backgroundColor: 'transparent',
              padding: '0.2rem 0',
              transition: 'color 0.15s ease',
            }}
          >
            <span>View Transcription</span>
          </button>
        </div>
      </div>
    </div>
  );
};
