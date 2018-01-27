/**
*
*  MELIONIC
*  🐺 MELIONIC - A Yeoman static site and blog generator that helps you kickstart highly sophisticated Jekyll projects to evolve and upgrade every aspect of your Ruby development to the next moonshot. 
*
*  Copyright 2018 Reedia Limited. All rights reserved.
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*
*/
'use strict';
/* jslint nomen: true */
/* jslint vars: true */
/* global require,process,module */
const chalk = require('chalk')
const util = require('util');
const path = require('path');
const Generators = require('yeoman-generator')
const yosay = require('yosay');
const ascii = require('./src/ascii.js')
const mkdirp = require('mkdirp')
const fs = require('fs')
const fse = require('fs-extra')
const prompts = require('./prompts.json')

class StaticGenerator extends Generators {

  constructor(args, options) {
    super(args, options);
    this.config.save();
  }


    initializing() {
      this.log('-- Initialising...\n');
      this.appYear = (new Date()).getFullYear()
      this.appVersion = require('../package.json').version
      if (!this.options['skip-welcome-message']) {
        ascii.logo()
        ascii.captain()
        console.log(chalk.white.bold('\nThis is your Captain John Doe, welcoming you aboard to Avionic. \nAt this time, we request your full attention as your inflight \nteam will guide you through the safety features.\n'))
        ascii.crew()
        console.log(chalk.white.bold("\nLadies and gentlemen, this is Jane Smith and I’m your chief \nflight attendant. I'd like to direct your attention to the \nterminal in front of you. We will be showing our safety \ndemonstration and would like the next few minutes of your \ncomplete attention.\n"))
      }
    }

    prompting() {
      this.log('-- Prompting...\n');

      return this.prompt(prompts).then((props) => {

        // Set needed global vars for yo
        this.siteVersion = props.siteVersion;
        this.siteTitle = props.siteTitle;
        this.siteDescription = props.siteDescription;
        this.siteKeywords = props.siteKeywords;
        this.siteLanguage = props.siteLanguage;
        this.siteUrl = props.siteUrl;
        this.siteAuthor = props.siteAuthor;
        this.siteEmail = props.siteEmail;
        this.twitterUsername = props.twitterUsername;
        this.facebookUsername = props.facebookUsername;
        this.linkedinUsername = props.linkedinUsername;
        this.googleplusUsername = props.googleplusUsername;
        this.disqusId = props.disqusId;
        this.addthisPubId = props.addthisPubId;
        this.gaTrackingId = props.gaTrackingId;
        this.gaSuperProxyUrl = props.gaSuperProxyUrl;
        this.githubUsername =  props.githubUsername;
        this.githubRepo = props.githubRepo;
        this.feedbackUrl = props.feedbackUrl;

        // Set needed keys into config
        this.config.set('siteVersion', this.siteVersion);
        this.config.set('siteTitle', this.siteTitle);
        this.config.set('siteDescription', this.siteDescription);
        this.config.set('siteKeywords', this.siteKeywords);
        this.config.set('siteLanguage', this.siteLanguage);
        this.config.set('siteUrl', this.siteUrl);
        this.config.set('siteAuthor', this.siteAuthor);
        this.config.set('siteEmail', this.siteEmail);
        this.config.set('twitterUsername', this.twitterUsername);
        this.config.set('facebookUsername', this.facebookUsername);
        this.config.set('linkedinUsername', this.linkedinUsername);
        this.config.set('googleplusUsername', this.googleplusUsername);
        this.config.set('disqusId', this.disqusId);
        this.config.set('addthisPubId', this.addthisPubId);
        this.config.set('gaTrackingId', this.gaTrackingId);
        this.config.set('gaSuperProxyUrl', this.gaSuperProxyUrl);
        this.config.set('githubUsername', this.githubUsername);
        this.config.set('githubRepo', this.githubRepo);
        this.config.set('feedbackUrl', this.feedbackUrl);
      });
    }

