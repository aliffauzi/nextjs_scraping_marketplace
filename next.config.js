// next.config.js
module.exports = {
  experimental: {
    headers() {
      return [
        {
          source: "/:all*",
          headers: [
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubdomains; preload",
            },
          ],
        },
      ];
    },
  },
};
