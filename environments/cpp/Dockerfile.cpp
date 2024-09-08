FROM gcc:10

WORKDIR /tmp/cpp

ENTRYPOINT [ "/bin/sh", "-c", "g++ $FILE && ./a.out" ]