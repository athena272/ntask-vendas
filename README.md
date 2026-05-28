# nTask — Landing de vendas

Landing page estática (HTML + CSS + JS) para apresentação comercial da plataforma nTask.

## Visualizar localmente

Abra `index.html` no navegador ou use um servidor simples:

```powershell
cd ntask-vendas
npx --yes serve .
```

Acesse `http://localhost:3000` (ou a porta indicada).

## Publicar no GitHub Pages

1. Envie este repositório para o GitHub.
2. Em **Settings → Pages**, escolha:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / pasta **`/ (root)`**
3. Salve. Em alguns minutos a URL ficará disponível em  
   `https://<seu-usuario>.github.io/<nome-do-repo>/`

O arquivo `.nojekyll` na raiz evita que o Jekyll ignore pastas com `_` (não usamos, mas é boa prática).

## Estrutura

```
index.html      Página principal
css/main.css    Estilos
js/main.js      Menu mobile, scroll e animações
.nojekyll       GitHub Pages
```

## Cadastro (teste grátis)

A seção `#cadastro` embute o formulário oficial do IdP:

`https://idp-frontend-mz2ksprmhq-uc.a.run.app/embed/cadastro-cartorio`

O domínio `https://athena272.github.io` precisa estar na allowlist do IdP (`frame-ancestors`). Isso é configurado no repositório **nTask-idp** — após alterar, é necessário **redeploy do frontend IdP**.

## Personalizar

- Cadastro e CTAs: seção `#cadastro` e `#contato` em `index.html`.
- Cores da marca: variáveis CSS no topo de `css/main.css` (`--blue`, etc.).
- Logo: hoje carregado de `auth.ntask.app`; para offline total, copie para `assets/logo.png` e atualize os `src`.

## Licença

Ver [LICENSE](LICENSE).
