workspace-up:
	docker run --rm -it -v $(PWD):/app:cached -w /app node:16.19-alpine bash
