<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the invitation’s three stages on the home route with client-side transitions and in-page scrolling, because they form one continuous guest experience.
- Keep attendance selections in React state only, because the supplied brief explicitly requires a non-persistent demonstration.
- Use generated paper and seal assets with semantic CSS tokens for stationery styling, because physical material detail defines the invitation’s visual identity.
- Scope the asset-hosted decorative Latin font to the announcement name spans through a dedicated font token, because the remaining invitation typography must stay unchanged.
- Prebundle React and the invitation’s client UI dependencies together in Vite, because late dependency optimization can mix cached React module instances in an already-open preview.
