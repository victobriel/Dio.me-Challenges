# Challenger: Script de criação de estrutura de usuários, diretórios e permissões

#### Diretórios:

-   /publico
-   /adm
-   /ven
-   /sec

#### Grupos:

-   GRP_ADM
-   GRP_VEN
-   GRP_SEC

#### Usuários:

-   carlos (GRP_ADM)
-   maria (GRP_ADM)
-   joao (GRP_ADM)
-   debora (GRP_VEN)
-   sebastiana (GRP_VEN)
-   roberto (GRP_VEN)
-   josefina (GRP_SEC)
-   amanda (GRP_SEC)
-   rogerio (GRP_SEC)

#### Definições:

-   Excluir diretórios, arquivos, grupos e usuários criados anteriormente;
-   Todo provisionamento deve ser feito em **um** arquivo do tipo **Bash Script**
-   O dono de todos os diretórios criados será o usuário root;
-   Todos os usuários terão permissão total dentro do diretório **publico**;
-   Os usuários de cada grupo terão permissão total dentro de seu respectivo diretório;
-   Os usuários não poderão ter permissão de leitura, escrita e execução em diretórios de departamento que eles não pertencem;
-   Subir o arquivo de script criado para sua conta no GitHub.
