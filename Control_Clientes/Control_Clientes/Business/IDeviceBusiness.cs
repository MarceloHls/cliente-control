using Control_Clientes.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Business
{
   public interface IDeviceBusiness
    {
        DeviceVO Create(DeviceVO deviceVO);
        DeviceVO Update(DeviceVO deviceVO);
        DeviceVO GetDevice(long id);
        List<DeviceVO> GetDevicesClient(long clientId);

        void Delete(long id);
    }
}
