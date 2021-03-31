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
    public class ClientBusiness : IClientBusiness
    {
        IClientRepository _repository;
        IDeviceBusiness _deviceBusiness;
        ConvertClientSent convert = new ConvertClientSent();


        public ClientBusiness(IClientRepository repository, IDeviceBusiness deviceBusiness )
        { 
            _repository = repository;
            _deviceBusiness = deviceBusiness;
        }
        public ClientVO Created(ClientVO clientVO)
        {
            Client client = convert.Convert(clientVO);
            client =  _repository.Created(client);
            clientVO = convert.Convert(client);
            return clientVO;
            
        }

        public void DeleteClient(long id)
        {
            _repository.Delete(id);
        }

        public ClientVO GetClient(long id)
        {
            Client client = _repository.GetClient(id);
            ClientVO clientVO = convert.Convert(client);
            List<DeviceVO> devices = _deviceBusiness.GetDevicesClient(id);
            clientVO.NumberOfDevices = devices.Count;
            return clientVO;
        }

        public List<ClientVO> GetClients()
        {
      
            var listClient = _repository.GetClients();
            List<ClientVO> clientsVO = convert.Convert(listClient);
            clientsVO = clientsVO.Select(c =>
            {
               List<DeviceVO> devices = _deviceBusiness.GetDevicesClient(c.Id);
               c.NumberOfDevices = devices.Count;
               return c;
            }).ToList();
            return clientsVO;
        }

        public ClientVO UpdateClient(ClientVO clientVO)
        {
            Client client = convert.Convert(clientVO);
            client = _repository.Update(client);
            clientVO = convert.Convert(client);
            return clientVO;
        }
    }
}
