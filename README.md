polyfome 1.1.2
========
Google's Polymer is a really great API, but for some it might be too complicated, or others may find it too hard to start.
Polymer For Me (polyfome) is a solution for that. If used with polymer, it links and builds automatically the page.
example: http://elemential.net/polyfome/test.html

*Note* This version is only for internal elemential use. It does not work like an API yet
Recent Changes 
=

bugfix: Polymer didnt load on http protocol.
added: p2p chat beta functionality
added: basic support for packages
=======
1.1.2
extended: chat works w/ cryptoblog, but errors occur
modified: chat split into css and html
added: app-icon tag
bugfix: include_minimalist now works w/ http

1.1.1
added: chat now almost works  
added: app-icon tag to tag.html  
bugfix:removed platform.js from include  
fix: loading imgs in shadow DOM  

1.1.0
bugfix: Polymer did'nt load on http protocol.  
added: p2p chat beta functionality  
added: basic support for packages  


Features
========
+ Loads Google's polymer
+ 2 designs, interchangable
+ central 9-dot menu
+ music player
+ URL shortener
+ p2p chat *(in development)*

*Note* You'll need a version of Polymer (included in a tar.gz) in the 2nd root folder of your project. Like this:

>
a/b/your_project  
a/polyfome  
a/polymer  
