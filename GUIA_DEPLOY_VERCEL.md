# 🚀 GUIA DE DEPLOY — Portal Charles Ideias

**Domínios:** `charlesideias.is-local.org` (principal) + `charlesideiaslab.is-local.org` (redireciona)

---

## 📌 PRÉ-REQUISITOS

- GitHub: repositório `charlesideiaslab/portal` já existe
- Projeto Next.js já pronto (3 páginas: Home, Sobre, Contato)
- Domínios já liberados pelo Open Domains

---

## PASSO 1 — CRIAR CONTA NO VERCEL

1. Acesse **https://vercel.com**
2. Clique em **"Sign Up"** (ou "Login" se já tiver conta)
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar sua conta GitHub
5. Pronto — você está no dashboard do Vercel

---

## PASSO 2 — CONECTAR O REPOSITÓRIO

1. No dashboard do Vercel, clique em **"Add New..."** > **"Project"**
2. Na lista de repositórios, encontre **`charlesideiaslab/portal`**
3. Clique em **"Import"**
4. **NÃO MEXA EM NADA** — as configurações padrão já funcionam:
   - Framework: **Next.js** (detecta automaticamente)
   - Build Command: `next build` (já vem)
   - Output Directory: mantém padrão
5. Role para baixo e clique em **"Deploy"**
6. Aguarde o build (~1 minuto)
7. ✅ Pronto! Seu site está no ar em `portal-charles.vercel.app` (ou nome aleatório)

---

## PASSO 3 — ADICIONAR DOMÍNIO PRINCIPAL

1. No dashboard do projeto, vá em **"Settings"** > **"Domains"**
2. No campo "Add domain", digite: **`charlesideias.is-local.org`**
3. Clique em **"Add"**
4. O Vercel vai mostrar um aviso: **"You need to configure your DNS"**
5. Anote o **valor de CNAME** que o Vercel mostra (ex: `cname.vercel-dns.com`)
6. **NÃO FECHE ESSA TELA** — você vai precisar do valor

---

## PASSO 4 — CONFIGURAR DNS NO OPEN DOMAINS

1. Acesse **https://opendomains.andrewstech.me/login**
2. Faça login com sua conta **GitHub**
3. Vai aparecer uma tela pedindo para migrar seus domínios do GitHub — clique em **"Migrate from GitHub"**
4. Após a migração, vá em **"My Subdomains"** (Meus Subdomínios)
5. Clique em **"Manage DNS"** ao lado de `charlesideias.is-local.org`

### Adicionar o CNAME para o Vercel:

| Campo | Valor |
|-------|-------|
| Type | **CNAME** |
| Name | **@** (ou deixe vazio, representa o domínio raiz) |
| Target | **cname.vercel-dns.com** (ou o valor exato que o Vercel mostrou) |
| TTL | **300** (ou "Auto") |

6. Clique em **"Add Record"** ou **"Save"**

⏱️ A propagação do DNS pode levar de **5 minutos a 24 horas**.

---

## PASSO 5 — VERIFICAR DOMÍNIO NO VERCEL

1. Volte ao Vercel (Settings > Domains)
2. Após o DNS propagar (10-30 min geralmente), o status muda de **"Pending"** para **"Valid"**
3. ✅ SSL/TLS é configurado automaticamente pelo Vercel (HTTPS grátis)

---

## PASSO 6 — CONFIGURAR REDIRECIONAMENTO DO SEGUNDO DOMÍNIO

Para `charlesideiaslab.is-local.org` redirecionar para `charlesideias.is-local.org`:

1. No Vercel, vá em **Settings** > **Domains**
2. Adicione **`charlesideiaslab.is-local.org`** como domínio
3. No Open Domains, adicione um CNAME:
   - Type: **CNAME**
   - Name: **@** (raiz)
   - Target: **charlesideias.is-local.org**
   - TTL: **300**
4. No Vercel, em Settings > Domains, clique no **"..."** ao lado do domínio
5. Escolha **"Redirect"**
6. Configure: redirecionar **`charlesideiaslab.is-local.org`** → **`charlesideias.is-local.org`** (301 permanente)
7. ✅ Pronto!

---

## PASSO 7 — SUBIR ALTERAÇÕES FUTURAS

Toda vez que você editar o código no seu computador:

```bash
# No diretório do projeto:
git add -A
git commit -m "descrição do que mudou"
git push origin main
```

O Vercel detecta automaticamente e faz deploy em segundos. ✅

---

## ⚠️ SOLUÇÃO DE PROBLEMAS

| Problema | Solução |
|----------|---------|
| DNS "Pending" no Vercel por horas | O CNAME pode estar errado. Confira o valor exato no Vercel. Ou use **A records** (abaixo) |
| Site aparece como "Not Found" | No Open Domains, confira se o CNAME aponta para o valor correto |
| HTTPS não funciona | Vercel emite SSL automaticamente após validar o domínio (~1 minuto) |
| Erro de build no Vercel | Verifique se o Next.js compila localmente com `npm run build` |

### Alternativa: Usar A Records (se CNAME não funcionar no domínio raiz)

Se o `.is-local.org` não suportar CNAME no domínio raiz (muitos DNS não permitem):

1. No Vercel, vá em Settings > Domains, clique no domínio
2. Veja os **endereços IP** sugeridos pelo Vercel (geralmente 4 IPs)
3. No Open Domains, em vez de CNAME, adicione **4 registros A**:
   - Type: **A** | Name: **@** | Value: **76.76.21.21**
   - Type: **A** | Name: **@** | Value: **76.76.21.22**
   - Type: **A** | Name: **@** | Value: **76.76.21.98**
   - Type: **A** | Name: **@** | Value: **76.76.21.123**
4. Os IPs exatos aparecem no Vercel em **Settings > Domains**

---

> 💡 **Dica:** Depois de configurar, qualquer alteração que você der `git push origin main` já sobe automaticamente. Você nem precisa abrir o Vercel de novo — só esperar ~30 segundos e atualizar o navegador.

**CHARLES IDEIAS LAB · 2026**
