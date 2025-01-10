# Zephyr deployment summary

This action creates job summary for build with `Zephyr plugin`.

## Inputs

### `application_uid`

**Required** UID of application. pattern `{application}.{repository}.{organization}`.

## Outputs

### `version_url`

The link where snapshot of build is deployed.

## Usage

To build app with `zephyr-plugin` you will need generate `User Auth Token` in Zephyr portal [here](https://app.zephyr-cloud.io/profile/settings/user-tokens/generate) and store it to GitHub action secrets.

```yaml
jobs:
  build_app:
    runs-on: ubuntu-latest
    name: Build
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: install dependencies
        run: npm ci
      - name: Build App
        env:
          ZE_SECRET_TOKEN: ${{ secrets.ZE_SECRET_TOKEN }} # Required - Your User Auth Token
        run: "<build command here>"
      - name: Zephyr deploy summary
        uses: ZephyrCloudIO/deploy-summary-action@v1
        id: zephyr-summary
        with:
          application_uid: <your_application_uid> # Required
          github_token: {{ secrets.GITHUB_TOKEN }} # Optional
          github_environment: <chosen_environment> # Optional
      - name: Zephyr deploy summary
        run: echo "Deployed to ${{ steps.zephyr.outputs.version_url }}"
```

# Inputs

| Name                 | Required | Description                                        |
| -------------------- | -------- | -------------------------------------------------- |
| `application_uid`    |   true   | Unique identification for your Zephyr application. |
| `github_token`    |   false  | Enables GitHub deployment creation.                |
| `github_environment` |   false  | Specify to which GitHub environment to deploy.     |

# Outputs

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `version_url` | The link where snapshot of build is deployed.                |
