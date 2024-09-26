using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private readonly ILogger<ImageController> _logger;

    public ImageController(ILogger<ImageController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<string> List()
    {
        // TODO: return medialink of the objects in your storage bucket.
        throw new NotImplementedException("Upload not implemented yet.");
    }

    [HttpPost]
    public IActionResult Upload(IFormFile file)
    {
        // TODO: upload image to Cloud Storage bucket.
        throw new NotImplementedException("Upload not implemented yet.");
    }
}
