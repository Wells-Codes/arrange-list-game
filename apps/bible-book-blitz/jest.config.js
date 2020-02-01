module.exports = {
  name: 'bible-book-blitz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bible-book-blitz',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
