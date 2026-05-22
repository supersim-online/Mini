# Deploy na Vercel - Mini Paredão Store

Este projeto está configurado para deploy na **Vercel**.

## 🚀 Opção 1: Deploy via GitHub (Recomendada)

1. **Conecte o projeto ao GitHub** no Lovable
2. Na Vercel, clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Configure:
   - **Build Command:** `npm run build` (ou `bun run build`)
   - **Output Directory:** `dist`
   - **Node Version:** 22
5. Clique em **Deploy**

A Vercel vai fazer o build e deploy automaticamente a cada push.

## 🚀 Opção 2: Deploy via Vercel CLI

1. Instale a Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. No diretório do projeto, rode:
   ```bash
   vercel --prod
   ```

## 📦 Estrutura do Projeto

- `src/routes/` - Páginas do site (TanStack Router)
- `src/components/` - Componentes React
- `src/data/products.ts` - Produtos e links de checkout
- `dist/` - Pasta gerada no build (não envie para o Git)

## ⚙️ Configurações

O arquivo `vercel.json` já está configurado com:
- Build command e output directory
- SPA fallback para todas as rotas

## 📝 Notas

- Este projeto **não usa server functions** (é um site estático/SPA)
- Os botões "Comprar agora" redirecionam para links de pagamento externos
- Não é necessário configurar variáveis de ambiente

## 🔗 Links dos Produtos

| Produto | Link de Checkout |
|---------|-----------------|
| MINI PAREDÃO #1 | https://pay.transacaoseguraemprestimo.online/c/2c37f20b-855a-44ab-bc7a-c49a2c4d9a72 |
| MINI PAREDÃO #2 | https://pay.transacaoseguraemprestimo.online/c/fca1c9a6-5619-4f31-b896-86464c286cc5 |
| MINI PAREDÃO #3 | https://pay.transacaoseguraemprestimo.online/c/27628840-1dcd-414f-8c2c-24d32eaac694 |
| MINI PAREDÃO #4 | https://pay.transacaoseguraemprestimo.online/c/322af278-9f56-4d27-8dac-0d1c7ccb6a27 |
| MINI PAREDÃO #5 | https://pay.transacaoseguraemprestimo.online/c/87f1e1b2-88dc-4a7f-b8a1-252f88ecfdcd |
| MINI PAREDÃO #6 | https://pay.transacaoseguraemprestimo.online/c/52a49500-be0d-4de2-b584-840149d8a695 |
