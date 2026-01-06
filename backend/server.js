// サーバー設定
const express = require('express')
// ポート番号の指定
const PORT = process.env.PORT || 3000;

const app = express();

const logs = [{
	"id": 1,
	"message": "test"
}];

// エンドポイントの作成
app.get('/logs', (req, res) => {
	res.json(logs)
})

// ポート番号3000でサーバーを起動
app.listen(PORT, () => {
	console.log('Server listening on port 3000');
});
