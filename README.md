# boston_parking2

## Using the docker container

Ensure you have [docker installed](https://www.docker.com/community-edition). When you have docker, make sure you have make installed (typically comes with any development environment).  Once you do, then you can:

```
make build
make run
```

If you don't have make, you can also:

```
cd <to where the Dockerfile is>
docker build -t boston-parking . 
docker run -d -p 8080:80 boston-parking
```

The website will now be running at [http://localhost:8080](http://localhost:8080).  
