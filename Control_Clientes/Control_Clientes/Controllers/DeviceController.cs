using Control_Clientes.Business;
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
    public class DeviceController : ControllerBase
    {
        IDeviceBusiness _business;

        public DeviceController(IDeviceBusiness business)
        {
            _business = business;
        }

        [HttpGet("get/list/{clientId}")]

        public IActionResult GetListClient(long clientId)
        {
            return Ok(_business.GetDevicesClient(clientId));
        }

        [HttpGet("get/one/{id}")]

        public IActionResult GetDevice(long id)
        {
            return Ok(_business.GetDevice(id));
        }

        [HttpPost("create")]

        public IActionResult CreateDevice([FromBody] DeviceVO device)
        {
            return Ok(_business.Create(device));
        }

        [HttpPost("update")]

        public IActionResult UpdateDevice([FromBody] DeviceVO device)
        {
            return Ok(_business.Update(device));
        }

        [HttpDelete("delete/{id}")]

        public IActionResult DeleteDevice(long id)
        {
            _business.Delete(id);
            return NoContent();
        }
    }
}
