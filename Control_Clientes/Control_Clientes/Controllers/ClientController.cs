using Control_Clientes.Business;
using Control_Clientes.Business.Implementations;
using Control_Clientes.Model;
using Control_Clientes.VO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : ControllerBase
    {

        IClientBusiness _bussines;

        public ClientController(IClientBusiness bussines)
        {
            _bussines = bussines;
        }

        [HttpGet("list")]
        public IActionResult ListClients()
        {
            return Ok(_bussines.GetClients());
        }

        [HttpPost("create")]

        public IActionResult CreatedClient([FromBody] ClientVO client)
        {
            return Ok(_bussines.Created(client));
        }

        [HttpGet("{id}")]

        public IActionResult GetById(long id)
        {
            return Ok(_bussines.GetClient(id));
        }

        [HttpPut("update")]

        public IActionResult UpdateClient([FromBody] ClientVO client)
        {
          return Ok(_bussines.UpdateClient(client));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteClient(long id)
        {
            _bussines.DeleteClient(id);
            return NoContent();
        }

    }
}
