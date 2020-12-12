module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@domain': './src/domain',
          '@infrastructure': './src/infrastructure',
          '@interface': './src/interface'
        }
      }
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
