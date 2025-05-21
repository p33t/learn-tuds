set -e

export SCRIPT_DIR=$(dirname "$0")

copy_lib() {
  DEST_FOLDER="$SCRIPT_DIR/src/types/$2"
  mkdir -p $DEST_FOLDER
  cp $SCRIPT_DIR/node_modules/$1/* $DEST_FOLDER
}

echo "Copying types from telus-uds..."
copy_lib '@telus-uds/components-web/types' 'telus-uds-components-web'

echo "Generating API Client..."
npm exec --no -- @rtk-query/codegen-openapi src/middleware/petstore-client/openapi-config.json
