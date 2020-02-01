module.exports = {
  name: 'shared-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/list',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
