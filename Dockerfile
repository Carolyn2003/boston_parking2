FROM fedora
RUN dnf install -y httpd
ADD . /var/www/html/
EXPOSE 80

CMD [ "/usr/sbin/httpd", "-X"]
