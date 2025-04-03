REPO_NAME ?= $(shell basename "$$(git rev-parse --show-toplevel)")
TAG ?= $(shell git rev-parse --short HEAD)

# inclide the env variables
ifneq (,$(wildcard .env))
	include .env
	export
endif


# build the docker image
.PHONY: build
build:
	docker build -t "$(REPO_NAME):$(TAG)" .
	@echo ---
	@echo "Image size: $(shell docker image ls | awk '$$1 == "$(REPO_NAME)" {print $$7}')"
	@echo ---


# run the compiled docker image
.PHONY: run
run: build
	docker run --env-file .env -p 3000:3000 "$(REPO_NAME):$(TAG)"


# build and push the docker image to the remote repository
.PHONY: package
package: build
	docker tag "$(REPO_NAME):$(TAG)" "ghcr.io/jake-landersweb/$(REPO_NAME):$(TAG)"
	docker push "ghcr.io/jake-landersweb/$(REPO_NAME):$(TAG)"


# develop
.PHONY: dev
dev:
	npm run dev