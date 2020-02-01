module.exports = {
  name: 'mock-data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mock-data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
