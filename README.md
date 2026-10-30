# BodyCam AI - Incident Reporting & Evidence System (Axon RMS Standard)

Sistema de gerenciamento de incidentes e análise de evidências para câmeras corporais (**BodyWorn Cameras / RMS**), desenvolvido em **React**, **TypeScript** e **Vite**, baseado nos padrões táticos da polícia e nas diretrizes de alta fidelidade presentes na pasta `Skills/`.

---

## 📸 Referência da Interface

A interface reproduz com total fidelidade o console operacional de gerenciamento de casos de viatura/MDT:

1. **Dock Global Lateral Direito (`AppDock.tsx`)**:
   - Botão de emergência `SOS` no topo.
   - Ícones de navegação rápida: `Units`, `Incidents`, `Records`, `Reports` (com marcador ativo dourado) e `Map`.
   - Botão de acionamento rápido de gravação / câmera em vermelho tático (`#e53935`).

2. **Cabeçalho de Caso (`CaseHeader.tsx`)**:
   - Identificação do caso: `Reporting Case #P21_0001234` com tag `[Criminal]`.
   - Metadados: `Reported by: Officer Shane Kelly`, `Approval Status: Not yet submitted`, `Forms needing approval: 4`, `NIBRS Errors: 0`.
   - Ações: `Print` e `Send for Approval`.

3. **Navegação Seccional do Caso (`CaseNav.tsx`)**:
   - Categorias operacionais: `Basic Information`, `People Involved [2]`, `Narrative [1]`, `Property`, `Vehicles`, `Photos`, `Follow-Ups`, `Complaints`, **`Evidence [3]`** (seleção ativa destacada em dourado), `Forms [4]` (com alerta vermelho), `CFS Information` e `NIBRS`.

4. **Visualizador de Evidências (`EvidenceView.tsx` & `BodyCamPlayer.tsx`)**:
   - Banner de evidências com linhas de contorno topográficas sutis e botão `+ Add Evidence`.
   - **Tabela de Artigos**: Listagem de itens apreendidos com miniatura do armamento (`P3247277282`, Categoria *Evidence*, Status *Collected*, Tipo *Firearm*, Localização *Locker 12*).
   - **Player da BodyCam**: Reprodução do vídeo da câmera `#5650A` (Oficial Shane Kelly) com metadados táticos (*Pre-Record*, *Incident Clip*, *Full Clip*), overlay HUD e botão interativo para **Visualização da Transcrição** (*Speech-to-Text* e detecções de IA).

---

## 🎨 Conformidade com as Skills

- **`SKILL UI.md`**: Sem setas unicode soltas no texto (uso estrito de ícones `lucide-react`), sem `hover:scale`, transições explícitas de cores e backgrounds, cursores com `cursor: pointer`.
- **`Acessibility WCAG`**: Tags semânticas (`<header>`, `<nav>`, `<aside>`, `<main>`), atributos `aria-label` em todos os botões de ícone, contraste mínimo AA (4.5:1), modais acessíveis com `role="dialog"`.
- **`nielsen-heuristics`**: Visibilidade clara do status do sistema (marcação dourada na aba ativa, alertas em tempo real), linguagem padronizada de segurança pública e prevenção de erros.
- **`frontend-expert`**: Arquitetura orientada a recursos (`features/evidence`), tipagem estrita no TypeScript sem uso de `any`, import aliases configurados.

---

## 🚀 Como Iniciar

Execute através do atalho criado:
```powershell
.\dev.bat
```
Ou diretamente pelo PowerShell:
```powershell
& "C:\Program Files\nodejs\npm.cmd" run dev
```
Acesse no navegador: `http://localhost:3000`.
