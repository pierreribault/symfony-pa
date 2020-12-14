FROM devwithlando/php:7.4-fpm-2

RUN mkdir /run/sshd \
    && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && echo root:password | chpasswd \
    && service ssh reload
