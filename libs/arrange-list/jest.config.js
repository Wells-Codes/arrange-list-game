module.exports = {
  name: 'arrange-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/arrange-list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
