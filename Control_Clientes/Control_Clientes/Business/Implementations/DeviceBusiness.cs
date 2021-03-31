using Control_Clientes.Convert.Implementations;
using Control_Clientes.Model;
using Control_Clientes.Respository;
using Control_Clientes.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Business.Implementations
{
    public class DeviceBusiness : IDeviceBusiness
    {
        IDeviceRepository _repository;
        ConvertDevice convert = new ConvertDevice();

        public DeviceBusiness(IDeviceRepository repository)
        {
            _repository = repository;
        }

        public DeviceVO Create(DeviceVO deviceVO)
        {
            Device device = convert.Convert(deviceVO);
            device = _repository.Create(device);
            deviceVO = convert.Convert(device);
            return deviceVO;
        }

        public void Delete(long id)
        {
            _repository.Delete(id);
        }

        public DeviceVO GetDevice(long id)
        {
            Device device = _repository.GetDevice(id);
            DeviceVO deviceVO = convert.Convert(device);
            return deviceVO;
        }

        public List<DeviceVO> GetDevicesClient(long clientId)
        {
            List<Device> devices = _repository.ListDevicesClient(clientId);
            List<DeviceVO> devicesVO = convert.Convert(devices);
            return devicesVO;
        }

        public DeviceVO Update(DeviceVO deviceVO)
        {
            Device device = convert.Convert(deviceVO);
            device = _repository.Update(device);
            deviceVO = convert.Convert(device);
            return deviceVO;
        }

        
    }
}
