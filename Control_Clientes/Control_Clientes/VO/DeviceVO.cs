using System;

namespace Control_Clientes.VO
{
    public class DeviceVO
    {
            public long Id { get; set; }
            public long ClientId { get; set; }
            public string Brand { get; set; }
            public string Model { get; set; }
            public string Type { get; set; }
            public string Defect { get; set; }
            public DateTime DayReceipt { get; set; }
            public int Deadline { get; set; }
            public decimal CostValue { get; set; }
            public decimal ReceivedValue { get; set; }
            public DateTime PayDay { get; set; }
            public bool Guarantee { get; set; }
    }
}   
