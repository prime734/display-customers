namespace customersAPI.models
{
    public class Customer
    {
        public Guid id { get; set; }
        public string firstname { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public long cellphone { get; set; }
        public double invoiceTotal { get; set; }

    }
}
