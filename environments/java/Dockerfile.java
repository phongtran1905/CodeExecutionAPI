FROM openjdk:24-slim-bullseye

WORKDIR /tmp/java

COPY ./execution.sh .

RUN chmod +x execution.sh

ENTRYPOINT ["/bin/sh", "-c", "javac $FILE && ./execution.sh"]
