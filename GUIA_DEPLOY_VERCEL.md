# 🚀 GUIA DE DEPLOY — Portal Charles Ideias

**Domínios:** `charlesideias.is-local.org` (principal) + `charlesideiaslab.is-local.org` (redireciona)

---

## ✅ JÁ FOI FEITO (pelo Fantasma)

| Item | Status |
|------|--------|
| Conta Vercel conectada | ✅ `contatocharlesideias-8128` |
| Deploy do projeto | ✅ **https://charlesideias-portal.vercel.app** |
| Domínio `charlesideias.is-local.org` adicionado no Vercel | ✅ Aguardando DNS |
| Domínio `charlesideiaslab.is-local.org` adicionado no Vercel | ✅ Aguardando DNS |
| Redirect `charlesideiaslab` → `charlesideias` configurado | ✅ via `vercel.json` |
| `next.config.ts` corrigido (basePath removido) | ✅ |
| URL nos metadados corrigida | ✅ |

---

## ⏳ VOCÊ PRECISA FAZER — DNS no Open Domains

O Open Domains exige **login com GitHub** para gerenciar DNS (não consigo fazer isso por aqui). Siga os passos abaixo:

### PASSO 1 — Migrar seus domínios

1. Acesse **https://opendomains.andrewstech.me/login**
2. Clique em **"Login with GitHub"**
3. Autorize o aplicativo
4. Após entrar, vá em **Dashboard**
5. Clique em **"Migrate from GitHub"** para migrar seus domínios `charlesideias.is-local.org` e `charlesideiaslab.is-local.org`

### PASSO 2 — Adicionar registro A (domínio principal)

1. Vá em **"My Subdomains"**
2. Clique em **"Manage DNS"** ao lado de `charlesideias.is-local.org`
3. Clique em **"Add Record"** e preencha:

| Campo | Valor |
|-------|-------|
| Type | **A** |
| Name | **@** (deixe vazio ou @) |
| Value | **76.76.21.21** |
| TTL | **300** |

4. Clique em **"Save"** ou **"Add Record"**

> ⚠️ **Importante:** O Vercel recomendou **A record** em vez de CNAME porque o domínio raiz (apex) não aceita CNAME em muitos DNS providers. Use A mesmo.

### PASSO 3 — Adicionar registro A (segundo domínio)

Repita o processo para `charlesideiaslab.is-local.org`:

| Campo | Valor |
|-------|-------|
| Type | **A** |
| Name | **@** |
| Value | **76.76.21.21** |
| TTL | **300** |

> O redirect do `charlesideiaslab` para `charlesideias` já está configurado no Vercel. Quando o DNS propagar, o redirect funciona automaticamente.

### PASSO 4 — Aguardar propagação

⏱️ **5 a 30 minutos** geralmente. Depois:
- Vercel detecta automaticamente e emite SSL (HTTPS)
- O site fica no ar em **https://charlesideias.is-local.org**
- O domínio `charlesideiaslab.is-local.org` redireciona pro principal

---

## 🚀 SUBIR ALTERAÇÕES FUTURAS

Toda vez que você editar o código:

```bash
cd "E:\PROJETOS CHARLES IDEIAS LAB\PORTAL CHARLES IDEIAS"
git add -A
git commit -m "descrição do que mudou"
git push origin main
```

O Vercel detecta e faz deploy automático em ~30 segundos. ✅

---

## 🌐 URLs ÚTEIS

| Recurso | URL |
|---------|-----|
| Site (provisório) | https://charlesideias-portal.vercel.app |
| Site (final, após DNS) | https://charlesideias.is-local.org |
| Dashboard Vercel | https://vercel.com/charles-ideias-lab-s-projects/charlesideias-portal |
| GitHub | https://github.com/charlesideiaslab/portal |
| Open Domains | https://opendomains.andrewstech.me/ |
| Formspree (formulário) | https://formspree.io (criar conta e pegar form ID) |

---

## ⚠️ SOLUÇÃO DE PROBLEMAS

| Problema | Solução |
|----------|---------|
| DNS "Pending" no Vercel por horas | Verifique se o A record está correto no Open Domains |
| Site aparece como "Not Found" | Confira o IP: deve ser **76.76.21.21** |
| HTTPS não funciona | Vercel emite SSL automaticamente após validar o domínio |
| Formulário de contato quebrado | O action `formspree.io/f/...` tem placeholder — precisa criar conta no Formspree e substituir |

---

> 💡 **Dica:** Depois do DNS configurado, o Vercel cuida de SSL, deploy automático e redirects. Você só precisa dar `git push` pra atualizar o site.

**CHARLES IDEIAS LAB · 2026**
