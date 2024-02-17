FROM node:21-slim
WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT=3000
ENV MONGODB_CONNECTION_STRING=mongodb+srv://ahmetselimboz46:Aa...2003@selim.f75ymah.mongodb.net/Portfolio
ENV SESSION_SECRET=BVH,586*/_@+/,\MNXS124%^
ENV USER=ahmetselimboz26@gmail.com
ENV PASS=Ahmet+401292
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]