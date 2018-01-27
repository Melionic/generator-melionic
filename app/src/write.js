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
(function () {
  'use strict'
  /*  jslint nomen: true  */
  /*  jslint vars: true */
  /*  global require,process,module */
  var mkdirp = require('mkdirp')
  var fs = require('fs')
  var fse = require('fs-extra')
  var chalk = require('chalk')
  var util = require('util');
  var path = require('path');
  var yeoman = require('yeoman-generator')
  var yosay = require('yosay');

  module.exports = function (StaticGenerator) {
    StaticGenerator.prototype.directories = function directories () {
        mkdirp('_data');
        mkdirp('_includes');
        mkdirp('_layouts');
        mkdirp('_pages');
        mkdirp('_posts');
        mkdirp('tags');
        mkdirp('assets');
        mkdirp('assets/images');

        this.fs.copyTpl(
          this.templatePath('../templates/_CNAME'),
          this.destinationPath('CNAME'),
          {site_url:this.siteUrl}
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
          this.destinationPath('404.html')
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
          this.destinationPath('deploy.sh')
        )
        this.fs.copyTpl(
          this.templatePath('../templates/_image-optimisation.sh'),
          this.destinationPath('_image-optimisation.sh')
        )
        this.fs.copyTpl(
          this.templatePath('../templates/_LICENSE'),
          this.destinationPath('LICENSE')
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
      
    }
  }
}())


      // var appArguments = {
      //   site_version: this.siteVersion,
      //   site_title: this.siteTitle,
      //   site_description: this.siteDescription,
      //   site_keywords: this.siteKeywords,
      //   site_url: this.siteUrl,
      //   site_author: this.siteAuthor,
      //   site_email: this.siteEmail,
      //   site_language: this.siteLanguage,
      //   twitter_username: this.twitterUsername,
      //   disqus_id: this.disqusId,
      //   addthis_pubid: this.addthisPubId,
      //   ga_tracking_id: this.gaTrackingId,
      //   ga_superproxy_url: this.gaSuperProxyUrl,
      //   github_repo: this.githubRepo.toLowerCase(),
      //   feedback_url: this.feedbackUrl
      // }


      //
      // this.fs.copyTpl(
      //   this.templatePath('../templates/_CNAME'),
      //   this.destinationPath('CNAME'),
      //   {site_url:this.siteUrl}
      // )







    /**
    * Declares options in the generator (only used for the help messages)
    */
    //   this.templatePath('../templates/_Gemfile'),
    //   this.templatePath('../templates/_Gemfile.lock'),
    //   this.templatePath('../templates/_404.html'),
    //   this.templatePath('../templates/_index.html'),
    //   this.templatePath('../templates/_robots.txt'),
    //   this.templatePath('../templates/__gentags.rb'),
    //   this.templatePath('../templates/_deploy.sh'),
    //   this.templatePath('../templates/_image-optimisation.sh'),
    //   this.templatePath('../templates/_LICENSE'),
    //   this.templatePath('../templates/_autoprefixer.yml'),
    //   this.templatePath('../templates/_favicon.ico'),
    //   this.templatePath('../templates/_facebook-instant-feed.xml'),
    //   this.templatePath('../templates/_atom.xml'),
    //   this.templatePath('../templates/_feed.xml'),
    //   this.templatePath('../templates/_sitemap.xml'),
    //   this.destinationPath('Gemfile'),
    //   this.destinationPath('Gemfile.lock'),
    //   this.destinationPath('404.html'),
    //   this.destinationPath('index.html'),
    //   this.destinationPath('robots.txt'),
    //   this.destinationPath('_gentags.rb'),
    //   this.destinationPath('deploy.sh'),
    //   this.destinationPath('_image-optimisation.sh'),
    //   this.destinationPath('LICENSE'),
    //   this.destinationPath('autoprefixer.yml'),
    //   this.destinationPath('favicon.ico'),
    //   this.destinationPath('facebook-instant-feed.xml'),
    //   this.destinationPath('atom.xml'),
    //   this.destinationPath('feed.xml'),
    //   this.destinationPath('sitemap.xml')
    // )


    // fse.copy('app/templates/_CNAME', 'CNAME'),
    // fse.copy('app/templates/_Gemfile', 'Gemfile'),
    // fse.copy('app/templates/_Gemfile.lock', 'Gemfile.lock'),
    // fse.copy('app/templates/_404.html', '404.html'),
    // fse.copy('app/templates/_index.html', 'index.html'),
    // fse.copy('app/templates/_robots.txt', 'robots.txt'),
    // fse.copy('app/templates/__gentags.rb', '_gentags.rb'),
    // fse.copy('app/templates/_deploy.sh', 'deploy.sh'),
    // fse.copy('app/templates/_image-optimisation.sh', 'image-optimisation.sh'),
    // fse.copy('app/templates/_LICENSE', 'LICENSE'),
    // fse.copy('app/templates/_autoprefixer.yml', 'autoprefixer.yml'),
    // fse.copy('app/templates/_favicon.ico', 'favicon.ico'),
    // fse.copy('app/templates/_facebook-instant-feed.xml', ' facebook-instant-feed.xml'),
    // fse.copy('app/templates/_atom.xml', 'atom.xml'),
    // fse.copy('app/templates/_feed.xml', 'feed.xml'),
    // fse.copy('app/templates/_sitemap.xml', 'sitemap.xml')
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // StaticGenerator.prototype.setup = function setup () {
    //
    //   var appArguments = {
    //     site_version: this.siteVersion,
    //     site_title: this.siteTitle,
    //     site_description: this.siteDescription,
    //     site_keywords: this.siteKeywords.toLowerCase(),
    //     site_url: this.siteUrl.toLowerCase(),
    //     site_author: this.siteAuthor,
    //     site_email: this.siteEmail.toLowerCase(),
    //     site_language: this.siteLanguage.toLowerCase(),
    //     twitter_username: this.twitterUsername.toLowerCase(),
    //     disqus_id: this.disqusId.toLowerCase(),
    //     addthis_pubid: this.addthisPubId,
    //     ga_tracking_id: this.gaTrackingId,
    //     ga_superproxy_url: this.gaSuperProxyUrl,
    //     github_repo: this.githubRepo.toLowerCase(),
    //     feedback_url: this.feedbackUrl
    //   }
    //
    //   makeDir('_data');
    //
    //   writing: {
    //     this.dest.mkdir('_includes'),
    //     this.dest.mkdir('_layouts'),
    //     this.dest.mkdir('_pages'),
    //     this.dest.mkdir('_posts'),
    //     this.dest.mkdir('tags'),
    //     this.dest.mkdir('assets'),
    //     this.dest.mkdir('assets/images'),
    //     this.src.copy('_CNAME', 'CNAME'),
    //     this.src.copy('_Gemfile', 'Gemfile'),
    //     this.src.copy('_Gemfile.lock', 'Gemfile.lock'),
    //     this.src.copy('_404.html', '404.html'),
    //     this.src.copy('_index.html', 'index.html'),
    //     this.src.copy('_robots.txt', 'robots.txt'),
    //     this.src.copy('__gentags.rb', '_gentags.rb'),
    //     this.src.copy('_deploy.sh', 'deploy.sh'),
    //     this.src.copy('_image-optimisation.sh', 'image-optimisation.sh'),
    //     this.src.copy('_LICENSE', 'LICENSE'),
    //     this.src.copy('_autoprefixer.yml', 'autoprefixer.yml'),
    //     this.src.copy('_favicon.ico', 'favicon.ico'),
    //     this.src.copy('_facebook-instant-feed.xml', ' facebook-instant-feed.xml'),
    //     this.src.copy('_atom.xml', 'atom.xml'),
    //     this.src.copy('_feed.xml', 'feed.xml'),
    //     this.src.copy('_sitemap.xml', 'sitemap.xml')
    //   }
    //
    //
    //   this.fs.copyTpl(
    //     this.src.copy('editorconfig', '.editorconfig'),
    //     this.src.copy('jshintrc', '.jshintrc'),
    //     this.src.copy('gitignore', '.gitignore'),
    //     this.src.copy('__config.yml', '_config.yml'),
    //     appArguments
    //   )
    //   this.copyTpl(
    //     this.templatePath('_package.json'),
    //     this.destinationPath('package.json'),
    //     appArguments
    //   )
    // }
    //
    // StaticGenerator.prototype.install = function install () {
    //   this.installDependencies({
    //     skipInstall: this.options['skip-install']
    //   })
    // }
//   }
// }())
