using Control_Clientes.Model;
using Control_Clientes.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Convert.Implementations
{
    public class ConvertClientSent : IParse<Client, ClientVO>, IParse<ClientVO, Client>
    {
        public ClientVO Convert(Client sorce)
        {
            return new ClientVO
            {
                NumberOfDevices = 0,
                Email = sorce.Email,
                Id = sorce.Id,
                Phone = sorce.Phone,
                Name = sorce.Name,
             
            };
        }

        public List<ClientVO> Convert(List<Client> sorces)
        {
            return sorces.Select(client => Convert(client)).ToList();
        }

        public Client Convert(ClientVO sorce)
        {
            return new Client {
                Email = sorce.Email,
                Id = sorce.Id,
                Phone = sorce.Phone,
                Name = sorce.Name,
               
            };
        }

        public List<Client> Convert(List<ClientVO> sorces)
        {
            return sorces.Select(client => Convert(client)).ToList();
        }
    }
}
