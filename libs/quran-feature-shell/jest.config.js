module.exports = {
  name: 'quran-feature-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/quran-feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
