# ContextHub Getting Started Guides #

** Running the site locally **

``` ruby 
$ git clone git@github.com:contexthub/contexthub.github.io.git
$ cd contexthub.github.io
$ bundle install
$ bundle exec jekyll server -w

```

You now have an instance of the site running at http:localhost:4000/
The static pages are generated to the `_site/` directory. Any changes you make will be immediately available when running jekyll with the `-w` option.