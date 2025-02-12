# How to enable SSL

https://www.youtube.com/watch?v=wzbf9ldvBjM

01. create a ssl folder 

02. private-key = openssl genrsa -out ssl/private.key 2048

03. public-key = openssl rsa -in ssl/private.key -pubout -out ssl/public.key 

04. CSR = openssl req -new -key ssl/private.key -out certificate.csr

05. verfiy = openssl req -text -in ssl/certificate.csr -noout -verify

06. CRT - self-signed-certificate =  openssl x509 -in certificate.csr -out certificate.ctr -req -signkey ssl/private.key -days 365  