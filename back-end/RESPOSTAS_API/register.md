# POST /register

## Modelo do JSON

    {
      "email": "fulana@deliveryapp.com",
      "name": "Eduartrdfgfgddo da Silva",
      "password": "fulana@123"
    }


## Resposta da API

    {
      "message": "Created",
      "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZGdmZmRnZnRydHVzQGRlbGl2ZXJ5YXBwLmNvbSIsIm5hbWUiOiJFZHVhcnRyZGZnZmdkZG8gZGEgU2lsdmEiLCJpYXQiOjE2NjQyMTkwNzd9.TvstRsTaiBomhiFzhnohIR-D4Xt5PUJG_lIXX8svmeo",
        "role": "customer"
      }
    }