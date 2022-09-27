# delete /admin/:id

## Modelo do JSON

  ### HEADERS

    Authorization(token) = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJpYXQiOjE2NjQyMzIyMTZ9.-BYwhychMvXhYHmOI8IUGbnl1faUWEA9YPXQSjaPIJs


## Resposta da API

  ### Caso de sucesso

  **Não possui retorno**, apenas status 204.


  ### Caso de usuário inválido

    {
      "message": "Unauthorized user"
    }