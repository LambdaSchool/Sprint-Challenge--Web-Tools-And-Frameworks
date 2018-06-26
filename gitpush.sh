♯!/bin/bash
git status
git add --all &&\
git commit -m "$(read -p 'Richard Verdier :Commit Description ')" && \
git push origin master &&
