# GET /admin

## Modelo do JSON

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjQyMzIyMTZ9.-BYwhychMvXhYHmOI8IUGbnl1faUWEA9YPXQSjaPIJs


## Resposta da API

  ### Caso de sucesso
    [
      {
        "id": 1,
        "name": "Delivery App Admin",
        "email": "adm@deliveryapp.com",
        "password": "a4c86edecc5aee06eff8fdeda69e0d04",
        "role": "administrator"
      },
      {
        "id": 2,
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "password": "3c28d2b0881bf46457a853e0b07531c6",
        "role": "seller"
      },
      {
        "id": 3,
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "1c37466c159755ce1fa181bd247cb925",
        "role": "customer"
      },
      {
        "id": 4,
        "name": "Maju Domenciano",
        "email": "juliadomenciano@hotmail.com",
        "password": "057bd54522739f540e6a0a2d2d85bca6",
        "role": "customer"
      },
      {
        "id": 5,
        "name": "Eduartrdfgfgddo da Silva",
        "email": "dudgffdgftrgtrrtus@deliveryapp.com",
        "password": "3731fe744f8e0e6694ca2b5ac9b7fcbe",
        "role": "customer"
      }
    ]


  ### Caso de usuário inválido

    {
      "message": "Unauthorized user"
    }