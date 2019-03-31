## Preview locally during development:

```
$ rstudio
> blogdown::serve_site()
```

Will auto-recompile on every change.

## Deploy

### Complete re-build:

```
$ rstudio
# Remove build directory (e.g. in RStudio -> Files)
> blogdown::build_site()
$ rsync -rtlPvi --delete public/ guavapi:www.viridian-project.org/
$ ssh -t guavapi sudo rsync -rtlPvi --delete --exclude=.well-known --exclude=piwik www.viridian-project.org/ /var/www/html/www.viridian-project.org/
```

### 

## Email obfuscation:

Email obfuscator script 2.1 by Tim Williams, University of Arizona
Random encryption key feature coded by Andrew Moulden
This code is freeware provided these four comment lines remain intact
A wizard to generate this code is at http://www.jottings.com/obfuscator/

Use https://stackoverflow.com/questions/748780/best-way-to-obfuscate-an-e-mail-address-on-a-website
to improve it.

Also: http://www.wmtips.com/tools/html-obfuscator/
