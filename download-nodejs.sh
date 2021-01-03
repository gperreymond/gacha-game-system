#!/bin/bash

set -euo pipefail

NVM_VERSION="${NVM_VERSION:-0.37.2}"
NODE_VERSION="${NODE_VERSION:-12.19.0}"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install $NODE_VERSION
nvm use $NODE_VERSION
