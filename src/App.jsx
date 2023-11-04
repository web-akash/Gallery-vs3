import { BiImageAlt } from "react-icons/bi";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    "./assets/image-1.webp",
    "./assets/image-2.webp",
    "./assets/image-3.webp",
    "./assets/image-4.webp",
    "./assets/image-5.webp",
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImageIndex, setFeatureImageIndex] = useState(0);

  const handleImageDelete = () => {
    const newImages = images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    setImages(newImages);
    setSelectedImages([]);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedImageIndex = e.dataTransfer.getData("imageIndex");
    if (index !== draggedImageIndex) {
      const newImages = [...images];
      const [draggedImage] = newImages.splice(draggedImageIndex, 1);
      newImages.splice(index, 0, draggedImage);
      setImages(newImages);

      if (featureImageIndex === draggedImageIndex) {
        setFeatureImageIndex(index);
      } else if (
        (featureImageIndex < draggedImageIndex && featureImageIndex >= index) ||
        (featureImageIndex > draggedImageIndex && featureImageIndex <= index)
      ) {
        setFeatureImageIndex(
          featureImageIndex + (index > draggedImageIndex ? 1 : -1)
        );
      }
    }
  };

  return (
    <>
      <div className="bg-blue-100 h-[100vh]  flex items-center">
        <div className="max-w-screen-xl w-full p-5 bg-white mx-auto rounded-md border">
          <div className="headerTitel border-b py-2">
            {selectedImages.length <= 0 && (
              <h1 className="titel text-lg">Gallery</h1>
            )}

            {selectedImages.length > 0 && (
              <div className="Controll-part flex justify-between">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedImages.length === images.length}
                    onChange={() =>
                      setSelectedImages(
                        selectedImages.length === images.length
                          ? []
                          : Array.from({ length: images.length }, (_, i) => i)
                      )
                    }
                  />
                  <span className="select-file-count ml-2 text-base">
                    {selectedImages.length}
                  </span>{" "}
                  Files Selected
                </label>
                <button
                  className="text-[red] text-base"
                  onClick={handleImageDelete}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="p-5 flex justify-center items-center">
            <div className="DragAndDrop-Container grid-container">
              <div
                className={`feature-img w-full overflow-hidden `}
                onDrop={(e) => handleDrop(e, 0)}
                onDragOver={(e) => e.preventDefault()}
              >
                <div
                  className={`item-img relative group transition-colors overflow-hidden`}
                >
                  <picture
                    className={`items after:absolute after:top-[100%] after:left-0 after:w-full after:h-full after:content after:bg-[rgba(0,0,0,0.48)] after:transition-colors after:z-10 group-after:rounded-md group-hover:after:top-0 after:rounded-md ${
                      selectedImages.includes(0)
                        ? "after:top-0 after:bg-[rgba(0,0,0,0.2)]"
                        : ""
                    }`}
                  >
                    <img
                      className="rounded-md  border "
                      src={images[0]}
                      alt={`image-1`}
                      onDragStart={(e) => handleDragStart(e, 0)}
                      draggable
                    />
                  </picture>
                  <input
                    type="checkbox"
                    className={`absolute ${
                      selectedImages.includes(0) ? "block " : "hidden"
                    } group-hover:block w-[20px] h-[20px] top-2 left-2 z-10`}
                    checked={selectedImages.includes(0)}
                    onChange={() => {
                      if (selectedImages.includes(0)) {
                        setSelectedImages(
                          selectedImages.filter((i) => i !== 0)
                        );
                      } else {
                        setSelectedImages([0, ...selectedImages]);
                      }
                    }}
                  />
                </div>
              </div>

              {images
                .filter((_, index) => index !== 0)
                .map((image, index) => (
                  <div
                    key={index + 1}
                    className={`item-img relative group transition-colors overflow-hidden `}
                    onDragOver={(e) => e.preventDefault()}
                    onDragStart={(e) => handleDragStart(e, index + 1)}
                    onDrop={(e) => handleDrop(e, index + 1)}
                    draggable
                  >
                    <picture
                      className={`items after:absolute after:top-[100%] after:left-0 after:w-full after:h-full after:content after:bg-[rgba(0,0,0,0.48)] after:transition-colors after:z-10 group-after:rounded-md group-hover:after:top-0 after:rounded-md ${
                        selectedImages.includes(index + 1)
                          ? "after:bg-[rgba(0,0,0,0.2)] after:top-0 "
                          : ""
                      }`}
                    >
                      <img
                        className="rounded-md border"
                        src={image}
                        alt={`image-${index + 2}`}
                      />
                    </picture>
                    <input
                      type="checkbox"
                      className={`absolute ${
                        selectedImages.includes(index + 1) ? "block " : "hidden"
                      } group-hover:block w-[20px] h-[20px] top-2 left-2 z-10`}
                      checked={selectedImages.includes(index + 1)}
                      onChange={() => {
                        if (selectedImages.includes(index + 1)) {
                          setSelectedImages(
                            selectedImages.filter((i) => i !== index + 1)
                          );
                        } else {
                          setSelectedImages([index + 1, ...selectedImages]);
                        }
                      }}
                    />
                  </div>
                ))}
              <div
                className="upload-img border border-dotted"
                onDragOver={(e) => e.preventDefault()}
              >
                <label>
                  <input
                    type="file"
                    className="opacity-0"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      const newImages = [...images];
                      files.forEach((file) => {
                        newImages.push(URL.createObjectURL(file));
                      });
                      setImages(newImages);
                    }}
                  />
                  <BiImageAlt size={40} className="text-center w-full mt-4" />
                  <h1 className="text-lg text-center">Add Image</h1>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
