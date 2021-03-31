using Control_Clientes.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Respository
{
    public interface IDeviceRepository
    {
        Device Create(Device device);
        Device Update(Device device);
        Device GetDevice(long id);

        List<Device> ListDevicesClient(long clientId);

        List<Device> GetAllDevices();

        void Delete(long id);

    }
}
