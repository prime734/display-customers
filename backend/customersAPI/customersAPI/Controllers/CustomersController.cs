using customersAPI.data;
using customersAPI.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace customersAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly CustomersDbContext _customersDbContext;
        public CustomersController(CustomersDbContext customersDbContext
            )
        {
            _customersDbContext = customersDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> getCustomers()
        {
           var customers = await _customersDbContext.customers.ToListAsync();
            return Ok(customers);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getCustomer([FromRoute]Guid id)
        {
            var customer = await _customersDbContext.customers.FirstOrDefaultAsync(x => x.id == id);
            if(customer == null) return NotFound();
            else return Ok(customer);
        }

        [HttpPost]
        public async Task<IActionResult> addCustomer([FromBody]Customer customerReq)
        {
            customerReq.id = Guid.NewGuid();
            await _customersDbContext.customers.AddAsync(customerReq);
            await _customersDbContext.SaveChangesAsync();
            return Ok(customerReq);
        }

        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> updateCustomer([FromRoute] Guid id, Customer updateCustomerReq)
        {
            var customer = await _customersDbContext.customers.FindAsync(id);
            if (customer == null) return NotFound();
            customer.firstname = updateCustomerReq.firstname;
            customer.surname = updateCustomerReq.surname;
            customer.email = updateCustomerReq.email;
            customer.cellphone = updateCustomerReq.cellphone;
            customer.invoiceTotal = updateCustomerReq.invoiceTotal;

            await _customersDbContext.SaveChangesAsync();
            return Ok(customer);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteCustomer([FromRoute] Guid id)
        {
            var customer = await _customersDbContext.customers.FindAsync(id);
            if (customer == null) return NotFound();

            _customersDbContext.customers.Remove(customer);
            await _customersDbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
