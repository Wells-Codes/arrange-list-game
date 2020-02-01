module.exports = {
  name: 'bbb-feature-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bbb-feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
