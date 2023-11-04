import { AiOutlineCloudUpload } from "react-icons/ai";
import { useEffect, useState } from "react";
import InputChekbox from "./Components/InputChekbox";
import Images from "./Components/Images";
import Box from "./Components/Box";
import Button from "./Components/Button";
import Heading from "./Components/Heading";
import Picture from "./Components/Picture";
import Label from "./Components/Label";

function App() {
  const [images, setImages] = useState([
    "./assets/image-1.webp",
    "./assets/image-2.webp",
    "./assets/image-3.webp",
    "./assets/image-4.webp",
    "./assets/image-5.webp",
    // Add more image URLs here
  ]);
  console.log(images.length);

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
      <Box className="bg-blue-100 min-h-screen  flex items-center ">
        <Box className="max-w-screen-xl w-full  bg-white mx-auto rounded-xl border ">
          <Box className="headerTitel  border-b py-5">
            {selectedImages.length <= 0 && (
              <Heading className="titel text-lg font-bold px-5">
                Gallery
              </Heading>
            )}

            {selectedImages.length > 0 && (
              <Box className="Controll-part px-5 flex items-center justify-between">
                <Label className="flex items-center font-bold">
                  <InputChekbox
                    type="checkbox"
                    className="w-[15px] h-[20px] "
                    checked={true}
                    // checked={selectedImages.length === images.length}
                    // onChange={() =>
                    //   setSelectedImages(
                    //     selectedImages.length === images.length
                    //       ? []
                    //       : Array.from({ length: images.length }, (_, i) => i)
                    //   )
                    // }
                  />
                  <span className="select-file-count ml-2 text-lg">
                    {selectedImages.length}
                  </span>
                  Files Selected
                </Label>

                <Button
                  className="text-[red] font-medium text-base cursor-pointer"
                  onClick={handleImageDelete}
                >
                  Delete
                </Button>
              </Box>
            )}
          </Box>
          <Box className="p-5 flex justify-center items-center">
            <Box className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-10 md:auto-rows-[200px]">
              <Box
                className={`row-span-2 col-span-2 w-full overflow-hidden `}
                onDrop={(e) => handleDrop(e, 0)}
                onDragOver={(e) => e.preventDefault()}
              >
                <Box
                  className={`item-img relative group transition-colors overflow-hidden h-[440px] border rounded-md`}
                >
                  <Picture
                    className={`items after:absolute after:top-[100%] after:left-0 after:w-full after:h-full after:content after:bg-[rgba(0,0,0,0.48)] after:transition-colors after:z-10 group-after:rounded-md group-hover:after:top-0 after:rounded-md ${
                      selectedImages.includes(0)
                        ? "after:!top-0 after:bg-[rgba(2,2,2,0.2)]"
                        : ""
                    }`}
                  >
                    <Images
                      src={images[0]}
                      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                      alt={`image-1`}
                      onDragStart={(e) => handleDragStart(e, 0)}
                      draggable={true}
                    />
                  </Picture>
                  <InputChekbox
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
                </Box>
              </Box>

              {images
                .filter((_, index) => index !== 0)
                .map((image, index) => (
                  <Box
                    key={index + 1}
                    className={`item-img relative group transition-colors overflow-hidden  h-[200px] w-full border rounded-md`}
                    onDragOver={(e) => e.preventDefault()}
                    onDragStart={(e) => handleDragStart(e, index + 1)}
                    onDrop={(e) => handleDrop(e, index + 1)}
                    draggable={true}
                  >
                    <Picture
                      className={`items after:absolute after:top-[100%] after:left-0 after:w-full after:h-full after:content after:bg-[rgba(0,0,0,0.48)] after:transition-colors after:z-10 group-after:rounded-md group-hover:after:top-0 after:rounded-md ${
                        selectedImages.includes(index + 1)
                          ? "after:bg-[rgba(2,2,2,0.2)] rounded-md after:!top-0 "
                          : ""
                      }`}
                    >
                      <Images
                        className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                        src={image}
                        alt={`image-${index + 2}`}
                      />
                    </Picture>
                    <InputChekbox
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
                  </Box>
                ))}
              <Box
                className="upload-img border-2 py-4 rounded-md border-dotted"
                onDragOver={(e) => e.preventDefault()}
              >
                <Label className="flex justify-center items-center h-full flex-col">
                  <AiOutlineCloudUpload size={30} />
                  <InputChekbox
                    type="file"
                    className="opacity-0 invisible "
                    multiple={true}
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      const newImages = [...images];
                      files.forEach((file) => {
                        newImages.push(URL.createObjectURL(file));
                      });
                      setImages(newImages);
                    }}
                  />
                  <Heading className="text-base font-medium">Add Image</Heading>
                </Label>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
