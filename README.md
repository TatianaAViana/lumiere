# Lumiére Hair Studio

Site estático para o salão de beleza Lumiére Hair Studio em Torres Vedras.

## 🚀 Como executar

### Desenvolvimento
\`\`\`bash
npm install
npm run dev
\`\`\`

### Build para produção (site estático)
\`\`\`bash
npm install
npm run build
\`\`\`

Após o build, os arquivos estáticos estarão na pasta `out/` prontos para deploy.

## 📁 Estrutura do projeto

\`\`\`
lumiere-hair-studio/
├── src/
│   ├── app/                 # Páginas do Next.js App Router
│   ├── components/          # Componentes reutilizáveis
│   ├── sections/           # Seções das páginas
│   └── config/             # Configurações
├── public/                 # Arquivos estáticos
├── out/                   # Build final (gerado após npm run build)
└── next.config.mjs        # Configuração do Next.js
\`\`\`

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com exportação estática
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 📦 Deploy

Após executar `npm run build`, a pasta `out/` conterá todos os arquivos estáticos:

- **Netlify**: Faça upload da pasta `out/`
- **Vercel**: Configure para usar `output: 'export'`
- **GitHub Pages**: Publique o conteúdo da pasta `out/`
- **Servidor web**: Copie os arquivos da pasta `out/` para o servidor

## ✨ Características

- ✅ Site 100% estático
- ✅ SEO otimizado
- ✅ Responsivo
- ✅ Performance otimizada
- ✅ Imagens otimizadas
- ✅ Sem dependências de servidor

## 🎯 Páginas

- **Homepage** - Hero com vídeo, galeria, testemunhos
- **Cabeleireiro** - Serviços de cortes, coloração, tratamentos
- **Estética** - Mãos/pés, pestanas/sobrancelhas, corpo/rosto
- **Sobre** - História e missão do salão
- **Contactos** - Formulário e informações
- **Blog** - Artigos sobre beleza
- **Políticas** - Termos e privacidade

## 🔧 Comandos úteis

\`\`\`bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Gerar build estático
npm run build

# Verificar build localmente
npx serve out
