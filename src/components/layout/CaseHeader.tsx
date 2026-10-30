import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { CaseSummary } from '../../types/case';

interface CaseHeaderProps {
  caseData: CaseSummary;
  onBack?: () => void;
  onPrint?: () => void;
  onSendForApproval?: () => void;
}

export const CaseHeader: React.FC<CaseHeaderProps> = ({
  caseData,
  onBack,
  onPrint,
  onSendForApproval,
}) => {
  return (
    <header
      role="banner"
      style={{
        padding: '1rem 1.75rem 0.85rem',
        backgroundColor: 'var(--bg-app)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Top Row: Case Title, Tag, and Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.65rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onBack}
            aria-label="Back to Cases List"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              padding: '0.25rem',
              borderRadius: '4px',
              transition: 'background-color 0.15s ease',
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <h1
            style={{
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            Reporting Case <span style={{ fontFamily: 'var(--font-mono)' }}>{caseData.caseNumber}</span>
          </h1>

          <span
            style={{
              backgroundColor: 'var(--accent-cyan)',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
            }}
          >
            {caseData.status}
          </span>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onPrint}
            aria-label="Print Case Report"
            style={{
              color: 'var(--text-primary)',
              backgroundColor: 'transparent',
              fontSize: '0.85rem',
              fontWeight: 500,
              padding: '0.45rem 1rem',
              borderRadius: '6px',
              transition: 'background-color 0.15s ease',
            }}
          >
            Print
          </button>

          <button
            onClick={onSendForApproval}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '0.45rem 1.15rem',
              borderRadius: '6px',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
          >
            Send for Approval
          </button>
        </div>
      </div>

      {/* Bottom Metadata Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          paddingLeft: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ color: 'var(--text-muted)' }}>Reported by: </span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {caseData.reportedBy}
            </strong>
          </div>

          <div>
            <span style={{ color: 'var(--text-muted)' }}>Approval Status: </span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {caseData.approvalStatus}
            </strong>
          </div>

          <div>
            <span style={{ color: 'var(--text-muted)' }}>Forms needing approval: </span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {caseData.formsNeedingApproval}
            </strong>
          </div>

          <div>
            <span style={{ color: 'var(--text-muted)' }}>NIBRS Errors: </span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {caseData.nibrsErrors}
            </strong>
          </div>
        </div>

        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Last updated on {caseData.lastUpdated}
        </div>
      </div>
    </header>
  );
};
