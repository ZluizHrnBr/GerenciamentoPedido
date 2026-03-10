# Gerenciamento de Pedidos

Este documento descreve as funcionalidades e endpoints de uma API para um sistema de **gerenciamento de pedidos**, permitindo criar, consultar e deletar pedidos. Além disso, para a documenetar os endpoints desse sistema, foi utilizado o Postman para testar e validar os endpoints criados.

---

## Funcionalidades

O sistema oferece as seguintes operações:

1. Criar novo pedido
2. Listar pedido por `orderId`
3. Listar todos os pedidos
4. Deletar pedido por `id`

---

## 1. Criar Novo Pedido

**Endpoint:**  

**Descrição:**  
Cria um novo pedido no sistema.

**Parâmetros (JSON Body):**

| Campo             | Tipo     | Descrição                          |
|------------------|---------|-----------------------------------|
| numeroPedido      | string  | Número do pedido                   |
| valor             | number  | Valor total do pedido              |
| itens             | array   | Lista de itens do pedido           |
| itens.produto     | string  | Nome do produto                    |
| itens.quantidade  | number  | Quantidade do produto              |
| itens.precoUnitario | number | Preço unitário do produto         |


# Documentação da API

<img width="1918" height="1021" alt="Captura do Postman 1" src="https://github.com/user-attachments/assets/9bcef7f8-31d4-4968-a848-575e9f14b764" />

<img width="1918" height="1021" alt="Captura do Postman 2" src="https://github.com/user-attachments/assets/2f652bbc-3727-4f54-8b9d-88c025785549" />

<img width="1918" height="1020" alt="Captura do Postman 3" src="https://github.com/user-attachments/assets/c4c5317c-05b3-488b-8a7f-4a074d9fb695" />

<img width="1918" height="1021" alt="Captura do Postman 4" src="https://github.com/user-attachments/assets/c32f0ac4-b3d2-488c-8a6f-011af7d830b1" />

**Exemplo de Body:**
```json
{
  "numeroPedido": "12345",
  "valor": 250.00,
  "itens": [
    {
      "produto": "Camiseta",
      "quantidade": 2,
      "precoUnitario": 50.00
    }
  ]
}
# Exemplo de Resposta
{
  "orderId": "uuid-gerado",
  "numeroPedido": "12345",
  "valor": 250.00,
  "itens": [
    {
      "produto": "Camiseta",
      "quantidade": 2,
      "precoUnitario": 50.00
    }
  ],
  "createdAt": "2026-03-09T20:00:00Z"
}
<img width="1918" height="1021" alt="Captura do Postman 1" src="https://github.com/user-attachments/assets/9bcef7f8-31d4-4968-a848-575e9f14b764" />

# Listar Pedidos
GET /orders/:orderId

{
  "orderId": "uuid-exemplo",
  "numeroPedido": "12345",
  "valor": 250.00,
  "itens": [
    {
      "produto": "Camiseta",
      "quantidade": 2,
      "precoUnitario": 50.00
    }
  ],
  "createdAt": "2026-03-09T20:00:00Z"
}
<img width="1918" height="1021" alt="Captura do Postman 2" src="https://github.com/user-attachments/assets/2f652bbc-3727-4f54-8b9d-88c025785549" />

# Listar todos os Pedidos
GET /orders
[
  {
    "orderId": "uuid1",
    "numeroPedido": "12345",
    "valor": 250.00,
    "itens": [ ... ],
    "createdAt": "2026-03-09T20:00:00Z"
  },
  {
    "orderId": "uuid2",
    "numeroPedido": "12346",
    "valor": 100.00,
    "itens": [ ... ],
    "createdAt": "2026-03-09T21:00:00Z"
  }
]
<img width="1918" height="1020" alt="Captura do Postman 3" src="https://github.com/user-attachments/assets/c4c5317c-05b3-488b-8a7f-4a074d9fb695" />

# Deletar pedido
DELETE /orders/:id

{
  "message": "Pedido deletado com sucesso",
}
<img width="1918" height="1021" alt="Captura do Postman 4" src="https://github.com/user-attachments/assets/c32f0ac4-b3d2-488c-8a6f-011af7d830b1" />







 
