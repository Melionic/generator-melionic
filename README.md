<p align="center">
  <img src="images/melionic.png" alt="Melionic Logo" title="Melionic Logo">
</p>


### Introducing 🐺 Melionic

#### A Yeoman static site and blog generator that helps you kickstart highly sophisticated Jekyll projects.

Melionic is a lightweight, intuitive and ultra-responsive CSS framework to speed up your Digital and Mobile Web development needs.

Simply designed to fit your web life.

<a href="https://github.com/reedia/Melionic/archive/v1.0.35.zip">Download Melionic CSS</a>

[![npm version](https://badge.fury.io/js/Melionic.svg)](https://badge.fury.io/js/Melionic)
[![Packagist](https://img.shields.io/badge/license-MIT-blue.svg)](https://Melionic.github.io/license)
[![Github Releases](https://img.shields.io/github/downloads/atom/atom/latest/total.svg)](https://github.com/reedia/Melionic)


## Table of contents

-   [Getting Started](#getting-started)
-   [What's in the box](#whats-in-the-box)
-   [Alternate CDNs](#alternate-cdns)
-   [Built With](#built-with)
-   [Contributing](#contributing)
-   [Code of Conduct](#code-of-conduct)
-   [Our Values](#our-values)
-   [History](#history)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Getting Started

A few options are available:

-   Download the latest [release](https://github.com/reedia/Melionic/archive/v1.0.35.zip)
-   Or simply clone the main repo: `git clone https://github.com/reedia/Melionic.git`

## What's in the box

Within the release you'll find the following directory and external style sheets with both compiled and minified CSS variations:

```
Melionic/
├── Melionic-1.0.35.css
├── Melionic.min-1.0.35.css
├── Melionic-colours-1.0.35.css
├── Melionic-colours.min-1.0.35.css
├── Melionic-pattern-1.0.35.css
├── Melionic-pattern.min-1.0.35.css
```

You simply then need to link one of these in your HTML document.

The link consists of just a simple line of HTML code that you will need to put in the ```<head>```  section of your HTML document:

#### Default CSS

```
<link rel="stylesheet" type="text/css" href="Melionic.min-1.0.35.css" />
```

#### CSS Responsive Grid-View
```
<link rel="stylesheet" type="text/css" href="Melionic-pattern.min-1.0.35.css" />
```

#### CSS Colours
```
<link rel="stylesheet" type="text/css" href="Melionic-colours.min-1.0.35.css" />
```

We offer production-ready versions and use unpkg as our CDN to link to the latest production version

```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/Melionic" />
```

## Alternate CDNs
The following table lists alternate CDNs where Melionic is hosted.

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| [unpkg](https://unpkg.com/) | https://unpkg.com/Melionic@1.0.35/dist/Melionic.min-1.0.35.css | Yes | No |
|  [jsDelivr](https://www.jsdelivr.com/) | https://cdn.jsdelivr.net/npm/Melionic/dist/Melionic.min-1.0.35.css  | Yes | Yes |
| [RawGit](http://rawgit.com/) | https://cdn.rawgit.com/reedia/Melionic/cd0aca0e/dist/Melionic.min-1.0.35.css | Yes | No |



## Built With
-   [Gulp](https://gulpjs.com/) - The streaming build system
-   [Stylus](http://stylus-lang.com/) - Expressive, robust, feature-rich CSS language built for nodejs
-   [CSScomb](http://csscomb.com/) - CSS coding style formatter

## Contributing

Please read carefully through our [Contributing Guidelines](https://github.com/reedia/Melionic/blob/master/CONTRIBUTING.md) for further details on the process for submitting pull requests to us.

## Code of Conduct
We are committed to preserving and fostering a diverse, welcoming community. Please read our [Code of Conduct](https://github.com/reedia/Melionic/blob/master/CODE_OF_CONDUCT.md).

## Our Values
1.  We believe perfection must consider everything.
2.  We take our passion beyond Code into our daily practices.
3.  We are just obsessed about creating and delivering exceptional solutions.

## History

*   See [Melionic Release](https://github.com/reedia/Melionic/releases) list.


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/reedia/Melionic/blob/master/LICENSE) file for details

## Acknowledgments

[Melionic](https://Melionic.io) is beautifully crafted by these people and a bunch of awesome [contributors](https://github.com/reedia/Melionic/graphs/contributors)

[![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=117)](http://sebastienrousseau.com) |
|:---:
[Sebastien Rousseau](https://github.com/sebastienrousseau) |

Credit also goes to the following source code libraries:
-   [Normalize.css](http://necolas.github.io/normalize.css/) - A modern, HTML5-ready alternative to CSS resets to fix cross-browser compatibility issues.
-   [Skeleton](http://www.getskeleton.com) - A Dead Simple, Responsive Boilerplate
-   [Wing](http://usewing.ml/) - A beautiful CSS framework designed for minimalists.

## About thoughtbot
----------------

![thoughtbot](http://presskit.thoughtbot.com/images/thoughtbot-logo-for-readmes.svg)

Laptop is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We are passionate about open source software.
See [our other projects][community].
We are [available for hire][hire].

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com?utm_source=github