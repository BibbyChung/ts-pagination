workspace-up:
	docker run --rm -it -v $(PWD):/app:cached -w /app node:12.18 bash
	# docker run --rm -it -v $(PWD):/app:cached -w /app -p 4300:4200 teracy/angular-cli bash

# workspace-exec:
# 	docker exec -it ts-pagination-workspace bash