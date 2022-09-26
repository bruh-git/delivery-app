# POST /orders

## Modelo do JSON

  ### BODY

    {
      "sale": {
        "userId": 1,
        "sellerId": 2,
        "totalPrice": 1.6,
        "deliveryAddress": "Rua da Fulana",
        "deliveryNumber": "404",
        "saleDate": "1995-01-13 01:00:00"
      },
      "products": [
        {
          "id": 1,
          "quantity": 2
        },
        {
          "id": 3,
          "quantity": 4
        },
        {
          "id": 2,
          "quantity": 5
        }
      ]
    }

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjM5NDkwNTl9.qwcWa_tW0ZSoU7CJXK_WlLIwO2qNoukpoc2vsAKc3V4


## Resposta da API

    {
      "saleId": 9
    }