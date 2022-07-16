# export path to Ruby 2.7
$env:Path += ';M:\programs\Ruby27-x64\bin'
# test the version
ruby --version # 2.7
# run the setup
Set-Location docs
# update bundler to the correct version
bundle config set --local path 'vendor/bundle'
gem install bundler:2.2.26
# install dependencies
bundle install
bundle exec jekyll serve