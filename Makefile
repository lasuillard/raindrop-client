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
install:  ## Install the app locally
	pnpm install
.PHONY: install

init:  ## Initialize project repository
	pre-commit autoupdate
	pre-commit install --install-hooks --hook-type pre-commit
.PHONY: init


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
	pnpm run generate
	after="$$(sig)"

	if [[ "$$after" != "$$before" ]]; then
		echo 'There are changes in generated codes.'
		exit 1
	fi
.PHONY: generate

format:  ## Run autoformatters
	pnpm exec prettier --list-different --write .
	pnpm exec eslint --fix .
.PHONY: format

lint: generate  ## Run all linters
	pnpm exec prettier --check .
	pnpm exec eslint .
	pnpm exec tsc --noEmit
.PHONY: lint

test: generate  ## Run tests
	pnpm run test
.PHONY: test

docs:  ## Generate dev documents
	pnpm run make-docs
.PHONY: docs


# =============================================================================
# Handy Scripts
# =============================================================================
clean:  ## Remove temporary files
	rm -rf coverage/ junit.xml dist/
	find . -path '*/__snapshots__*' -delete
	find . -path "*.log*" -delete
.PHONY: clean
