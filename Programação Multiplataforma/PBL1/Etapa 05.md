## Grafana

```bash
sudo docker run -d --name grafana -p 3000:3000 grafana/grafana
```

## Node.js (backend)

```bash
sudo docker run -d --name nodejs -p 3001:3000 -v $(pwd)/node-app:/usr/src/app -w /usr/src/app node:20 npm start
```

> Espera que você tenha uma aplicação Node dentro da pasta `node-app`

## MySQL

```bash
sudo docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=app_db -p 3306:3306 
```

> Troque a senha `root123` em produção


## React (frontend)

```bash
sudo docker run -d --name react -p 3002:3000 -v $(pwd)/react-app:/app -w /app node:20
```

> Espera que seu projeto React já esteja criado na pasta `react-app`


## Dica importante (AWS / EC2)

Não esqueça de liberar as portas no **Security Group** da sua instância:

* 1883 → MQTT
* 3000 → Grafana
* 3001 → Node
* 3002 → React
* 3306 → MySQL (cuidado: evite liberar para 0.0.0.0 em produção)
