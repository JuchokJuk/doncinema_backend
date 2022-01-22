module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b43721e37ceb95fd82a400b4583e93a'),
  },
});
