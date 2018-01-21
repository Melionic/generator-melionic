/**
*
*  Generator Static
*  A Jekyll Static Site Generator 🕸️
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

  var chalk = require('chalk')

  exports.logo = function () {
    return console.log(
      // Avionic ASCII Text Logo
      chalk.cyan.bold('\n      ____ _____  _  _____ ___ ____  ')+
      chalk.cyan.bold('\n     / ___|_   _|/ \|_   _|_ _/ ___| ')+
      chalk.cyan.bold('\n     \\___ \\ | | / _ \\ | |  | | |     ')+
      chalk.cyan.bold('\n      ___) || |/ ___ \\| |  | | |___  ')+
      chalk.cyan.bold('\n     |____/ |_/_/   \\_\\_| |___\\____| ')+
      '\n' +
      chalk.cyan.bold('\n-- ') + chalk.yellow.bold('Propelling World-class Cross-platform Hybrid Applications') + chalk.cyan.bold(' -- ✈'))
  }

  exports.captain = function () {
    return console.log(
      // Avionic ✈ Captain John Doe ASCII art
      '\n' +
      chalk.red.bold('\n                             .---. ') +
      chalk.red.bold('\n                            /_ ') + chalk.cyan.bold('✈') + chalk.red.bold(' _\\') +
      chalk.white.bold("\n                            ( '_' )") +
      chalk.white.bold('\n                             \\_-_/') +
      chalk.red.bold('\n                       >>>___  ~  ___<<<')
    )
  }

  exports.crew = function () {
    return console.log(
      // Avionic ✈ Chief flight attendant Jane Smith ASCII art
      chalk.yellow.bold('\n                             .-- ') + chalk.cyan.bold('✈') + chalk.yellow.bold('') +
      chalk.yellow.bold('\n                            / /"\\ \\') +
      chalk.yellow.bold('\n                            )/') + chalk.cyan.bold('• •') + chalk.yellow.bold('\\(') +
      chalk.yellow.bold('\n                           ( ') + chalk.white.bold('( - )') + chalk.yellow.bold(' )') +
      chalk.yellow.bold('\n                            )') + chalk.red.bold('_') + chalk.yellow.bold('') + chalk.white.bold(') (') + chalk.yellow.bold('') + chalk.red.bold('_') + chalk.yellow.bold('(') +
      chalk.white.bold("\n                           /'") + chalk.red.bold('\\') + chalk.red.bold('   /') + chalk.white.bold("'\\") +
      chalk.white.bold('\n                          /,') + chalk.red.bold('(_\\_/_)') + chalk.white.bold(',\\') +
      chalk.white.bold('\n                          \\\\ ') + chalk.red.bold('\\ ') + chalk.cyan.bold('✈') + chalk.red.bold(' /') + chalk.white.bold(' //')
    )
  }

  exports.plane = function () {
    return console.log(
      // Avionic ✈ Aircraft ASCII art
      chalk.red.bold('\n                         ___________') +
      chalk.red.bold('\n                              |') +
      chalk.red.bold('\n                         _   _|_   _') +
      chalk.red.bold('\n                        (_)-/ ') + chalk.cyan.bold('✈') + chalk.red.bold(' \\-(_)') +
      chalk.red.bold('\n _                         /\\___/\\                         _') +
      chalk.red.bold('\n(_)_______________________( ( ') + chalk.white.bold('•') + chalk.red.bold(' ) )_______________________(_)') +
      chalk.red.bold('\n                           \\_____/\n') +
      '\n'
    )
  }
}())
