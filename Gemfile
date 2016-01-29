source 'https://rubygems.org'
ruby '2.2.4'

gem 'rails', '4.2.5'
gem 'rails-api'

group :development do
  gem 'spring'
  gem 'sqlite3'
end

group :production do
  gem 'thin'
  gem 'rails_12factor'
  gem 'pg'
end

# Web Server recommended by Heroku
# https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server#config
gem 'puma'
