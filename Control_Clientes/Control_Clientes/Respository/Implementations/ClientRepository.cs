using Control_Clientes.Model;
using Control_Clientes.Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Respository
{
    public class ClientRepository : IClientRepository
    {
        MySQLContext _context;

        public ClientRepository(MySQLContext context)
        {
            _context = context;
        }
        public Device AddDevice(long id, Device device)
        {
            Client client = GetClient(id);
            client.Devices += $"[{device.Id}]";
            _context.Entry(client).CurrentValues.SetValues(client);
            _context.SaveChanges();
            return device;
        }

        public Client Created(Client client)
        {
            _context.Add(client);
            _context.SaveChanges();
            return client;
        }

        public void Delete(long id)
        {
            Client client = GetClient(id);
            _context.Clients.Remove(client);
            _context.SaveChanges();
        }

        public Client GetClient(long id)
        {
            Client client = _context.Clients.SingleOrDefault(c => c.Id.Equals(id));
            return client;
        }

        public List<Client> GetClients()
        {
            return _context.Clients.ToList();
        }

        public string GetDevices(long id)
        {
            return GetClient(id).Devices;
        }

        public Client Update(Client client)
        {
            Client clientLegacy = GetClient(client.Id);
            _context.Entry(clientLegacy).CurrentValues.SetValues(client);
            _context.SaveChanges();
            return client;
        }

        
    }
}
