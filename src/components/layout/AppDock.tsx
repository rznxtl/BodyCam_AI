import React from 'react';
import { Shield, List, Search, FileText, Navigation } from 'lucide-react';

interface AppDockProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onEmergencyTrigger?: () => void;
}

export const AppDock: React.FC<AppDockProps> = ({
  activeTab = 'Reports',
  onTabChange,
  onEmergencyTrigger,
}) => {
  const dockItems = [
    { id: 'Units', label: 'Units', icon: Shield },
    { id: 'Incidents', label: 'Incidents', icon: List },
    { id: 'Records', label: 'Records', icon: Search },
    { id: 'Reports', label: 'Reports', icon: FileText },
    { id: 'Map', label: 'Map', icon: Navigation },
  ];

  return (
    <aside
      role="navigation"
      aria-label="Primary Application Navigation"
      style={{
        width: '76px',
        backgroundColor: 'var(--bg-dock)',
        borderLeft: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem 0 1.25rem',
        userSelect: 'none',
        flexShrink: 0,
        height: '100%',
      }}
    >
      {/* SOS Emergency Button */}
      <button
        onClick={onEmergencyTrigger}
        aria-label="Emergency SOS Alert"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          color: '#111215',
          fontWeight: 900,
          fontSize: '0.82rem',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(255, 255, 255, 0.25)',
          marginBottom: '2rem',
          transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        }}
        title="Trigger Emergency SOS"
      >
        SOS
      </button>

      {/* Main Navigation Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 0',
                width: '100%',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                backgroundColor: 'transparent',
                transition: 'color 0.15s ease',
              }}
            >
              {/* Active Gold Indicator Bar on Left */}
              {isActive && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '12%',
                    bottom: '12%',
                    width: '3.5px',
                    backgroundColor: 'var(--accent-gold)',
                    borderRadius: '0 2px 2px 0',
                  }}
                />
              )}

              <Icon size={22} strokeWidth={isActive ? 2.2 : 1.7} />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: isActive ? 600 : 400,
                  marginTop: '0.35rem',
                  letterSpacing: '0.02em',
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Camera / Record Emergency Trigger Button */}
      <div style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={onEmergencyTrigger}
          aria-label="Emergency Record Camera Toggle"
          style={{
            width: '54px',
            height: '54px',
            backgroundColor: 'var(--accent-red)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.15s ease',
          }}
          title="Activate Live Event Recording"
        >
          {/* Authentic white camera ring / aperture icon */}
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: '4px solid #ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
          </div>
        </button>
      </div>
    </aside>
  );
};
