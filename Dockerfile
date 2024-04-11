FROM node:21-slim
WORKDIR /app
COPY package.json ./
ENV PORT 5000
ENV MONGODB_CONNECTION_STRING "mongodb+srv://ahmetselimboz46:Aa...2003@selim.f75ymah.mongodb.net/Portfolio?retryWrites=true&w=majority"
ENV SESSION_SECRET BVH,586*/_@+/,\MNXS124%^
ENV USER ahmetselimboz26@gmail.com
ENV PASS C2OHqYbNUMRgIQJX
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "app.js" ]