import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
    },
    {
      id: 2,
      name: "table glass",
      price: 300,
    },
    {
      id: 3,
      name: "table plastic",
      price: 400,
    },
    {
      id: 4,
      name: "table metal",
      price: 500,
    },
    {
      id: 4,
      name: "table polyester",
      price: 600,
    },
  ];

  //   http://localhost:3000/api/products?search=metal

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running ${port}`);
});
