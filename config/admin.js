module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e4cea2915528a78d1122cb72403a1fa'),
  },
});
