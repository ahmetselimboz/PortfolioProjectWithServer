FROM node:21-slim
WORKDIR /opt/portfolio-project-with-server
COPY . .
ENV PORT=3000
ENV MONGODB_CONNECTION_STRING=mongodb+srv://ahmetselimboz46:Aa...2003@selim.f75ymah.mongodb.net/Portfolio
ENV SESSION_SECRET=BVH,586*/_@+/,\MNXS124%^
EXPOSE 3000
RUN npm install
CMD [ "node", "app.js" ]