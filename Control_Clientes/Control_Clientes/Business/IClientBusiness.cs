using Control_Clientes.Model;
using Control_Clientes.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Business
{
   public interface IClientBusiness
    {
        ClientVO Created(ClientVO clientVO);

        List<ClientVO> GetClients();

        ClientVO GetClient(long id);

        ClientVO UpdateClient(ClientVO clientVO);

        void DeleteClient(long id);


        

        

        
    }
}
