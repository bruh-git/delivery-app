# POST /register

## Modelo do JSON

    {
    "email": "dudu_silva@deliveryapp.com",
    "name": "Eduardo da Silva e Silva",
    "password": "duduss@123.com"
    }


## Resposta da API

  ### Caso de Sucesso

    {
      "message": "Created",
      "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR1ZHVfc2lsdmFAZGVsaXZlcnlhcHAuY29tIiwibmFtZSI6IkVkdWFyZG8gZGEgU2lsdmEgZSBTaWx2YSIsImlhdCI6MTY2NDI5OTg2Mn0.x9jLfFSKbf7aS7gJ1eefIwYFcD9oVLI-H7z8JkEw4P0",
        "role": "customer",
        "name": "Eduardo da Silva e Silva",
        "email": "dudu_silva@deliveryapp.com"
      }
    }

  ### Tentativa de registro duplicado

    {
      "message": "Conflict"
    }