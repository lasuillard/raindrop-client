#!/usr/bin/env -S make -f

MAKEFLAGS += --warn-undefined-variable
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --silent

-include Makefile.*

SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help

help: Makefile  ## Show help
	for makefile in $(MAKEFILE_LIST)
	do
		@echo "$${makefile}"
		@grep -E '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' "$${makefile}" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'
	done


# =============================================================================
# Common
# =============================================================================
install:  ## Install deps and tools
	npm install
	pre-commit install --install-hooks
.PHONY: install

update:  ## Update deps and tools
	npm update
	pre-commit autoupdate
.PHONY: update

release:  ## Create new release
	echo -n 'Enter new version: '
	read new_version
	npm version "$$new_version"
.PHONY: release


# =============================================================================
# CI
# =============================================================================
ci: generate lint test  ## Run CI tasks
.PHONY: ci

generate:  ## Generate codes from schemas
	mkdir -p ./src/generated

	function sig() {
		find ./src/generated -type f -print0 | sort -z | xargs -0 sha1sum | sha1sum | awk '{ print $$1 }'
	}

	before="$$(sig)"
	npm run generate
	after="$$(sig)"

	if [[ "$$after" != "$$before" ]]; then
		echo 'There are changes in generated codes.'
		exit 1
	fi
.PHONY: generate

format:  ## Run autoformatters
	npm exec biome format --write .
.PHONY: format

lint: generate  ## Run all linters
	npm exec biome lint .
	npm exec tsc --noEmit
.PHONY: lint

test: generate  ## Run tests
	npm run test
.PHONY: test

test-refresh: generate  ## Invalidate recordings and run tests to update them
	rm -rf ./tests/__recordings__/*
	npm run test:unit --update
	npm run test:type
.PHONY: test-refresh

docs:  ## Generate dev documents
	npm run make-docs
.PHONY: docs


# =============================================================================
# Handy Scripts
# =============================================================================
clean:  ## Remove temporary files
	rm -rf coverage/ junit.xml dist/ tests/__typechecks__
	find . -path '*/__snapshots__*' -delete
	find . -path "*.log*" -delete
.PHONY: clean
