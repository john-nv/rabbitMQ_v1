module.exports = {
  apps: [
    {
      name: "BE_handle",
      script: "./src/app.js",
      autorestart: true,
      max_memory_restart: "10G",
    },
  ],
};
