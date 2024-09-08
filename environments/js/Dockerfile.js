FROM node:slim

WORKDIR /tmp/js

ENTRYPOINT ["/bin/sh", "-c", "node $FILE"]