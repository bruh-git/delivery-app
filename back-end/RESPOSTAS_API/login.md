# POST /login

## Modelo do JSON

    {
    "email": "adm@deliveryapp.com",
    "password": "--adm2@21!!--"
    }


## Resposta da API

  ### Caso de Sucesso

    {
      "id": 1,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbUBkZWxpdmVyeWFwcC5jb20iLCJuYW1lIjoiRGVsaXZlcnkgQXBwIEFkbWluIiwiaWF0IjoxNjY0MzAwMzU5fQ.1lbX4NstsNZHzYJC87WfK7MlWxFK93_gSs4ZWxWbS6k",
      "role": "administrator",
      "name": "Delivery App Admin",
      "email": "adm@deliveryapp.com"
    }


  ### Caso de informação passada errada

    {
      "message": "Email or password incorrect"
    }