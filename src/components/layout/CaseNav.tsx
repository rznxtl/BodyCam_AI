import React from 'react';

interface CaseNavProps {
  selectedSection: string;
  onSelectSection: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  count?: number;
  hasAlert?: boolean;
}

export const CaseNav: React.FC<CaseNavProps> = ({
  selectedSection,
  onSelectSection,
}) => {
  const sections: NavItem[] = [
    { id: 'basic', label: 'Basic Information' },
    { id: 'people', label: 'People Involved', count: 2 },
    { id: 'narrative', label: 'Narrative', count: 1 },
    { id: 'property', label: 'Property' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'photos', label: 'Photos' },
    { id: 'follow-ups', label: 'Follow-Ups' },
    { id: 'complaints', label: 'Complaints' },
    { id: 'evidence', label: 'Evidence', count: 3 },
    { id: 'forms', label: 'Forms', count: 4, hasAlert: true },
    { id: 'cfs', label: 'CFS Information' },
    { id: 'nibrs', label: 'NIBRS' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Case Sections"
      style={{
        width: '210px',
        backgroundColor: 'var(--bg-sidebar)',
        borderRight: '1px solid var(--border-subtle)',
        padding: '1.25rem 0.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        flexShrink: 0,
        height: '100%',
        overflowY: 'auto',
      }}
    >
      {sections.map((item) => {
        const isSelected = selectedSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectSection(item.id)}
            aria-current={isSelected ? 'true' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.6rem 0.85rem',
              borderRadius: '6px',
              backgroundColor: isSelected ? 'var(--accent-gold)' : 'transparent',
              color: isSelected ? 'var(--accent-gold-text)' : 'var(--text-secondary)',
              fontWeight: isSelected ? 700 : 500,
              fontSize: '0.88rem',
              textAlign: 'left',
              width: '100%',
              position: 'relative',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Notification Red Dot */}
              {item.hasAlert && !isSelected && (
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-red)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                  aria-label="Notification alert"
                />
              )}

              <span>{item.label}</span>
            </div>

            {/* Badge Count */}
            {item.count !== undefined && (
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.1rem 0.45rem',
                  borderRadius: '4px',
                  backgroundColor: isSelected
                    ? 'rgba(0, 0, 0, 0.85)'
                    : 'rgba(229, 168, 59, 0.2)',
                  color: isSelected ? 'var(--accent-gold)' : 'var(--accent-gold)',
                  border: isSelected ? 'none' : '1px solid rgba(229, 168, 59, 0.4)',
                  lineHeight: '1.2',
                }}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

