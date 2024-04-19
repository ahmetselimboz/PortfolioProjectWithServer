require("dotenv").config();
var Minio = require("minio");
let instance = null;

const bucketExists = async (bucketName) => {
  try {
    const minioClient = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: Number(process.env.MINIO_PORT),
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    });

    const exists = await minioClient.bucketExists(bucketName);
    if (!exists) {
      await minioClient.makeBucket(bucketName, "us-east-1");
      console.log(`Bucket "${bucketName}" created in "us-east-1" region.`);
    } else {
      console.log(`Bucket "${bucketName}" already exists.`);
    }
  } catch (error) {
    console.error("Error creating bucket:", error);
  }
};

const base64ToImage = async (baseUrl, name) => {
  try {
    const bucket = "mybucket";
    var url;
    const minioClient = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: Number(process.env.MINIO_PORT),
      useSSL: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    });

    const imageBuffer = Buffer.from(baseUrl.split(",")[1], "base64");

    const client = await minioClient.putObject(
      bucket,
      name,
      imageBuffer,
      imageBuffer.length,
      "image/jpeg"
    );

    console.log(client);

    if (process.env.NODE_ENV == "debug") {
      url = process.env.DOMAIN + ":9000" + "/" + bucket + "/" + name;
    } else {
      url = process.env.DOMAIN + "/" + bucket + "/" + name;
    }

    return url;
  } catch (error) {
    console.log("base64ToImage Error: " + error);
  }
};

const RemoveImage = async (name) => {
  const bucket = "mybucket";
  var url;
  const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: Number(process.env.MINIO_PORT),
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
  });

  await minioClient.removeObject(bucket, name);
  console.log("Removed the object");
};

module.exports = { bucketExists, base64ToImage, RemoveImage };
