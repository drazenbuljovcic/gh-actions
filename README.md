- Updated secret `DISCORD_WEBHOOK_URL`

```
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/drazenbuljovcic/gh-actions/actions/workflows/10528604189/dispatches \
   -f "inputs[message]=Hello from REST"
```
