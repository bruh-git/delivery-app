# GET /orders/user/:id

Procura por todas as vendas com base no id do usuário ('customer' ou 'seller')

## Modelo do JSON

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjM5NDkwNTl9.qwcWa_tW0ZSoU7CJXK_WlLIwO2qNoukpoc2vsAKc3V4


## Resposta da API

  [
    {
      "id": 1,
      "userId": 1,
      "sellerId": 2,
      "totalPrice": "1.60",
      "deliveryAddress": "Rua da Fulana",
      "deliveryNumber": "404",
      "saleDate": "2022-09-30T18:56:47.000Z",
      "status": "Pendente"
    },
    {
      ...
    }

  ]