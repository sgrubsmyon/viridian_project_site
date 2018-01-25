## Deploy

```
$ rsync -rtlPvi --delete _site/ guavapi:www.viridian-project.org/
$ ssh -t guavapi sudo rsync -rtlPvi --delete www.viridian-project.org/ /var/www/html/www.viridian-project.org/
```

## Email obfuscation:

Email obfuscator script 2.1 by Tim Williams, University of Arizona
Random encryption key feature coded by Andrew Moulden
This code is freeware provided these four comment lines remain intact
A wizard to generate this code is at http://www.jottings.com/obfuscator/

Use https://stackoverflow.com/questions/748780/best-way-to-obfuscate-an-e-mail-address-on-a-website
to improve it.

Also: http://www.wmtips.com/tools/html-obfuscator/
