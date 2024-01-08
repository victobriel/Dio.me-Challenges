#!/bin/bash

echo "Criando os diretórios"

mkdir /publico -v
mkdir /adm -v
mkdir /ven -v
mkdir /sec -v

echo "Criando grupos"

groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "Criando usuários"

useradd carlos -c "Carlos" -G GRP_ADM -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd maria -c "Maria" -G GRP_ADM -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd joao -c "Joao" -G GRP_ADM -m -s /bin/bash -p $(openssl passwd -crypt 123456)

useradd debora -c "Debora" -G GRP_VEN -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd sebastiana -c "Sebastiana" -G GRP_VEN -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd roberto -c "Roberto" -G GRP_VEN -m -s /bin/bash -p $(openssl passwd -crypt 123456)

useradd josefina -c "Josefina" -G GRP_SEC -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd amanda -c "Amanda" -G GRP_SEC -m -s /bin/bash -p $(openssl passwd -crypt 123456)
useradd rogerio -c "Rogerio" -G GRP_SEC -m -s /bin/bash -p $(openssl passwd -crypt 123456)

echo "Excluindo grupos de usuários"

grouddel carlos -v -f
grouddel maria -v -f
grouddel joao -v -f
grouddel debora -v -f
grouddel sebastiana -v -f
grouddel roberto -v -f
grouddel josefina -v -f
grouddel amanda -v -f
grouddel rogerio -v -f

echo "Aplicando permissões"

chown root:GRP_ADM /adm -v
chown root:GRP_VEN /ven -v
chown root:GRP_SEC /sec -v

chmod 777 /publico -v
chmod 770 /adm -v
chmod 770 /ven -v
chmod 770 /sec -v

echo "Script finalizado!"
