#!/bin/bash
cd docs
# 1) install rbenv if not installed 
export PATH="$HOME/.rbenv/bin:$PATH"
if [[ $(rbenv commands) ]]; then
    echo "rbenv already installed"
else
    curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
    export PATH="$HOME/.rbenv/bin:$PATH"
fi
eval "$(rbenv init -)"
# 2) make sure that ruby 3 is installed and active
rbenv install -s 3.3.3
rbenv shell 3.3.3
# test it by running the following (you may need to open a new shell)
ruby --version
# 3) install build dependencies
gem install bundler -v 2.7.1
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve