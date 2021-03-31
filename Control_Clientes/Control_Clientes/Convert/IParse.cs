using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Convert
{
   public interface IParse<Sorce,Destiny>
    {
        Destiny Convert(Sorce sorce);
        List<Destiny> Convert(List<Sorce> sorces);
    }
}
