---
layout: default
title: About <%= site_author %>
description: <%= site_description %>
permalink: /about/<%= site_author.replace(/\s/g,'').toLowerCase() %>
categories: []
tags: [<%= site_keywords %>]
status: publish
type: page
published: true
meta: { <%= site_keywords %> }
---

## Bio
Lorem ipsum dolor sit amet, an vel liber electram definiebas. Ius te decore verterem cotidieque. Eos mediocrem intellegat ex, augue dicta mei et. Laudem populo te vim, no pri illum legere aperiri. Ne est omnium quaestio dissentias, et augue deleniti cum. Ne sed errem altera minimum, feugiat dissentiunt duo ut, eum ei nonumy feugiat senserit.

Vis case audiam sententiae eu. Vis eu falli ceteros lucilius. No mei eleifend elaboraret necessitatibus, vis natum fuisset dignissim cu. Sit duis epicuri praesent an, ius in malorum euripidis, ea mea everti commodo aliquip. Est an discere lobortis. Vim vide legere ne, porro euripidis ad nam.

<hr />

  <form id="contactform" method="POST" action="https://formspree.io/<%= site_email %>">
    <p><strong>Email Address</strong></p>
    <input type="email" name="_replyto" placeholder="Your email address" />

    <p><strong>Message</strong></p>
    <textarea placeholder="Your message" name="message"></textarea>
    <input type="hidden" name="_subject" value="New message from <%= site_url %>" />
    <br />
    <input type="submit" value="Submit" />
  </form>
