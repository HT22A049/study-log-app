// サーバー設定
const express = require('express')
// ポート番号の指定
const PORT = process.env.PORT || 3000;

const cors = require('cors');

const app = express();

const logs = [{
	"id": 1,
	"message": "test"
}];

// cors という middleware を追加
app.use(cors())

// JSON を受け取る設定
app.use(express.json())

// エンドポイントの作成
app.get('/logs', (req, res) => {
	res.json(logs)
})

// logs のエンドポイント
app.post('/logs', (req, res) => {
	if (!req.body.message) {
		return res.status(400).json({error: 'message is required'});
	}

	const newLog = {
		id: logs.length + 1,
		...req.body
	};

	logs.push(newLog);
	res.json(newLog);
})

// ポート番号3000でサーバーを起動
app.listen(PORT, () => {
	console.log('Server listening on port 3000');
});
