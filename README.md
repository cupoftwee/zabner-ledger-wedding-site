# David & Emily's Wedding Website

A static website built with [Bridgetown](https://www.bridgetownrb.com/), [PostCSS](https://postcss.org/), and [Tailwind CSS](https://tailwindcss.com/). Mazel tov, you two <3

### Dependencies & Setup
In order to run the Bridgetown CLI locally, you'll need to [install it as the docs specify](https://www.bridgetownrb.com/docs/installation). If you have all the dependencies (GCC, Make, Ruby >= 2.5, Node >= 10.3, and Yarn, at time of writing), you should be able to run `gem install bridgetown -N` successfully. 

From there, you should be able to do the following steps to: install & set up the website
```bash
# 1) clone the repo
$ git clone https://github.com/cupoftwee/zabner-ledger-wedding-site.git
# 2) cd into the repo
$ cd zabner-ledger-wedding-site
# 3) install internal deps
$ yarn install
# 4) Run a local dev server on http://localhost:4000
$ yarn start
```

### Deployment
Any commits to Github on the `primary` branch will be automatically deployed to [zabner-wedding.netlify.app](https://zabner-wedding.netlify.app).


### Directory Structure
```
├── frontend # this is where you put your frontend assets for Webpack
│   ├── javascript
│   │   ├── index.js
│   │   └── widget.js
│   ├── styles
│   │   ├── index.scss
│   └   └── layout.scss
├── src # this is where you put your content and design templates
│   ├── _components
│   │   ├── footer.liquid
│   │   └── header.liquid
│   ├── _layouts
│   │   ├── default.html
│   │   └── post.html
│   ├── _posts
│   │   ├── 2019-10-29-why-im-dressing-up-as-thanos-this-year.md
│   │   └── 2020-04-12-isolation-is-really-getting-to-me.md
|   |── images
|   |   ├── site-wide-photos-go-here.png
|   |   └── images-and-logos-too.jpg
│   ├── 404.html
│   ├── some_page.md
│   └── index.html # or index.md
├── output # this is the generated site published via bridgetown build/serve
├── plugins # this is where you can write custom plugins
├── bridgetown.config.yml # this is your Bridgetown configuration file
├── Gemfile
├── package.json
└── webpack.config.js
```