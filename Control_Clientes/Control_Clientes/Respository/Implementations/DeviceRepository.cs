using Control_Clientes.Model;
using Control_Clientes.Model.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Respository.Implementations
{
    public class DeviceRepository : IDeviceRepository
    {
        MySQLContext _context;

        public DeviceRepository(MySQLContext context)
        {
            _context = context;
        }

        public Device Create(Device device)
        {
            _context.Add(device);
            _context.SaveChanges();
            return device;
        }

        public void Delete(long id)
        {
            Device device = GetDevice(id);
            _context.Devices.Remove(device);
            _context.SaveChanges();
        }

        public List<Device> GetAllDevices()
        {
           return _context.Devices.ToList();
        }

        public Device GetDevice(long id)
        {
            Device device = _context.Devices.SingleOrDefault(device => device.Id.Equals(id));
            return device;
        }

        public List<Device> ListDevicesClient(long clientId)
        { 
            List<Device> devices  = _context.Devices.Where(d => d.ClientId.Equals(clientId)).ToList();
            return devices;
        }

        public Device Update(Device device)
        {
            Device legacyDevice = GetDevice(device.Id);
            _context.Entry(legacyDevice).CurrentValues.SetValues(device);
            _context.SaveChanges();
            return device;
        }
    }
}
