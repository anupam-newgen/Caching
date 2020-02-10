FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN chmod +x /app/entrypoint.sh
# CMD ["npm", "start"] //uncomment it and remove all after COPY . /app
ENTRYPOINT  ["sh","./entrypoint.sh"]