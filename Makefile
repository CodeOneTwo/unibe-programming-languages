
# A help function from https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.DEFAULT_GOAL := help

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


SOURCES = $(wildcard */*.md)
OBJS = $(patsubst %.md,%.pdf,$(SOURCES))

create-pdfs: clean $(OBJS) ## create pdfs

$(OBJS): %.pdf: %.md
	pandoc -o $@ $<

clean: ## remove old files
	rm -f $(OBJS)
