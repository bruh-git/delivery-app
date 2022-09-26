# GET /orders/:id

## Modelo do JSON

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjM5NDkwNTl9.qwcWa_tW0ZSoU7CJXK_WlLIwO2qNoukpoc2vsAKc3V4


## Resposta da API

    {
      "id": 1,
      "userId": 1,
      "sellerId": 2,
      "totalPrice": "1.60",
      "deliveryAddress": "Rua da Fulana",
      "deliveryNumber": "404",
      "saleDate": "1995-01-13T03:00:00.000Z",
      "status": "Pendente",
      "products": [
        {
          "id": 1,
          "name": "Skol Lata 250ml",
          "price": "2.20",
          "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg",
          "SaleProduct": {
            "quantity": 3
          }
        },
        {
          "id": 4,
          "name": "Brahma 600ml",
          "price": "7.50",
          "urlImage": "http://localhost:3001/images/brahma_600ml.jpg",
          "SaleProduct": {
            "quantity": 2
          }
        }
      ]
    }