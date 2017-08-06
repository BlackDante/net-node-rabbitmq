## Setup

First get and run rabbitmq docker image

```bash
docker run -d -p 5672:5672 -p 15672:15672  --name local-rabbit rabbitmq
```

Next, run .NET Core part

```bash
cd net/net-reciver
dotnet restore
dotnet run
```

Next run Node.js part

```bash
cd node
node send.js
```