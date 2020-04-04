module.exports = {
  name: 'bible-book-blitz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bible-book-blitz',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
