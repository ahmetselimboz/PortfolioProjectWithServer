const base64 = async (name, buffer) => {
  const photoDataUri = `data:${
    req.files[0].mimetype
  };base64,${req.files[0].buffer.toString("base64")}`;
};

module.exports = base64;
