## Deploy

### Complete re-build:

```
> rmarkdown::clean_site()
> rmarkdown::render_site()
# Execute first code block in index.Rmd, alternatively run its code at R console
$ rsync -rtlPvi --delete _site/ guavapi:www.viridian-project.org/
$ ssh -t guavapi sudo rsync -rtlPvi --delete --exclude=.well-known --exclude=piwik www.viridian-project.org/ /var/www/html/www.viridian-project.org/
```

Takes quite some time, especially with `mathjax: local`, which means mathjax
must be downloaded.

For small changes, try to simply:

```
> rmarkdown::render_site()
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
