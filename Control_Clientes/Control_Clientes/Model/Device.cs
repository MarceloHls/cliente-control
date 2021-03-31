using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Model
{
    [Table("devices")]
    public class Device
    {
        [Column("id")]
        public long Id { get; set; }

        [Column("client_id")]
        public long ClientId { get; set; }

        [Column("brand")]
        public string Brand { get; set; }

        [Column("model")]
        public string Model { get; set; }

        [Column("type")]
        public string Type { get; set; }

        [Column("defect")]
        public string Defect { get; set; }

        [Column("day_receipt")]
        public DateTime DayReceipt { get; set; }

        [Column("deadline")]
        public int Deadline { get; set; }

        [Column("cost_value")]
        public decimal CostValue { get; set; }

        [Column("received_value")]
        public decimal ReceivedValue { get; set; }

        [Column("payday")]
        public DateTime PayDay { get; set; }

        [Column("guarantee")]
        public bool Guarantee { get; set; }




    }
}
