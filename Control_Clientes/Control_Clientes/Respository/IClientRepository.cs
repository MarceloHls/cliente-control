using Control_Clientes.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Respository
{
   public interface IClientRepository
    {
        Client Created(Client client);
        Client Update(Client client);
        void Delete(long id);
        Client GetClient(long id);
        List<Client> GetClients();

        Device AddDevice(long id, Device device);
        string GetDevices(long id);


    }
}
