using Google.Cloud.Storage.V1;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    const string bucketName = "exercise-cloud-storage";
    private readonly ILogger<ImageController> _logger;

    public ImageController(ILogger<ImageController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<string> List()
    {
        var storage = StorageClient.Create();
        var objects = storage.ListObjects(bucketName);
        var mediaLinks = objects.Select(x => x.MediaLink);
        return mediaLinks;
    }

    [HttpPost]
    public IActionResult Upload(IFormFile file)
    {
        var fileName = $"{Guid.NewGuid().ToString()}{Path.GetExtension(file.FileName)}";
        using var transform = new ImageTransform(file.OpenReadStream())
            .FixOrientation()
            .RemoveMetadata()
            .Resize(400, 400)
            .Jpeg();
        UploadFile(transform.ToStream(), fileName);
        return Ok();
    }

    private void UploadFile(Stream stream, string objectName)
    {
        var storage = StorageClient.Create();
        storage.UploadObject(bucketName, objectName, null, stream);
        Console.WriteLine($"Uploaded {objectName}.");
    }
}
