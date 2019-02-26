#!/usr/bin/env bash

# 1. Clone complete SVN repository to separate directory
svn co $SVN_REPOSITORY ../svn --trust-server-cert --non-interactive

# 2. Copy git repository contents to SNV trunk/ directory
cp -R ./* ../svn/trunk/

# 3. Switch to SVN repository
cd ../svn/trunk/

# 4. Move assets/ to SVN /assets/
mv ./wp-assets/* ../assets/

#4.1 clean assets dir
rm -R ./wp-assets

# 5. Clean up unnecessary files
rm -rf .git/
rm -rf deploy/
rm README.md

# 6. Go to SVN repository root
cd ../

# 7. Create SVN tag
svn cp trunk tags/$TRAVIS_TAG

# 8. Push SVN tag
svn ci --message "Release $TRAVIS_TAG" \
    --username $SVN_USERNAME \
    --password $SVN_PASSWORD \
    --non-interactive
