# CI/CD

This GitHub Actions workflow builds, tests, and deploys frontend to either dev or production environments depending on the commit message.

## Workflow Trigger

Runs automatically on push to main branch.

### 1. **Checkout & Version Handling**

- Checks out full Git history and tags
- Checks commit message for version like Release: X.Y.Z
- If major/minor bump (X.0.0 or X.Y.0) → triggers production
- patch bump (0.0.X) → is considered normal dev deployment
- If no semantic version, auto-increments patch from latest tag

### 2. **Setup & Testing**

- Configures Node.js version 20
- Installs project dependencies using `npm ci` (clean install)
- Runs `npm run lint` to enforce code quality and style standards. -- currently commented due to issues
- Runs `npm run test` -- also commented
- On failure → notifies Slack

### 3. **Deployment**

- Sets up Fly.io CLI
- chooses `fly.dev.toml` or `fly.production.toml` based on the commit
- Deploys via flyctl deploy --remote-only
- On failure → notifies Slack

### 4. **Git Tag & Slack Notify**

- Always tags Git with version (even for dev)
- Sends success message to Slack with:
  - Environment (dev or prod)
  - Version

## Required Secrets

The workflow requires these secrets to be configured in GitHub repository:

- `SLACK_WEBHOOK_URL`: Webhook URL for Slack notifications
- `FLY_DEV_API_TOKEN`: API token for Fly.io development server
- `FLY_PROD_API_TOKEN`: API token for Fly.io production server

## Usage Examples

### Deploy to Development

To trigger a dev deployment, simply commit your changes with a standard commit message and push to the `main` branch:

```bash
git commit -m "Normal commit message"
git push origin main
```

### Deploy to Production

To trigger a production release, use a commit message that follows the `Release: X.Y.0` or `Release: X.0.0` format (where the patch version is `0`)

```bash
git commit -m "Release: 1.2.0"
git push origin main
```
