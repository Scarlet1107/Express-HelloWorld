// Expressモジュールをインポート
const express = require('express');
const app = express();

// ルートURLにアクセスされたときに実行される処理
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 9000ポートでサーバを起動
app.listen(9000, () => {
  console.log('Application is running on http://localhost:9000');
});
