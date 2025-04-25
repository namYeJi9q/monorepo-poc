const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// 더미 데이터
let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
  { id: 3, name: "Item Three" },
];

// 전체 조회
app.get("/items", (req, res) => {
  res.json(items);
});

// 단건 조회
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === +req.params.id);
  if (item) return res.json(item);
  res.status(404).json({ error: "Not found" });
});

// 생성
app.post("/items", (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Mock backend running at http://localhost:${PORT}`)
);
