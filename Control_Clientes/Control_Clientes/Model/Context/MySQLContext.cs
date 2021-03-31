using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Control_Clientes.Model.Context
{
    public class MySQLContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }

        public DbSet<Device> Devices { get; set; }

        public MySQLContext(DbContextOptions<MySQLContext> options)
            :base (options){}
    }
}
