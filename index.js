require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 9000;

const server = require("./users/server");

server.listen(PORT, () => {
  console.log(
    // eslint-disable-next-line no-undef
    `server is running! 🏃 on port ${PORT}, user is ${process.env.USER}!`
  );
});
