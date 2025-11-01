### API de cadastro de notícias com Express e MongoDB

Instalando dependências:

```
npm install
```

Compilando localmente:

```
npm run build
```

Executando localmente (após build):

```
npm start
```

Executando com Docker (modo de desenvolvimento)

1. Construir e subir com Docker Compose (cria também um container MongoDB):

```powershell
# no Windows PowerShell
docker-compose up --build
```

Isso inicia a aplicação em modo `development` usando `ts-node-dev` (live-reload).

O serviço do Mongo é exposto no host na porta 27917 (mapeada para 27017 do container).

2. Acessar a API:

```
http://localhost:3050/api/v1/news
```

3. Health endpoint (usado para healthchecks):

```
http://localhost:3050/health
```

4. Para rodar em background:

```powershell
docker-compose up --build -d
```

5. Para parar e remover containers:

```powershell
docker-compose down
```