    writing() {
      this.log('-- Writing...\n');
      mkdirp('_data');
      mkdirp('_includes');
      mkdirp('_layouts');
      mkdirp('_pages');
      mkdirp('_posts');
      mkdirp('tags');
      mkdirp('assets');
      mkdirp('assets/images');
      //this.fs.write(this.destinationPath('index.js'), 'const foo = 1;');

      this.fs.copyTpl(
        this.templatePath('../templates/_CNAME'),
        this.destinationPath('CNAME'),
        {site_url:`${this.siteUrl}`}
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_Gemfile'),
        this.destinationPath('Gemfile')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_Gemfile.lock'),
        this.destinationPath('Gemfile.lock')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_404.html'),
        this.destinationPath('404.html'),
        {
          site_language:`${this.siteLanguage}`,
          site_author:`${this.siteAuthor}`,
          site_title:`${this.siteTitle}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_index.html'),
        this.destinationPath('index.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_robots.txt'),
        this.destinationPath('robots.txt')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/__gentags.rb'),
        this.destinationPath('_gentags.rb')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_deploy.sh'),
        this.destinationPath('deploy.sh'),
        {
          github_repo:`${this.githubRepo}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_image-optimisation.sh'),
        this.destinationPath('_image-optimisation.sh')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_LICENSE'),
        this.destinationPath('LICENSE'),
        {
          site_author:`${this.siteAuthor}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/__config.yml'),
        this.destinationPath('_config.yml'),
        {
          site_version:`${this.siteVersion}`,
          site_title:`${this.siteTitle}`,
          site_description:`${this.siteDescription}`,
          site_keywords:`${this.siteKeywords}`,
          site_language:`${this.siteLanguage}`,
          site_url:`${this.siteUrl}`,
          site_author:`${this.siteAuthor}`,
          site_email:`${this.siteEmail}`,
          twitter_username:`${this.twitterUsername}`,
          facebook_username:`${this.facebookUsername}`,
          linkedin_username:`${this.linkedinUsername}`,
          google_plus_username:`${this.googleplusUsername}`,
          disqus_id:`${this.disqusId}`,
          addthis_pubid:`${this.addthisPubId}`,
          ga_tracking_id:`${this.gaTrackingId}`,
          ga_superproxy_url:`${this.gaSuperProxyUrl}`,
          github_username:`${this.githubUsername}`,
          github_repo:`${this.githubRepo}`,
          feedback_url:`${this.feedbackUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_autoprefixer.yml'),
        this.destinationPath('autoprefixer.yml')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_favicon.ico'),
        this.destinationPath('favicon.ico')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_facebook-instant-feed.xml'),
        this.destinationPath('facebook-instant-feed.xml')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_atom.xml'),
        this.destinationPath('atom.xml')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_feed.xml'),
        this.destinationPath('feed.xml')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_sitemap.xml'),
        this.destinationPath('sitemap.xml')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_data/_authors.yml'),
        this.destinationPath('_data/authors.yml'),
        {
          site_author:`${this.siteAuthor}`,
          site_email:`${this.siteEmail}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_analytics.html'),
        this.destinationPath('_includes/analytics.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_footer.html'),
        this.destinationPath('_includes/footer.html'),
        {
          site_author:`${this.siteAuthor}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_head.html'),
        this.destinationPath('_includes/head.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_header.html'),
        this.destinationPath('_includes/header.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-github.html'),
        this.destinationPath('_includes/icon-github.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-github.svg'),
        this.destinationPath('_includes/icon-github.svg')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-googleplus.html'),
        this.destinationPath('_includes/icon-googleplus.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-googleplus.svg'),
        this.destinationPath('_includes/icon-googleplus.svg')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-linkedin.html'),
        this.destinationPath('_includes/icon-linkedin.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-linkedin.svg'),
        this.destinationPath('_includes/icon-linkedin.svg')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-twitter.html'),
        this.destinationPath('_includes/icon-twitter.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_icon-twitter.svg'),
        this.destinationPath('_includes/icon-twitter.svg')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_metatags.html'),
        this.destinationPath('_includes/metatags.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_newsletter.html'),
        this.destinationPath('_includes/newsletter.html'),
        {
          site_author:`${this.siteAuthor}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_posts.html'),
        this.destinationPath('_includes/posts.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_sidebar.html'),
        this.destinationPath('_includes/sidebar.html'),
        {
          site_author:`${this.siteAuthor}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_tagcloud.html'),
        this.destinationPath('_includes/tagcloud.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_includes/_taglist.html'),
        this.destinationPath('_includes/taglist.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_layouts/_default.html'),
        this.destinationPath('_layouts/default.html'),
        {
          site_language:`${this.siteLanguage}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_layouts/_page.html'),
        this.destinationPath('_layouts/page.html'),
        {
          site_language:`${this.siteLanguage}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_layouts/_post.html'),
        this.destinationPath('_layouts/post.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_layouts/_tagpage.html'),
        this.destinationPath('_layouts/tagpage.html')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_about.md'),
        this.destinationPath('_pages/about.md'),
        {
          site_author:`${this.siteAuthor}`,
          site_description:`${this.siteDescription}`,
          site_keywords:`${this.siteKeywords}`,
          site_email:`${this.siteEmail}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_archive.md'),
        this.destinationPath('_pages/archive.md')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_categories.md'),
        this.destinationPath('_pages/categories.md')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_cookies.md'),
        this.destinationPath('_pages/cookies.md'),
        {
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_privacy.md'),
        this.destinationPath('_pages/privacy.md'),
        {
          site_author:`${this.siteAuthor}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_tags.md'),
        this.destinationPath('_pages/tags.md')
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_pages/_terms.md'),
        this.destinationPath('_pages/terms.md'),
        {
          site_author:`${this.siteAuthor}`,
          site_url:`${this.siteUrl}`
        }
      )
      this.fs.copyTpl(
        this.templatePath('../templates/_posts/_2018-01-01-article.md'),
        this.destinationPath('_posts/2018-01-01-article.md'),
        {
          site_title:`${this.siteTitle}`,
          site_author:`${this.siteAuthor}`,
          site_keywords:`${this.siteKeywords}`,
          site_description:`${this.siteDescription}`,
          site_language:`${this.siteLanguage}`,
          site_url:`${this.siteUrl}`
        }
      )
    }
}

module.exports = StaticGenerator
