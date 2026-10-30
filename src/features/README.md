# Módulos por Funcionalidade (Feature-based Architecture)

Nesta pasta ficam as funcionalidades isoladas da aplicação. Cada feature encapsula seus próprios componentes, chamadas de API, hooks e tipos específicos:

```plaintext
src/features/{feature-name}/
├── api/            # Requisições e clientes HTTP específicos da feature
├── components/     # Componentes visuais exclusivos desta funcionalidade
├── hooks/          # Custom hooks da feature
├── types/          # Interfaces e contratos TypeScript da feature
└── index.ts        # Ponto de exportação pública (public API do módulo)
```

Exemplo: `src/features/cameras/`, `src/features/alerts/`, `src/features/analytics/`.

