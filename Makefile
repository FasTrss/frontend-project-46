install-deps:
	npm ci

install: install-deps
	npx simple-git-hooks

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test