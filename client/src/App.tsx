import { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import { Api } from "./api";

function App() {
  const [file, setFile] = useState<File>();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetchImages().then((data) => setImages(data));
  }, []);

  async function fetchImages() {
    const response = await new Api().api.imageList();
    return response.data;
  }

  function fileChange(e: ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0]);
  }

  async function submit() {
    await new Api().api.imageCreate({ file });
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
            <img src={image} />
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
