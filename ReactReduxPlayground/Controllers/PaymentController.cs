using Microsoft.AspNetCore.Mvc;
using ReactReduxPlayground.Models;

namespace ReactReduxPlayground.Controllers;

[ApiController]
[Route("[controller]")]
public class PaymentController : ControllerBase
{
    [HttpPost]
    public PaymentData Post(PaymentRequest? dto) =>
        new() { Amount = dto?.Id?.Length * 100 ?? 0 };
}
