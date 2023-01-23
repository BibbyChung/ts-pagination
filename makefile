workspace-up:
	docker run --rm -it -v $(PWD):/app:cached -w /app node:12.18 bash
