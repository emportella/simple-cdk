#! /bin/sh
echo "Deleting dist folder"
rm -rf dist
echo "running tsc"
npm run build
echo "copying package.json, tsconfig.json to dist"
cp package.json dist/
cp tsconfig.json dist/
echo "updating package.json, tsconfig.json"
sed -i "s/src/./" dist/tsconfig.json
sed -i 's/"main": "dist\/index.js"/"main": "index.js"/' dist/package.json
sed -i 's/"types": "dist\/index.d.ts"/"types": "index.d.ts"/' dist/package.json
echo "packing the package"
(cd dist && npm pack)