module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4dd5b54949b5dd50ba1c63bd838a3fd4'),
  },
});
