using Microsoft.AspNetCore.Mvc;
using ReactReduxPlayground.Models;

namespace ReactReduxPlayground.Controllers;

[ApiController]
[Route("[controller]")]
public class PaymentController : ControllerBase
{
    [HttpGet]
    public PaymentData Get(decimal amount) =>
        new() { Amount = amount + 1M };
}
