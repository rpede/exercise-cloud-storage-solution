import { useEffect, useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetchImages().then((data) => setImages(data));
  }, []);

  async function fetchImages() {
    // TODO: Change to get list of image urls from server
    return [
      "https://placehold.co/400",
      "https://placehold.co/400",
      "https://placehold.co/400",
      "https://placehold.co/400",
    ];
  }

  function fileChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0]);
  }

  async function submit() {
    // TODO: Post the image from `file` variable to server
    await fetchImages();
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9">
          Image Uploader
        </h2>
      </div>

      <div className="carousel rounded-box">
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src="https://placehold.co/400" />
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mt-2">
          <input
            type="file"
            className="file-input w-full"
            onChange={fileChange}
          />
        </div>

        <button
          className="btn btn-primary w-full justify-center mt-6"
          onClick={submit}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default App;
