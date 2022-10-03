# PATCH /orders

## Modelo do JSON

  ### BODY

    {
      "id": 1,
      "status": "Entregue"
    }

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjM5NDkwNTl9.qwcWa_tW0ZSoU7CJXK_WlLIwO2qNoukpoc2vsAKc3V4


## Resposta da API

  ### Usuário não autorizado a atualizar com o status enviado
    {
      "message": "Unauthorized user"
    }


  ### Status enviado é igual o status do banco

    {
      "message": "Not updated"
    }


  ### Status atualizado

    "Status updated!"