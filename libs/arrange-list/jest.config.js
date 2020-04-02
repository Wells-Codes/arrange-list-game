module.exports = {
  name: 'arrange-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/arrange-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
