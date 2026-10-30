import React, { useState } from 'react';
import { AppDock } from './components/layout/AppDock';
import { CaseHeader } from './components/layout/CaseHeader';
import { CaseNav } from './components/layout/CaseNav';
import { EvidenceView } from './features/evidence/EvidenceView';
import { CURRENT_CASE, MOCK_ARTICLES, MOCK_VIDEOS } from './services/caseService';
import { SuspenseLoader } from './components/common/SuspenseLoader';

export const App: React.FC = () => {
  const [activeDockTab, setActiveDockTab] = useState('Reports');
  const [selectedCaseSection, setSelectedCaseSection] = useState('evidence');
  const [bannerNotice, setBannerNotice] = useState<string | null>(null);

  const handleEmergencyTrigger = () => {
    setBannerNotice('🚨 ALERTA SOS ATIVADO: Telemetria e canal de rádio transmitindo para o despacho.');
    setTimeout(() => setBannerNotice(null), 5000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendForApproval = () => {
    setBannerNotice('✅ Relatório #P21_0001234 encaminhado para revisão do supervisor.');
    setTimeout(() => setBannerNotice(null), 4000);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-app)',
      }}
    >
      {/* Left/Center Main Operational Workspace */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Real-time Status Alert Banner (if triggered) */}
        {bannerNotice && (
          <div
            role="alert"
            style={{
              padding: '0.6rem 1.5rem',
              backgroundColor: 'rgba(239, 68, 68, 0.95)',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 100,
            }}
          >
            <span>{bannerNotice}</span>
            <button
              onClick={() => setBannerNotice(null)}
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem',
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
              }}
            >
              Fechar
            </button>
          </div>
        )}

        {/* Top Case Header */}
        <CaseHeader
          caseData={CURRENT_CASE}
          onBack={() => setBannerNotice('Retornando ao catálogo de casos...')}
          onPrint={handlePrint}
          onSendForApproval={handleSendForApproval}
        />

        {/* Body Area: Split between Case Navigation and Case Content View */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            height: 'calc(100% - 90px)',
            overflow: 'hidden',
          }}
        >
          {/* Inner Left Sub-navigation */}
          <CaseNav
            selectedSection={selectedCaseSection}
            onSelectSection={setSelectedCaseSection}
          />

          {/* Central Canvas View */}
          <SuspenseLoader>
            {selectedCaseSection === 'evidence' ? (
              <EvidenceView articles={MOCK_ARTICLES} videos={MOCK_VIDEOS} />
            ) : (
              <main
                role="main"
                style={{
                  flex: 1,
                  backgroundColor: 'var(--bg-surface)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textTransform: 'capitalize' }}>
                  {selectedCaseSection} Section
                </h2>
                <p style={{ fontSize: '0.9rem' }}>
                  Visualização da seção selecionada do relatório de incidente.
                </p>
                <button
                  onClick={() => setSelectedCaseSection('evidence')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--accent-gold)',
                    color: 'var(--accent-gold-text)',
                    borderRadius: '6px',
                    fontWeight: 600,
                  }}
                >
                  Voltar para Evidências (Evidence)
                </button>
              </main>
            )}
          </SuspenseLoader>
        </div>
      </div>

      {/* Rightmost Global Application Dock */}
      <AppDock
        activeTab={activeDockTab}
        onTabChange={setActiveDockTab}
        onEmergencyTrigger={handleEmergencyTrigger}
      />
    </div>
  );
};

export default App;
