module.exports = {
  plugins: [
    [
      'autoprefixer',
      {
        overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
      }
    ],
    [
      'postcss-px-to-viewport',
      {
        unitToConvert: 'px',
        viewportWidth: 320,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      }
    ]
  ],
};