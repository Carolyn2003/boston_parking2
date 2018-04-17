IMAGE_NAME := boston-parking
DOCKER_FNAME := Dockerfile
SELINUX := :z

help:
		@echo "make build - Build and locally tag a new docker image."
		@echo "make build-force - Use a no-cache build"
		@echo "make run - Run the new image in the background."

build: 
		@docker build --file=$(DOCKER_FNAME) . -t $(IMAGE_NAME)

build-force:
		@docker pull fedora
		@docker build --file=$(DOCKER_FNAME) --no-cache . -t $(IMAGE_NAME)

run:
		@docker run -d -p 8080:80 $(IMAGE_NAME)

