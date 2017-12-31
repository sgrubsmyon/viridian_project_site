## Deploy

```
$ rsync -rtlPvi _site guavapi:.
$ ssh -t guavapi sudo rsync -rtlPvi _site/ /var/www/html/
```
