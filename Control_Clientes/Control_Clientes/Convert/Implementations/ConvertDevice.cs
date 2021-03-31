using Control_Clientes.Model;
using Control_Clientes.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Convert.Implementations
{
    public class ConvertDevice : IParse<DeviceVO, Device>, IParse<Device, DeviceVO>
    {
        public Device Convert(DeviceVO sorce)
        {
            return new Device {
                ClientId = sorce.ClientId,
                CostValue = sorce.CostValue,
                DayReceipt = sorce.DayReceipt,
                Defect = sorce.Defect,
                Deadline = sorce.Deadline,
                PayDay = sorce.PayDay,
                Brand = sorce.Brand,
                Id = sorce.Id,
                Guarantee = sorce.Guarantee,
                Model = sorce.Model,
                ReceivedValue = sorce.ReceivedValue,
                Type = sorce.Type
            };
        }

        public List<Device> Convert(List<DeviceVO> sorces)
        {
            return sorces.Select(sorce => Convert(sorce)).ToList();
        }

        public DeviceVO Convert(Device sorce)
        {
            return new DeviceVO
            {
                ClientId = sorce.ClientId,
                CostValue = sorce.CostValue,
                DayReceipt = sorce.DayReceipt,
                Defect = sorce.Defect,
                Deadline = sorce.Deadline,
                PayDay = sorce.PayDay,
                Brand = sorce.Brand,
                Id = sorce.Id,
                Guarantee = sorce.Guarantee,
                Model = sorce.Model,
                ReceivedValue = sorce.ReceivedValue,
                Type = sorce.Type
            };
        }

        public List<DeviceVO> Convert(List<Device> sorces)
        {
            return sorces.Select(sorce => Convert(sorce)).ToList();
        }
    }
}
