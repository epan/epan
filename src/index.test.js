let fs = require("fs");

let readJson = (path, cb) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err) cb(err);
    else cb(null, JSON.parse(data));
  });
};

it("uses expected bin config in package.json", done => {
  readJson("../package.json", (err, json) => {
    expect(json.bin).toEqual({ epan: "./src/index.js" });
    done(err);
  });
});
