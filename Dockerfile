FROM node:21-slim
WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT=3000
ENV MONGODB_CONNECTION_STRING=mongodb+srv://ahmetselimboz46:Aa...2003@selim.f75ymah.mongodb.net/Portfolio
ENV SESSION_SECRET=BVH,586*/_@+/,\MNXS124%^
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]