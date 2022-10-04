# POST /admin

## Modelo do JSON

  ### BODY

    {
      "email": "dudu_filho_silva@deliveryapp.com",
      "name": "Eduardo Filho da Silva e Silva",
      "password": "dudufss@123.com",
      "role": "seller"
    }

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjQyMzIyMTZ9.-BYwhychMvXhYHmOI8IUGbnl1faUWEA9YPXQSjaPIJs


## Resposta da API

  ### Caso de sucesso
    {
      "message": "Created"
    }


  ### Caso de usuário inválido

    {
      "message": "Unauthorized user"
    }

  
  ### Caso de usuário duplicado

    {
      "message": "Conflict"
    }