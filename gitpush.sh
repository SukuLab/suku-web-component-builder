#!/bin/bash
git clone https://f2fd9489142d5c7db74a70a45273e33620cb4cf8@github.com/SukuLab/suku-web-components-library.git -b $BRANCH_NAME
cd suku-web-components-library
git rm -r *
cd /app/dist/suku-webcomponents/
echo "copiying dist to suku-web-components-library...."
cp -r * /app/suku-web-components-library/
cd /app/suku-web-components-library/
echo "setting git config"
git config --global user.email "$EMAIL_ID"
git config --global user.name "$GIT_USERNAME"
git add .
git commit -m "updated $BUILD_TAG"
echo "pushing the changes"
git push origin $BRANCH_NAME
