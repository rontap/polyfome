# Polyfome
uses google's polymer, jquery and modern webbrowsers!
##Usage
You can choose between two main structures:

### Using core-only
This will require you to include the inlcude_minimalist.html like this:
    <link rel="import" href="include_minimalist.html">
This will result in a basic, yet powerful basis: you can use Material design, Polymer and polyfome core functions without having to redesign the whole site. It is also useful for APIs (eg. player.html) and pages that require special design.

### Using full-power
If you want to use the full power of Polyfome first, you have to include the main file that does the work:  
    <link rel="import" href="include.html">  
But you have to specify several things in a script. The main object is called *fome*. 
**compulsory**
    **variable type   |explonation**  
    |--------- ------- -------------------------------------|
     fome.link array  |gives a title to the navigation links|