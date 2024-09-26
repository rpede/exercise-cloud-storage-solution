# Cloud Storage Exercise

Implement endpoints in `server/Controllers/ImageController.cs` and add
functionality to upload and show images in `client/src/App.tsx`.

### Hints

- [Cloud Storage - Uploads and
  downloads](https://cloud.google.com/storage/docs/uploads-downloads)
  - See "Single-request upload", then "Upload object from memory" or "Streaming
    upload".

[Go to Cloud Storage](https://console.cloud.google.com/storage/browser) and
create a bucket.

Initialize Cloud Storage for the project:

```sh
gcloud auth application-default login
dotnet add server package Google.Cloud.Storage.V1 --version 4.10.0
```

Look for "TODO:" in comments.

**Remember: do NOT commit any secrets**

### Bonus

Resize and remove
[metadata](https://www.techtarget.com/whatis/definition/image-metadata) using
[Magick.NET](https://www.nuget.org/packages/Magick.NET-Q16-AnyCPU).

[Example usage](https://gist.github.com/rpede/e4914950fbd19b62af7b354a8f647871)

_Image metadata often include GPS location, which can be a privacy risk and
potentially lead to cyberstalking._

## Front-end

```sh
npm run dev --prefix client
```

<http://localhost:5173/>

## Back-end

```sh
dotnet watch --project server
```

<http://localhost:5015/api/swagger/index.html>

## Scaffold

To generate TypeScript code for interacting with the server run:

```sh
npm run scaffold --prefix client
```

[Watch](https://www.youtube.com/watch?v=M3kTvIgj__4) for an explanation.
