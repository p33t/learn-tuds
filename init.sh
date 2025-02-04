set -e

export SCRIPT_DIR=$(dirname "$0")

echo "Copying types from telus-uds..."
export COMP_WEB_DIR=$SCRIPT_DIR/src/types/telus-uds-components-web
mkdir -p $COMP_WEB_DIR
cp $SCRIPT_DIR/node_modules/@telus-uds/components-web/types/* $COMP_WEB_DIR

echo "Generating API Client..."
npm exec --no -- @rtk-query/codegen-openapi src/middleware/petstore-client/openapi-config.json
