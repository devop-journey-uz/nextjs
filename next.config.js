module.exports = {
  // Your existing Next.js configurations...
  // Add the exportPathMap function to define custom export paths if needed
  // (optional, but can be used for advanced configurations)
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add more paths if needed
    };
  },
  // Add the exportPathMap function to define custom export paths if needed
  // (optional, but can be used for advanced configurations)
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add more paths if needed
    };
  },
  // Add the trailingSlash option to specify whether to append trailing slashes to exported paths
  // (optional, but can be useful for compatibility with static hosting environments)
  trailingSlash: true, // Set to true or false as per your requirement
};
