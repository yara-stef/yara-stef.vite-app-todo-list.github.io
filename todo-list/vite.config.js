

const config = () => ({
  server: {
    hmr: {
      clientPort: ({}).HMR_HOST ? 443 : 5173,
      host: ({}).HMR_HOST
        ? new URL(({}).HMR_HOST).hostname
        : "localhost",
    },
  },
});

export default config;