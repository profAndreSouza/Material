# Projeto Prático: Rede Corporativa Segura com DMZ, VLANs e NAT

## Objetivo

Implementar uma rede corporativa com segmentação via VLANs, uma zona desmilitarizada (DMZ) para serviços públicos, controle de acesso com ACLs, e serviços como DHCP, DNS, Web e NAT para acesso à internet.


## Diagrama Lógico da Rede

```mermaid

graph TD
    ISP[Internet ISP]
    R1[Roteador Central - NAT, ACL e DHCP]
    SW_Core[Switch Core VLANs]
    SW_DMZ[Switch DMZ]

    VLAN10[PCs VLAN 10 - 192.168.10.0]
    VLAN20[PCs VLAN 20 - 192.168.20.0]
    VLAN30[PCs VLAN 30 - 192.168.30.0]

    DMZ_WEB[Web Server - 200.0.0.10]
    DMZ_DNS[DNS Server - 200.0.0.20]

    ISP --> R1
    R1 --> SW_Core
    R1 --> SW_DMZ

    SW_Core --> VLAN10
    SW_Core --> VLAN20
    SW_Core --> VLAN30

    SW_DMZ --> DMZ_WEB
    SW_DMZ --> DMZ_DNS


```


## Bloco 8 – Testes Funcionais

**Enunciado:** Verifique se os seguintes acessos estão funcionando conforme esperado:

| Origem         | Destino        | Serviço | Acesso Esperado | Justificativa                                   |
| -------------- | -------------- | ------- | --------------- | ----------------------------------------------- |
| VLAN 10        | Internet       | HTTP    | ✅               | Permitido pela ACL + NAT configurado            |
| VLAN 20        | Internet       | HTTP    | ✅               | Idem                                            |
| VLAN 30        | Internet       | HTTP    | ❌               | Bloqueado pela ACL 110                          |
| Todas as VLANs | DNS Server DMZ | DNS     | ✅               | Permitido na ACL 120                            |
| Todas as VLANs | Web Server DMZ | HTTP    | ✅               | Permitido na ACL 120                            |
| Internet       | Web Server DMZ | HTTP    | ✅               | O Web Server tem IP público e porta 80 liberada |

