## INFO

This repository is here to test that multiple files in `test_path` in `browserstack.json` works on different platforms. See [browserstack-runner issue](https://github.com/browserstack/browserstack-runner/issues/158)

These tests have been copied from [qunit](https://github.com/qunitjs/qunit) repository.
Added a simple test in `test/sample.js` and added `browserstack.json` with `sample.html` and `index.html` in `test_path` as an array

## TEST

- `npm install`
- `npm test`

OR

- `npm install -g browserstack-runner`
- `browserstack-runner`
