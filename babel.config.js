module.exports = function(api) {
    api.cache(true);
  
    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-nullish-coalescing-operator',
      '@babel/plugin-transform-numeric-separator',
      '@babel/plugin-transform-optional-chaining'
    ];
  
    return {
      presets,
      plugins
    };
  }
  