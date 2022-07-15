#!/bin/bash
cd docs
# 1) install rbenv if not installed 
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
# Then may want to add the following 2 lines to ~/.zshrc, or just run them
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
# 2) make sure that ruby 2.7 is installed and active
rbenv install 2.7.6
rbenv shell 2.7.6
# test it by running the folllowing (you may need to open a new shell)
ruby --version
# 3) install build dependencies
gem install bundler
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve