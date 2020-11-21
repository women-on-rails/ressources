#!/usr/bin/env bash

cd website
yarn install
yarn build
mv build /tmp/docusaurus-build
cd ..
git checkout gh-pages
rm -rf website
mv /tmp/docusaurus-build/* ./
for FILE in $(find . -iname '*.html'); do
  sed -i '' 's/lang="en"/lang="fr"/g' $FILE
done
ga .
git commit -m "Build $(date +"%D %T")"
git push
