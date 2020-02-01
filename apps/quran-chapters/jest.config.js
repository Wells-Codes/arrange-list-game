module.exports = {
  name: 'quran-chapters',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/quran-chapters',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
